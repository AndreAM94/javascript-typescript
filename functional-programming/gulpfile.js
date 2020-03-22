var gulp = require('gulp');
var exec = require('child_process').exec;
var runArg = require('yargs').argv.run;

gulp.task(runArg, function(cb) {
    var run = `node .\\${runArg}\\index.js`;
    exec(run, 2000000000, function(err, stdout, stderr) {
        console.log(stdout || stderr);
        cb(err);
    });
})

gulp.task('default', gulp.task(runArg))