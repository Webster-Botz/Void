module.exports = function(grunt) {
 
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.initConfig({

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['test']
      }
    }
  });
 
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', 'watch');
};