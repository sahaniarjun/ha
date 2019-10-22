module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({ 
    
      connect: {
        server: {
          options: {
            port: 8000,
          }
        }
      },
      watch: {
        files: ['*'],
        tasks: ['connect'],
        
      },
      karma: {
        unit: {
          configFile: 'karma.conf.js'
        }
      }
    });

    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['connect','watch']);
  
  };
  
