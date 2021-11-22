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

  service=localStorage.getItem("service");


     Details:any[] 
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
      note: ['', Validators.required]
  });
  
  if (this.service ==="Cab Services") {
     
//     
let cab =[
  {name:"Name",value:this.data.user_id.name},
  {name:"E-mail",value:this.data.user_id.email},
  {name:"Phone",value:this.data.user_id.phone},
  {name:"Pickup",value:this.data.pickup},
  {name:"Pickup Date",value:this.data.pickup_date},
  {name:"Person",value:this.data.person},
  {name:"Vehicle",value:this.data.vehicle},
  {name:"Trip",value:this.data.trip},
  {name:"Destination",value:this.data.destination},
  {name:"Return Date",value:this.data.return_date},



]

 this.Details =cab
    
 
} else if(this.service ==="Construction") {
// let construction=["Name : "+this.data.user_id.name,
// 'E-mail : '+this.data.user_id.email,
// "Square Feet : "+this.data.sqrft,
// "Budget :" +this.data.budget,
// "Months : "+this.data.months,
// "Contract : "+this.data.contract,
// "Area : "+this.data.area,
// "Notes : "+this.data.notes
// ]
let construction=[{name:"Name",value:this.data.user_id.name},
{name:"E-mail",value:this.data.user_id.email},
{name:"Phone",value:this.data.user_id.phone},
{name:"Square Feet",value:this.data.sqrft},
{name:"Budget",value:this.data.budget},
{name:"Area",value:this.data.area},
{name:"Contract",value:this.data.contract},
{name:"Months",value:this.data.months},
]

this.Details =construction

  }

  else if(this.service==="Interiors"){

//     let interiors=["Name : "+this.data.user_id.name,
//   "E-mail : "+this.data.user_id.email,
//   "Work Name : "+this.data.work,
//   "Feet x Feet : "+this.data.feet,
//   "Budget : "+this.data.budget,
// "Time : "+this.data.time,
// "Address : "+this.data.address]
let interiors =[{name:"Name",value:this.data.user_id.name},
{name:"E-mail",value:this.data.user_id.email},
{name:"Phone",value:this.data.user_id.phone},
{name:"Work Name",value:this.data.work},
{name:"Feet x Feet",value:this.data.feet},
{name:"Budget",value:this.data.budget},
{name:"Time",value:this.data.time},
{name:"Address",value:this.data.address},]
this.Details =interiors

  }
  else if(this.service==="AC Service"){

  //   let ac=["Name : "+this.data.user_id.name,
  //   "E-mail : "+this.data.user_id.email,
  //   "Price : "+this.data.price,
  //   "Capacity (Tons or Litre) : "+this.data.litre,
  //   "AC Type : "+this.data.type,
  // "Address : "+this.data.address]
let ac =[{name:"Name",value:this.data.user_id.name},
{name:"E-mail",value:this.data.user_id.email},
{name:"Phone",value:this.data.user_id.phone},
{name:"Price",value:this.data.price},
{name:"Capacity (Tons or Litre)",value:this.data.litre},
{name:"AC Type",value:this.data.type},
{name:"Address",value:this.data.address},]

  this.Details =ac

  }

  else if(this.service==="Finance"){
      
      // let finance=["Name : "+this.data.user_id.name,
      // "E-mail : "+this.data.user_id.email,
      // "Amount : "+this.data.amount,
      // "Intrest : "+this.data.intrest,
      // "Time Period : "+this.data.time]
  
      let finance =[{name:"Name",value:this.data.user_id.name},
      {name:"E-mail",value:this.data.user_id.email},
      {name:"Phone",value:this.data.user_id.phone},
      {name:"Amount",value:this.data.amount},
      {name:"Intrest",value:this.data.intrest},
      {name:"Time Period",value:this.data.time},]
      this.Details =finance
  
  }
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