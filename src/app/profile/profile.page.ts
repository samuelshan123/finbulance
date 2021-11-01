import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
name:string;
email:string;
  constructor() { }

  
  ngOnInit() {
    if(!localStorage.getItem("name")&&!localStorage.getItem("email")){
    console.log("user not found");
    
  }else{
    this.name=localStorage.getItem("name");
    this.email=localStorage.getItem("email");

  }
  
}
}