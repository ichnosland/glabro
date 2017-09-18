"use strict";

var LIVERELOAD_PORT, lrSnippet, mountFolder;

// SETTINGS

var LIVERELOAD_PORT = 35729;
var GRUNT_SERVER_PORT = 9000;
var LOCALHOST_PORT = 80;
var LOCALHOST = "glabro.local";

lrSnippet = require("connect-livereload")({
    port: LIVERELOAD_PORT
});

var mountFolder = function(connect, dir) {
    return connect.static(require("path").resolve(dir));
};

var proxySnippet = require("grunt-connect-proxy/lib/utils").proxyRequest;

module.exports = function(grunt) {
    /// CONNECT

    var proxySnippet = require("grunt-connect-proxy/lib/utils").proxyRequest;
    var serveStatic = require("serve-static");
    //load Npm tasks
    grunt.loadNpmTasks("grunt-connect-proxy");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-open");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-imagemin");

    // const plugin imagemin declaration
    const imagemin = require("imagemin");
    const imageminJpegtran = require("imagemin-jpegtran");
    const imageminSvgo = require("imagemin-svgo");
    const imageminGifsicle = require("imagemin-gifsicle");
    const imageminOptipng = require("imagemin-optipng");
    /*
	imagemin(['assets/svg/*.svg'], 'assets/svg/', {
		use: [
			imageminSvgo({
				plugins: [
					{removeViewBox: false}
				]
			})
		]
	}).then(() => {
		console.log('SVG optimized');
	});

	imagemin(['assets/gif/*.gif'], 'assets/gif/', {use: [imageminGifsicle()]}).then(() => {
		console.log('GIF optimized');
	});

	imagemin(['assets/png/*.png'], 'assets/png/', {use: [imageminOptipng()]}).then(() => {
		console.log('PNG optimized');
	});

	imagemin(['assets/jpg/*.jpg'], 'assets/jpg/', {use: [imageminJpegtran()]}).then(() => {
		console.log('JPG optimized');
	});
*/

    // set up the configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        /// WATCH TASK
        watch: {
            less: {
                files: "less/**/*.less",
                tasks: "less",
                options: {
                    livereload: true
                }
            },

            jshint: {
                files: "js/scripts/*.js",
                tasks: ["jshint"]
            },

            uglify: {
                files: "js/**/*.js",
                tasks: ["uglify:dev"],
                options: {
                    livereload: true
                }
            }
        },

        build: {
            less: {
                files: "less/**/*.less",
                tasks: "less",
                options: {
                    livereload: false
                }
            },
            jshint: {
                files: "js/scripts/*.js",
                tasks: ["jshint"]
            },
            uglify: {
                files: "js/**/*.js",
                tasks: ["uglify:dev"],
                options: {
                    livereload: false
                }
            }
        },

        /// LESS TASK
        less: {
            src: {
                files: {
                    "css/main.css": "less/main.less"
                }
            },
            build: {
                options: {
                    compress: true,
                    yuicompress: true,
                    plugins: [
                        new(require("less-plugin-autoprefix"))({
                            //browsers: ["last 2 versions"]
                            browsers: ["last 2 versions", "safari 5", "ie 11", "opera 12.1", "ios 6", "android 4"]
                        })
                    ]
                },
                files: {
                    "css/main.css": "less/main.less"
                }
            }
        },

        // JSHINT
        jshint: {
            files: ["js/scripts/*.js"],
            options: {
                expr: true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        /// UGLIFY
        uglify: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> dist.min.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    report: "gzip",
                    beautify: false,
                    compress: false,
                    mangle: true
                },
                files: [{
                        dest: "main.js",
                        src: ["js/scripts/**/*.js"]
                    },
                    {
                        dest: "vendor.js",
                        src: ["js/vendor/**/*.js"]
                    }
                ]
            },
            dev: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> dev.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    beautify: false,
                    compress: false,
                    mangle: true
                },
                files: [{
                        dest: "main.js",
                        src: ["js/scripts/**/*.js"]
                    },
                    {
                        dest: "vendor.js",
                        src: ["js/vendor/**/*.js"]
                    }
                ]
            }
        },

        /// IMAGE OPT.
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: "assets/",
                    src: ["**/*.{png,jpg,gif}"],
                    dest: "dist/"
                }]
            }
        },
        // server
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: "public",
                    logger: "dev",
                    hostname: LOCALHOST
                },
                proxies: [
                    /* as defined above */
                ]
            }
        },

        // open
        open: {
            src: {
                path: "http://" + LOCALHOST + ":" + GRUNT_SERVER_PORT
            },
            build: {
                path: "http://" + LOCALHOST + ":" + LOCALHOST_PORT
            }
        }
    });

    grunt.registerTask("server", ["configureProxies:server", "connect:server", "open:src", "watch"]);
    grunt.registerTask("build", ["less:build", "jshint", "uglify:dist"]);
};