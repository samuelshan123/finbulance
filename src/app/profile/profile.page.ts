import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
name:string;
email:string;
  constructor( private popoverController:PopoverController,private router:Router ) {  }

  
  ngOnInit() {
    if(!localStorage.getItem("name")&&!localStorage.getItem("email")){
    console.log("user not found");
    
  }else{
    this.name=localStorage.getItem("name");
    this.email=localStorage.getItem("email");

  }
  
}
 logout() {
  localStorage.clear();
   this.popoverController.dismiss();
  this.router.navigate(["/login"])
        
}
}