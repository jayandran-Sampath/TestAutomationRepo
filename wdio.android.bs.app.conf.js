const { config } = require('./wdio.shared-conf');
delete config.port;

exports.config = {
    ...config,
    user : process.env.BROWSERSTACK_USER || 'BROWSERSTACK_USER',
    key : process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    services: [
      ['browserstack', {
          browserstackLocal: false
      }]
    ],
    maxInstances: 10,
    capabilities : [
        {
          'browserstack.debug': true,
          app: process.env.BROWSERSTACK_APP_ID || 'BROWSERSTACK_APP_ID',
          'deviceName': 'Google Pixel 3',
          'platformVersion': '9.0',
          platformName: 'Android',
          project: 'TestAutomation',
          build: 'android',
          name: 'sampletest',
          'automationName': 'UiAutomator2',
          'noReset': true,
          'newCommandTimeout': 240,
          'appWaitDuration': 30000
        },
    ],
    outputDir: './logs'
};