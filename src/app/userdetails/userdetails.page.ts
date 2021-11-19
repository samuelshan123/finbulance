import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {

  detForm: FormGroup;
  submitted = false;
  // cab:any =JSON.parse(localStorage.getItem("cab"))
  data:any=this.api.sharedData;

     Details:any[] =['Name : '+this.data.user_id.name,
     'E-mail : '+this.data.user_id.email,
     'Pick-up Place : '+this.data.pickup,
     'Pick-up Date & time : '+this.data.pickup_date,
     'No of Persons : '+this.data.person,
     'Vehicle : '+this.data.vehicle,
     'Destination : '+this.data.destination,
    "Trip type : "+this.data.trip,
  "Return Date : "+this.data.return_date]
    //  Fields:any[];
    //  Values:any;

    //  User:any={
    //   name:this.data.user_id.name,
    //   email:this.data.user_id.email,
    //   destination:this.data.destination

    //  }

    
   

  constructor(private formBuilder: FormBuilder,private api:ApiService){
    // for(const key in this.User) {
    // console.log(`${key} : ${this.User[key]}`);
          
    //}
      
    

  }
  ngOnInit() {
    this.detForm = this.formBuilder.group({
      desc: ['', Validators.required]
  });
  
}


// convenience getter for easy access to form fields
get f() { return this.detForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.detForm.invalid) {
      return;
  }else{
   
    console.log(this.detForm.value);
    

    }

}
}