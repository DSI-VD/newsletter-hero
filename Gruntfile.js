module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: {
        src: ["dist"]
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/'},
        ]
      }
    },

    inlinecss: {
        main: {
            options: {
            },
            files: {
                'dist/index.html': 'dist/index.html'
            }
        }
    },

    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-inline-css');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'copy', 'inlinecss']);

  grunt.registerTask('publish', ['clean', 'copy', 'inlinecss', 'gh-pages']);

};
