module.exports = function (config) {
    config.set({
        // Karma configuration

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        frameworks: ['jasmine', 'webpack'],

        // list of files / patterns to load in the browser
        files: [
            'tests/test-cookie-helper.js',
            'dist/index.js',

            {
                pattern: 'node_modules/sinon/pkg/sinon.js',
                watched: false,
                included: true
            }
        ],

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'coverage'
        reporters: ['dots', 'coverage'],

        preprocessors: {
            'tests/test-cookie-helper.js': ['webpack', 'sourcemap']
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/preset-env',
                                        {
                                            targets: {
                                                ie: '10'
                                            }
                                        }
                                    ]
                                ]
                            }
                        }
                    }
                ]
            }
        },

        coverageReporter: {
            type: 'lcov',
            dir: 'tests/unit/coverage/',
            instrumenterOptions: {
                istanbul: {
                    noCompact: true
                }
            }
        },

        // web server port
        port: 9876,

        // cli runner port
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        //logLevel: console.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Firefox', 'Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
