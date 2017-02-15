module.exports = function (grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                compress: false,
                mangle: false
            },
            applib: {
                src: [
                    'app/app.config.js',
                    'app/app.module.js',
                    'app/app.routes.js',
                    'app/services/registered.service.js',
                    'app/controllers/rootController.js',
                    'app/controllers/registerController.js',
                    'app/controllers/speakerController.js',
                    'app/controllers/speakerdetail.controller.js',
                    'app/controllers/agenda.controller.js',
                    'app/controllers/venue.controller.js',
                    'app/components/agenda/agenda.component.js',
                    'app/components/navbar/navbarcomponent.js',
                    'app/components/speaker/speakercomponent.js'
                ],
                dest: 'app/bundle.js'
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'app/assets/css/main.css': 'app/dev/scss/main.scss'
                }
            }
        }
    });
    // Default task.  
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('scss', ['sass']);
};