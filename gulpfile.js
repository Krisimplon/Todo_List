var browserSync = require("browser-sync"),
	gulp = require("gulp"),
	gulpCleanCss = require("gulp-clean-css"),
	gulpSass = require("gulp-sass"),
	gulpUglify = require("gulp-uglify"),
	mergeStream = require("merge-stream");

gulp.task("style", function() {
	gulp.src("./node_modules/materialize-css/dist/css/materialize.min.css")
		.pipe(gulp.dest("./dist/css/"));
});

gulp.task("script", function() {
	var jQuery = gulp.src("./node_modules/jquery/dist/jquery.min.js")
		.pipe(gulp.dest("./dist/js/"));

	var materialize = gulp.src("./node_modules/materialize-css/dist/js/materialize.min.js")
		.pipe(gulp.dest("./dist/js/"));

	return mergeStream (jQuery, materialize);
});

gulp.task("sass", function() {
	return gulp.src("./assets/scss/*.scss")
		.pipe(gulpSass()) //transforme le scss en css
		.pipe(gulpCleanCss()) //mimifie le css
		.pipe(gulp.dest("./dist/css/"));
});

gulp.task("uglify", function() { //mimifie le js
	gulp.src("./assets/js/*.js")
		.pipe(gulpUglify())
		.pipe(gulp.dest("./dist/js/"));
});

gulp.task("serveur", function() { //lance le serveur
	browserSync.init({			  //lance la surveillance du dossier racine (demandé) et actualise la page
		server: "./"
	});
});

gulp.task("surveillance", ['style', 'script', 'sass', 'uglify', 'serveur'], function() { //surveille et exécute toutes les tâches décrites précédemment
	gulp.watch("./assets/scss/*.scss", ["sass"]).on("change", browserSync.reload)
	gulp.watch("./assets/js/*.js", ["uglify"]).on("change", browserSync.reload)
	gulp.watch("./*.html").on("change", browserSync.reload)
});

gulp.task("default", ["surveillance"]); //lance automatiquement le gulp watch lorsque je tape gulp sur la console