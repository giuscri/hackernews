module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            all: ["src/js/*.js"]
        },
        uglify: {
            target: {
                files: {
                    "build/js/main.js": ["src/js/main.js"],
                    "build/js/controllers.js": ["src/js/controllers.js"]
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    "build/css/main.css": ["src/css/main.css"]
                }
            }
        },
        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            target: {
                files: {
                    "build/index.html": ["src/index.html"],
                    "build/templates/main.html": ["src/templates/main.html"],
                    "build/templates/comments.html": ["src/templates/comments.html"]
                }
            }
        },
        "gh-pages": {
            options: {
                base: "build"
            },
            src: ["**"]
        }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-gh-pages");
    grunt.registerTask("default", ["jshint", "uglify", "cssmin", "htmlmin", "gh-pages"]);
};
// The quickest solution I've found for linking
// libraries from Grunt ...
var shell = require("shelljs");
shell.exec("mkdir build; cd build; cp -r ../src/bower_components .; cd ..");
