import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
name:string;
  constructor() {
    this.loadUser();
  }

  loadUser(){
    if(!localStorage.getItem("user")){
console.log("user not set ");

    }else{
     this.name= localStorage.getItem("user");
    }
  }
  

}
