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
					zip: true
				},
				src: ['./gmail_src/**/*']
			},
			gcal: {
				options: {
					build_dir: './webkitbuilds',
					mac: true,
					win: false,
					linux32: false,
					linux64: false,
					mac_icns: './gcal_src/icon.icns',
					zip: true
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
					zip: true
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
					zip: true
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
					zip: true
				},
				src: ['./wrike_src/**/*']
			}
		}
	});

	grunt.loadNpmTasks('grunt-node-webkit-builder');

	grunt.registerTask('default', ['nodewebkit']);
};
