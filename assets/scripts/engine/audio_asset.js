class AudioAsset {

  constructor(pool) {
    this.pool = pool;
  }

  load() {
    this.pool.forEach(audio => audio.load());
  }

  play(volume = 1.0, loop = false) {
    const audio = this.pool.find(audio => audio.ended || audio.currentTime === 0);
    if (audio) {
      audio.volume = volume;
      audio.loop = loop;
      audio.play();
      return audio;
    }
  }

  playEndless(volume = 1.0) {
    return this.play(volume, true);
  }
}
