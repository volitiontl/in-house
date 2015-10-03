var gulp = require('gulp');
var exec=require('child_process').execSync

gulp.task('default', function() {

});

gulp.task('build',function(){
  exec('browserify index.js -o ./dist/in-house.js')
})