class Assets {

  constructor() {
    this.count = 0;
    this.loadedCount = 0;
    this.promises = [];
    this.image = {};
    this.audio = {};
    this.listeners = [];
  }

  addEventListener(type, listener) {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(listener);
  }

  dispatchEvent(type, e) {
    const listeners = this.listeners[type] || [];
    listeners.forEach(listener => listener(e));
  }

  addImage(name, url) {
    const img = new Image();
    img.src = url;
    const promise = new Promise((resolve, reject) => {
      img.addEventListener("load", e => {
        this.image[name] = img;
        this.loadedCount++;
        this.dispatchEvent('loading', this.getLoadingProgress());
        resolve(img);
      });
    });
    this.promises.push(promise);
    this.count++;
  }

  addAudio(name, url, num = 1) {
    const pool = [];
    for (let i = 0; i < num; i++) {
      const audio = new Audio(url);
      const promise = new Promise((resolve, reject) => {
        audio.addEventListener("canplaythrough", e => {
          this.loadedCount++;
          this.dispatchEvent('loading', this.getLoadingProgress());
          resolve(audio);
        });
      });
      pool.push(audio);
      this.promises.push(promise);
      this.count++;
    }
    this.audio[name] = new AudioAsset(pool);
  }

  loadAudios() {
    Object.values(this.audio).forEach(audio => audio.load());
  }

  loadAll() {
    return Promise.all(this.promises);
  }

  getLoadingProgress() {
    return this.loadedCount / this.count;
  }

}