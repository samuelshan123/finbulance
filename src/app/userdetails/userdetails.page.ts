import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    
     

  constructor(private formBuilder: FormBuilder,private api:ApiService){
  
  }
  
  ngOnInit() {
    this.detForm = this.formBuilder.group({
      note: ['', Validators.required]
  });
  
  
  if (this.service ==="Cab Services") {
    var ptime = new Date(this.data.pickup_date)
   var return_time = new Date(this.data.return_date)

    var time;
    var date;
    if (this.data.return_date === null) {
      time = "-"
      date ="-"
    }else{
      
      time = return_time.toLocaleString('en-US', { hour: 'numeric',minute:'2-digit' ,hour12: true })

      date=  return_time.toISOString().split('T')[0].split('-').reverse().join('-')

    }
      
    
    
let cab =[
  {name:"Name",value:this.data.user_id.name},
  {name:"E-mail",value:this.data.user_id.email},
  {name:"Phone",value:this.data.user_id.phone},
  {name:"Pickup",value:this.data.pickup},
  {name:"Pickup Date",value:ptime.toISOString().split('T')[0].split('-').reverse().join('-')},
  {name:"Pickup Time",value:ptime.toLocaleString('en-US', { hour: 'numeric',minute:'2-digit' ,hour12: true })},
  {name:"Person",value:this.data.person},
  {name:"Vehicle",value:this.data.vehicle},
  {name:"Trip",value:this.data.trip},
  {name:"Destination",value:this.data.destination},
  {name:"Return Date",value:date},
  {name:"Return Time",value:time},
]

 this.Details =cab
    
 
} else if(this.service ==="Construction") {

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