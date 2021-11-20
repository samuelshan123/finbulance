import { Component } from '@angular/core';
import { MenuController, Platform, PopoverController } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

Pages:any=[];

  requesterpage = [
    {
      title: 'Services',
      icon: 'cog',
      children: [
        { title: 'Construction', url: '/home/construction', icon: 'construct' },
        { title: 'Finance', url: '/home/finance', icon: 'logo-usd' },
        { title: 'AC Service', url: '/home/acservices', icon: 'snow' },
        { title: 'House Interiors', url: '/home/houseinteriors', icon: 'home' },
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

  providerpage=[
    {
      title: 'Notification',
      url: '/home/mybooking',
      icon: 'notifications'
    },
    {
      title: 'Service Status',
      icon: 'ticket',
      children: [
        { title: 'Cancelled Services', url: '/home/construction', icon: 'close-circle-outline' },
        { title: 'Pending Services', url: '/home/finance', icon: 'hourglass' },
        { title: 'Completed Services', url: '/home/medical', icon: 'checkmark-circle-outline' },
      ]
    },
  ];
 usertype:string=localStorage.getItem("type");
  selectedmenuName: any;

  constructor(public popoverCtrl:PopoverController ) {
   if(this.usertype==="service requester"){
     this.Pages=this.requesterpage;
   }
   else if(this.usertype==="service provider"){
    this.Pages=this.providerpage;
   }
  }
  async notifications(ev: any) {  
    const popover = await this.popoverCtrl.create({  
        component: ProfilePage,  
      event: ev, 
    });  
    return await popover.present();  
  }  
 
  public selectedmenu(menu){
    this.selectedmenuName=menu.title;
  }


}

