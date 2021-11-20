import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
// import { AnyAaaaRecord } from 'dns';

@Component({
  selector: 'app-serviceprovider',
  templateUrl: './serviceprovider.page.html',
  styleUrls: ['./serviceprovider.page.scss'],
})
export class ServiceproviderPage implements OnInit {
  
   service: any;
  textBoxDisabled = true;

  
  myForm: FormGroup;
  submitted = false;

  constructor(private router: Router,public formBuilder: FormBuilder,public toastCtrl:ToastController,
    private http:HttpClient) { }

  ngOnInit() {

    let service =  localStorage.getItem("servicename");
   if(service == "finance"){
      console.log(service);
      
    this.http.get("http://localhost:1337/fb-finances").subscribe((res)=>{
       this.service =res;
      console.log(res);
     
    })
    
  }

  
    
       
    }
  
  }