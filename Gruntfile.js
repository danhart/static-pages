module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus: {
            compile: {
                files: [{
                    expand: true,
                    cwd: 'public/styles/',
                    src: ['**/*.styl'],
                    dest: 'public/build/styles/',
                    ext: '.css',
                }]
            }
        },
        less: {
            compile: {
                files: [{
                    expand: true,
                    cwd: 'public/styles/',
                    src: ['**/*.less'],
                    dest: 'public/build/styles/',
                    ext: '.css',
                }],
                options: {
                    compress: true
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'public/scripts',
                    name: "static-main",
                    out: "public/build/scripts/static-main.js"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['stylus', 'less', 'requirejs']);
};
