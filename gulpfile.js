const gulp = require('gulp');
const ftp = require('vinyl-ftp');
const gutil = require('gulp-util');
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
	const remotePath = '/volta.one/hivtest';
	const conn = ftp.create({
		host: 'oknadev.ftp.tools',
		user: args.user,
		password: args.password,
		log: gutil.log
	});
	gulp.src(['./dist/*.html', './dist/**/*.*'])
		.pipe(conn.newer(remotePath))
		.pipe(conn.dest(remotePath));
});
