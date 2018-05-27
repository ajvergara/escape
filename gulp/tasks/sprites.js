const gulp       = require("gulp"),
      svgSprites = require("gulp-svg-sprite"),
      del        = require("del"),
      rename     = require("gulp-rename"),
      svg2png    = require("gulp-svg2png");

config = {
  shape: {
    spacing: {
      padding: 2
    }
  },
  mode: {
    css: {
      variables: {
        "replaceSvgWithPng": function(){
          return function(sprites, render){
            return render(sprites).split("svg").join("png");
          }
        }
      },
      sprite: "sprite.svg",
      render: {
        css: {
          template: "./gulp/templates/sprites.css"
        }
      }
    }
  }
}

gulp.task("beginClean", function(){
  return del(["./app/assets/images/sprites", "./app/temp/sprites"]);
});

gulp.task("createSprite", ["beginClean"], function(){
  return gulp.src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprites(config))
    .pipe(gulp.dest("./app/temp/sprites"));
});

gulp.task("createPngCopy", ["createSprite"], function(){
  return gulp.src("./app/temp/sprites/**/*.svg")
    .pipe(svg2png())
    .pipe(gulp.dest("./app/temp/sprites"));
});

gulp.task("copySpriteGraphicFile", ["createPngCopy"], function(){
  return gulp.src("./app/temp/sprites/css/*.{svg,png}")
    .pipe(gulp.dest("./app/assets/images/sprites"));
});

gulp.task("copySpriteCSS", ["createSprite"], function(){
  return gulp.src("./app/temp/sprites/**/*.css")
    .pipe(rename("_sprites.css"))
    .pipe(gulp.dest("./app/assets/styles/modules"));
});

gulp.task("icons", ["beginClean", "createSprite", "createPngCopy", "copySpriteGraphicFile", "copySpriteCSS"]);
