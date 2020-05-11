import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: '¡Bienvenido a nuestra aplicación!',
      duration: 2000
    });
    toast.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.presentToast();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
