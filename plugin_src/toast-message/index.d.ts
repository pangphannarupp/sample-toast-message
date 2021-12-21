import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Toast Message
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { ToastMessage } from '@awesome-cordova-plugins/toast-message';
 *
 *
 * constructor(private toastMessage: ToastMessage) { }
 *
 * ...
 *
 *
 * this.toastMessage.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class ToastMessageOriginal extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    show(message: string): Promise<any>;
}

export declare const ToastMessage: ToastMessageOriginal;