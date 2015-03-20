module.exports = function(grunt) {
	grunt.initConfig({
		nodewebkit: {
			gmail: {
				options: {
					build_dir: './webkitbuilds',
					mac: true,
					win: false,
					linux32: false,
					linux64: false,
					mac_icns: './gmail_src/icon.icns',
					zip: true,
					credits: './gmail_src/credits.html'
				},
				src: ['./gmail_src/**/*']
			},
			google_apps: {
				options: {
					build_dir: './webkitbuilds',
					mac: true,
					win: false,
					linux32: false,
					linux64: false,
					mac_icns: './google_apps_src/icon.icns',
					zip: true,
					credits: './google_apps_src/credits.html'
				},
				src: ['./google_apps_src/**/*']
			},
			fbm: {
				options: {
					build_dir: './webkitbuilds',
					mac: true,
					win: false,
					linux32: false,
					linux64: false,
					mac_icns: './fbm_src/icon.icns',
					zip: true,
					credits: './fbm_src/credits.html'
				},
				src: ['./fbm_src/**/*']
			},
			wrike: {
				options: {
					build_dir: './webkitbuilds',
					mac: true,
					win: false,
					linux32: false,
					linux64: false,
					mac_icns: './wrike_src/icon.icns',
					zip: true,
					credits: './wrike_src/credits.html'
				},
				src: ['./wrike_src/**/*']
			}
		}
	});

	grunt.loadNpmTasks('grunt-node-webkit-builder');

	grunt.registerTask('default', ['nodewebkit']);
};
