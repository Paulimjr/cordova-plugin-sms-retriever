var exec = require('cordova/exec');

/**
 * Hash key string to determine which verification messages to send to your app
 *    - After generating the hash key you need to create a message on your server look like the following:
 *    Your ExampleApp code is 254698 (lenght code equals 6 digits)
 *    FA+9qCX9VSu
 */
exports.generateHashKey = function (success, error) {
   exec(success, error, 'SmsRetrieverPlugin', 'generateHashKey');
};

/**
 * Start OTP listener to receive SMS with code and getting the code extracted
 *    Example of result is: 222222
 */
exports.startSmsListener = function (success, error) {
   exec(success, error, 'SmsRetrieverPlugin', 'startSmsListener');
};