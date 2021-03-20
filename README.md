# TestAutomationRepo

To Run Test locally

    npm run test 


To Run Test in Browserstack


Set Environment variable 

    export BROWSERSTACK_USER = ''
    export BROWSERSTACK_ACCESS_KEY = ''
    export BROWSERSTACK_APP_ID = ''

And upload the app to Browserstack and set the app url in BROWSERSTACK_APP_ID and then run

    npm run bs:test