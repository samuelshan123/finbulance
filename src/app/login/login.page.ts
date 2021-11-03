import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isTextFieldType: boolean;

  myForm: FormGroup;
  submitted = false;
  API ="http://localhost:1337/login";

  email:string;
  password:string;

  constructor(private http:HttpClient,public formBuilder: FormBuilder,public router:Router,public toastCtrl: ToastController,public navCtrl: NavController) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
      // phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  async openToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'Logging in Please wait.....',
            duration: 2000  

    });  
    toast.present();  
    toast.onDidDismiss().then((val) => {  
      console.log('Toast Dismissed');  
    });  
  }  
  async openSucessToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'Login SuccessFull...',
            duration: 2000  
    });  
    toast.present();  
    toast.onDidDismiss().then((val) => {  
      console.log('Toast Dismissed');  
    });  
  }  
  async openFailToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'Invalid User Data!!!',
            duration: 2000  

    });  
    toast.present();  
    toast.onDidDismiss().then((val) => {  
      console.log('Toast Dismissed');  
    });  
  }  

  get errorCtr() {
    return this.myForm.controls;
  }

  
  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      // this.openToast();
      this.login();
      console.log(this.myForm.value)
    }
  }
  login(){

    // this.http.get(`${this.API}/?email=${email}&&password=${password}`)
     this.http.post(this.API,this.myForm.value)
    .subscribe((res)=>{
      console.log(res);

      if ( res[0] && res[0].type=="service provider") {
        console.log(res[0].type)
        this.openSucessToast();
        localStorage.setItem("name",res[0].name);
        localStorage.setItem("email",res[0].email);
        this.openSucessToast();
        this.router.navigate(["/home"]);
  
      } else if ( res[0] && res[0].type=="service requester"){
        console.log(res[0].type);
        localStorage.setItem("name",res[0].name);
        localStorage.setItem("email",res[0].email);
  
        console.log(res[0].name);
        this.router.navigate(["/home"]);
      } else{
          console.log("something went wrong");
          this.openFailToast(); 

      }
    }
      
    );






      }
    }
 

    

