import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  textBoxDisabled = true;

  
  regForm: FormGroup;
  submitted = false;

  Service: any = ['Finance', 'Construction', 'Medicine', 'Vehicle','Cab Services','AC Service']


  constructor(  
    private router: Router,public formBuilder: FormBuilder,public toastCtrl:ToastController,
   private http:HttpClient ) {
     }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
     email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
     phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
     type: ['', [Validators.required]],
   
  
   })
  }
 
  
check(e){

  console.log('checked :',e.target.value);
  let service = e.target.value;
if (service =="service provider") {

  this.regForm.addControl("servicename", new FormControl('',Validators.required))
  this.regForm.addControl("orgname", new FormControl('',Validators.required))
  this.regForm.addControl("pan",new FormControl('',Validators.required))

  // this.regForm.get("servicename").setValidators([Validators.required]),
  // this.regForm.get("orgname").setValidators([Validators.required]),
  // this.regForm.get("pan").setValidators([Validators.required])

} else {
  this.regForm.removeControl("servicename")
  this.regForm.removeControl("orgname")
  this.regForm.removeControl("pan")
}
}
  get errorCtr() {  
    return this.regForm.controls;
     
  }


  async openToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'Registring Please wait.....',
            duration: 2000  

    });  
    toast.present();  
    toast.onDidDismiss().then((val) => {  
      console.log('Toast Dismissed');  
    });  
  }  
  async openSucessToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'Registered SuccessFull...',
            duration: 2000  

    });  
    toast.present();  
    toast.onDidDismiss().then((val) => {  
      console.log('Toast Dismissed');  
    });  
  }  
  async openFailToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'Register Failed!!!',
            duration: 2000  

    });  
    toast.present();  
    toast.onDidDismiss().then((val) => {  
      console.log('Toast Dismissed');  
    });  
  }  

  onSubmit() {
    this.submitted = true;

    if (!this.regForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      this.openToast();
      this.http.post("http://localhost:1337/fb-users",this.regForm.value).subscribe((res)=>{
        console.log(res);
        this.openSucessToast();
        this.router.navigateByUrl('login')
      })
      console.log(this.regForm.value)     
    }
  }
}

