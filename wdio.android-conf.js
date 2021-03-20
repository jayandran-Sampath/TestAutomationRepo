const { join } = require('path');
const { config } = require('./wdio.shared-conf');

exports.config = {
    ...config,
    maxInstances: 10,
    capabilities : [
        {
            platformName: 'Android',
            maxInstances: 1,
            'deviceName': 'emulator1',
            'platformVersion': '11.0',
            'orientation': 'PORTRAIT',
            'automationName': 'UiAutomator2',
            'app': join(process.cwd(), './apps/Android-NativeDemoApp-0.2.1.apk'),
            'noReset': true,
            'newCommandTimeout': 240,
            'appWaitDuration': 30000,
             excludeDriverLogs: ['*']
        },
    ],
    appium: { command: 'appium' },
    outputDir: './logs'
}
