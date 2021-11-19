import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {

  detForm: FormGroup;
  submitted = false;
  cab:any =JSON.parse(localStorage.getItem("cab"))

     Data:any[] =[this.cab.user_id.name,this.cab.user_id.email,this.cab.destination]

   

  constructor(private formBuilder: FormBuilder){


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