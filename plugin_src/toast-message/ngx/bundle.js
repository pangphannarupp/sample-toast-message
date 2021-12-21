'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var ToastMessage = /** @class */ (function (_super) {
    tslib.__extends(ToastMessage, _super);
    function ToastMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToastMessage.prototype.show = function (message) { return core.cordova(this, "show", {}, arguments); };
    ToastMessage.pluginName = "ToastMessage";
    ToastMessage.plugin = "mcnc-plugin-toast-message";
    ToastMessage.pluginRef = "ToastMessage";
    ToastMessage.repo = "";
    ToastMessage.install = "";
    ToastMessage.installVariables = [];
    ToastMessage.platforms = ["Android"];
    ToastMessage.decorators = [
        { type: core$1.Injectable }
    ];
    return ToastMessage;
}(core.AwesomeCordovaNativePlugin));

exports.ToastMessage = ToastMessage;
