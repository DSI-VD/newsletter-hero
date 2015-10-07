module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    inlinecss: {
        main: {
            options: {
            },
            files: {
                'dist/index.html': 'src/hero.html'
            }
        }
    }
  });

  // Load the plugin that provides the "inline-css" task.
  grunt.loadNpmTasks('grunt-inline-css');

  // Default task(s).
  grunt.registerTask('default', ['inlinecss']);

};
