module.exports = function(grunt){

grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),

/**
* Task
**/

task: {
console.log("Hello World...! Hey Chetan from Grunt")
}

});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.registerTask('default', ['task']);
}