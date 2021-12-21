var exec = require('cordova/exec');

var PLUGIN_NAME = 'ToastMessage';

var ToastMessage = {
    show: function(arg, success, fail) {
        exec(success, fail, PLUGIN_NAME, 'show', [arg]);
    }
}

module.exports = ToastMessage;