import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
name:string;
  
  Pages = [
    {
      title: 'Services',
      icon: 'cog',
      children: [
        { title: 'Construction', url: '/home/construction', icon: 'construct' },
        { title: 'Finance', url: '/home/finance', icon: 'logo-usd' },
        { title: 'Medical Emergency', url: '/home/medical', icon: 'medkit' },
        { title: 'Home Appliances', url: '/home/homeappliances', icon: 'home' },
        { title: 'Vehicle', url: '/home/vehicle', icon: 'build' },
        { title: 'Cab Services', url: '/home/cabservices', icon: 'car' }
      ]
    },
    {
      title: 'Your Booking History',
      url: '/home/mybooking',
      icon: 'ticket'
    },
    // {
    //   title: 'Register',
    //   url: '/register',
    //   icon: 'person'
    // }
  ];

  constructor( private platform: Platform,) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }


}

