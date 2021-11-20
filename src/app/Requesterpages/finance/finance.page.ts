import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {
  financeForm: FormGroup;
  submitted = false;
  id:any =localStorage.getItem("id");

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router,private api:ApiService) { }

  ngOnInit() {
    this.financeForm = this.formBuilder.group({
      amount: ['', Validators.required],
      intrest: ['', Validators.required],
      time: ['', Validators.required],
  })
}
 // convenience getter for easy access to form fields
 get f() { return this.financeForm.controls; }

 onSubmit() {
     this.submitted = true;

     // stop here if form is invalid
     if (this.financeForm.invalid) {
         return;
     }else{
       console.log(this.id);
      let Finance ={
        amount:this.financeForm.value.amount,
        intrest:this.financeForm.value.intrest,
        time:this.financeForm.value.time,
        user_id:this.id,
        staus:"open"
      }

          console.log(this.financeForm.value);
          this.api.finance(Finance).subscribe((res)=>{
           console.log(res);
           this.router.navigateByUrl('home')
         })
 
       }
 
   }
 }