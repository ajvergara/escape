const gulp         = require("gulp"),
      watch        = require("gulp-watch"),
      postcss      = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      cssvars      = require("postcss-simple-vars"),
      cssimport    = require("postcss-import"),
      cssnested    = require("postcss-nested");

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssvars, cssimport, autoprefixer, cssnested]))
    .on("error", function(errorInfo){
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function(){
  watch("./app/assets/styles/**/*.css", function(){
    gulp.start("styles");
  });

  watch("./app/index.html", function(){
    console.log("Html has been changed!");
  });
});
