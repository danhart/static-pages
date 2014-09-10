module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                files: { "public/styles/main.css": "client/less/main.less" },
                options: {
                    compress: true
                }
            }
        },
        browserify: {
            compile: {
                files: { "public/scripts/main.js": "client/js/main.js" },
            }
        },
        uglify: {
            main: {
                files: { "public/scripts/main.js": "public/scripts/main.js" }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'browserify', 'uglify']);
};
