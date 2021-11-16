import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {

  name = 'Dynamic Add Fields';
  values = [];
  ngOnInit() {
  }

  removevalue(i){
    this.values.splice(i,1);
  }

  // addvalue(){
  //   this.values.push({value: ""});
  // }
}