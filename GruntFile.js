module.exports = function(grunt) {  

    // Project configuration.  
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'),
        
        //压缩js - layer
        uglify: {  
            options: {
                expand: true
            },
            'laypage.js': {
                options: {
                     banner: '/*! layPage-v<%= pkg.version %> <%= pkg.description %> License MIT  <%= pkg.homepage %> By <%= pkg.author %> */\n;'
                },
                src: './src/laypage.js',  
                dest: './laypage.js'
            }
        },

        //压缩css
        cssmin: {
            options : { 
                compatibility : 'ie8', //设置兼容模式 
                noAdvanced : true //取消高级特性 
            }
            ,layer: {
                files: [{
                    expand: true,
                    cwd: './src/skin',
                    src: ['*.css', '!*.min.css'],
                    dest: './skin'
                }]
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default', ['uglify', 'cssmin']);

  
};  