const { TimelineService } = require('wdio-timeline-reporter/timeline-service');
// const { default: TimelineReporter } = require('wdio-timeline-reporter');
exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    port: 4723,
    reporters: ['spec'],
    services: [['appium',{logPath : './logs'}]],//,[TimelineService]],
    appium: { command: 'appium' },
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: [
            '@babel/register'
        ]
    },

    before: function(){
        var chai = require('chai');
        global.expect = chai.expect;
        chai.should();
    },
    outputDir: './logs'
}
