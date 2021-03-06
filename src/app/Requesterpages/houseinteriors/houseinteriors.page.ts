import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router,private api:ApiService) { }

  ngOnInit() {
      this.interiorForm = this.formBuilder.group({
          budget: ['', Validators.required],
          work: ['', Validators.required],
          time: ['', Validators.required],
          address: ['', Validators.required],
          feet: ['', Validators.required]



     
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
         feet:this.interiorForm.value.feet,
         user_id:this.id,
         staus:"open"
       }
       const path ="interiors"

           console.log(this.interiorForm.value);
           this.api.postservice(path,Interiors).subscribe((res)=>{
            console.log(res);
            this.router.navigateByUrl('home')
          })
  
        }
  
    }
  }