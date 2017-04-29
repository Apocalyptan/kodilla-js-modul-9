module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    },
    
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
        'css/main.css': 'scss/main.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: {
        spawn: false,
        }
      },
      js: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint']
      }
    }
  });

  	// Load the plugin tasks.
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  	// Default task(s).
  grunt.registerTask('default', [/*"jshint",*/ "sass", "watch"]);

};