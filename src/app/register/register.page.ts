import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  regForm: FormGroup;
  submitted = false;

  
  textBoxDisabled = true;


  constructor(  
    private router: Router,public formBuilder: FormBuilder,public toastCtrl:ToastController
    ) {
     }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
     email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
     phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
     type: ['', [Validators.required]]
    //  servicename:['',[Validators.required]],
    //  orgname: ['', [Validators.required]],
    //  pan:['',[Validators.required]]
  
   })
  }
 
  
check(e){

  console.log('checked :',e);

  this.regForm= this.formBuilder.group({
    
      servicename:['',[Validators.required]],
      orgname: ['', [Validators.required]],
      pan:['',[Validators.required]]
  })
  // this.regForm =new FormGroup({
  //   servicename:new FormControl('',Validators.required),
  //   orgname:new FormControl('',Validators.required),
  //   pan:new FormControl('',Validators.required),


  // })

}
  get errorCtr() {  
    return this.regForm.controls;
    
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
      console.log(this.regForm.value)     
    }
  }
  


}

