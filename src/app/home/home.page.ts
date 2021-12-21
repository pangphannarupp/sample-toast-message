import { Component } from '@angular/core';
import { ToastMessage } from '@awesome-cordova-plugins/toast-message/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // win: any = window;

  constructor(private toastMessage: ToastMessage) {}

  showMessage() {
    // this.win.ToastMessage.show("Hello Plugin", function() {}, function() {});

    this.toastMessage.show('Hello Plugin').then(res =>{
      console.log(res);
    });
  }
}
