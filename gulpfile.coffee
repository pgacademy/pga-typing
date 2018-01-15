gulp = require 'gulp'
concat = require 'gulp-concat'

gulp.task 'scripts', (done)->
  gulp.src 'assets/scripts/engine/*.js'
    .pipe concat 'engine.js'
    .pipe gulp.dest './public/scripts/'
  gulp.src 'assets/scripts/typing/**/*.js'
    .pipe concat 'typing.js'
    .pipe gulp.dest './public/scripts/'

gulp.task 'images', (done)->
  gulp.src 'assets/images/**/*.{jpg,jpeg,png,gif}'
    .pipe gulp.dest './public/images/'

gulp.task 'task1', ->
  new Promise (resolve, reject)->
    setTimeout -> 
      console.log 'took 1 sec'
      resolve()
    , 1000


gulp.task 'watch', gulp.parallel('scripts', 'images'), (done)->
  gulp.watch 'assets/scripts/**/*.js', gulp.series('scripts')
  gulp.watch 'assets/images/**/*', gulp.series('images')
  done()
  
gulp.task 'default', gulp.parallel('scripts', 'images')
