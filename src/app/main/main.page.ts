import { Component, OnInit } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public popoverCtrl: PopoverController) { 
    
  }

  ngOnInit() {
  }
  
  
  async notifications(ev: any) {  
    const popover = await this.popoverCtrl.create({  
        component: ProfilePage,  
      event: ev, 
    });  
    return await popover.present();  
  }  
}
