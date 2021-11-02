// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { LoginserviceService } from '../apiservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder,public http:HttpClient,public apiservice:LoginserviceService ) { }
  

ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }
  get errorCtr() {
    return this.myForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // console.log();
    
     
    if (!this.myForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      this.apiservice.login(this.myForm.value)
      console.log(this.myForm.value)
    }
  }
}
// ngOnInit() {
//   this.myform.getUsers().subscribe(res => {

//});
// }