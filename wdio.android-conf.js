const { join } = require('path');
// const { TimelineService } = require('wdio-timeline-reporter/timeline-service');
// const { default: TimelineReporter } = require('wdio-timeline-reporter');
exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities : [
        {
            platformName: 'Android',
            maxInstances: 1,
            'appium:deviceName': 'Android9',
            'appium:platformVersion': '9',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.2.1.apk'),
            'appium:noReset': true,
            'appium:newCommandTimeout': 240,
        },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    port: 4723, // default appium port
    services: ['appium'],//,[TimelineService]],
    // reporters: [
    //     'spec',
    //     ['timeline',{
    //         outputDir: 'report',
    //         fileName: 'timeline-report.html',
    //         screenshotStrategy: 'none'
    //     }]
    // ],
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
    }
}
