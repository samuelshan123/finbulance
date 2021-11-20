import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
  
})
export class FinancePage implements OnInit {
  myForm: FormGroup;
  submitted = false;
  
  //  id = localStorage.getItem("id");
   

  constructor(private formBuilder: FormBuilder, private http:HttpClient) { }
 
  ngOnInit() {
      this.myForm = this.formBuilder.group({
          Amount: ['', Validators.required],
            Intrest: ['', Validators.required],
            TimePeriod: ['', Validators.required],
                // User_id:['', Validators.required],


          
      });
  }

 
  get f() { return this.myForm.controls; }

  onSubmit() {
    // console.log(this.id)
  
       let id = localStorage.getItem("id");
     
    let value={
      User_id:id

     }

     




  if (this.myForm.invalid) {
        console.log("invalid")
          return;
      }
      else{
        let finance={
          Amount:this.myForm.value.Amount,
           Intrest:this.myForm.value.Intrest,
            TimePeriod:this.myForm.value.TimePeriod,
              User_id:id



        }
      this.http.post("http://localhost:1337/fb-finances",finance).subscribe((res)=>{
        console.log(res);
      });


      
  }
}
  }