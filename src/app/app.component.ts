import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';



// Initialize Firebase


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: LoginPage;
  zone: NgZone;

  constructor(platform: Platform, private statusBar: StatusBar,
              private splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyBbGGhPFI_qivRCfmGufSZUi8ERZy3c32Y",
      authDomain: "follow-up-ff6d1.firebaseapp.com",
      databaseURL: "https://follow-up-ff6d1.firebaseio.com",
      projectId: "follow-up-ff6d1",
      storageBucket: "follow-up-ff6d1.appspot.com",
      messagingSenderId: "835579691753"
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


}

