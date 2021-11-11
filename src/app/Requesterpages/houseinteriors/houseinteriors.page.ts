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
  Works: any = ['Kitchen interior','Celling']
  id:any =localStorage.getItem("id");

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit() {
      this.interiorForm = this.formBuilder.group({
          budget: ['', Validators.required],
          work: ['', Validators.required],
     
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
        

           console.log(this.interiorForm.value);
          //  this.http.post("http://localhost:1337/acservices",AcService).subscribe((res)=>{
          //   console.log(res);
          //   this.router.navigateByUrl('home')
          // })
  
        }
  
    }
  }