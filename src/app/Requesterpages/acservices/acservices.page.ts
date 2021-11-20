import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-acservices',
  templateUrl: './acservices.page.html',
  styleUrls: ['./acservices.page.scss'],
})
export class AcservicesPage implements OnInit {
  acForm: FormGroup;
  submitted = false;
  Type: any = ['Cassette','Portable','Split','Window','Tower']
  id:any =localStorage.getItem("id");

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router,private api:ApiService) { }

  ngOnInit() {
      this.acForm = this.formBuilder.group({
          price: ['', Validators.required],
          capacity: ['', Validators.required],
          type: ['', Validators.required],
          address: ['', Validators.required],
     
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.acForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.acForm.invalid) {
          return;
      }else{
        console.log(this.id);
        
        let AcService:any={
           price:this.acForm.value.price,
           capacity:this.acForm.value.capacity,
           type:this.acForm.value.type,
           address:this.acForm.value.type,
           user_id:this.id,
           staus:"open"
          }
        
           console.log(this.acForm.value);
           this.api.acservice(AcService).subscribe((res)=>{
            console.log(res);
            this.router.navigateByUrl('home')
          })
  
        }
  
    }
  }