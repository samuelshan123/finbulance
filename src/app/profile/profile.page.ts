import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  name: string;
  email: string;

  constructor(public router: Router, public popoverCtrl: PopoverController) { }

  
  ngOnInit() {
    this.name = localStorage.getItem("user");
    this.email = localStorage.getItem("email")
  }

  async logout() {
    localStorage.clear();
    await this.popoverCtrl.dismiss();
    this.router.navigate(["/login"])
          
  }
}
