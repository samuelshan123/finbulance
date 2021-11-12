import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-houseinteriors',
  templateUrl: './houseinteriors.page.html',
  styleUrls: ['./houseinteriors.page.scss'],
})
export class HouseinteriorsPage implements OnInit {
  interiorForm: FormGroup;
  submitted = false;
  Works: any = ['Kitchen interior','False Celling','Office Interior','Furniture Design']
  id:any =localStorage.getItem("id");

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit() {
      this.interiorForm = this.formBuilder.group({
          budget: ['', Validators.required],
          work: ['', Validators.required],
          time: ['', Validators.required],
          address: ['', Validators.required]


     
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.interiorForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.interiorForm.invalid) {
          return;
      }else{
        console.log(this.id);
       let Interiors ={
         work:this.interiorForm.value.work,
         budget:this.interiorForm.value.budget,
         time:this.interiorForm.value.time,
         address:this.interiorForm.value.address,
         user_id:this.id

       }

           console.log(this.interiorForm.value);
           this.http.post("http://localhost:1337/interiors",Interiors).subscribe((res)=>{
            console.log(res);
            this.router.navigateByUrl('home')
          })
  
        }
  
    }
  }