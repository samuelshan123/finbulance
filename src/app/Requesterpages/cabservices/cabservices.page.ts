import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabservices',
  templateUrl: './cabservices.page.html',
  styleUrls: ['./cabservices.page.scss'],
})
export class CabservicesPage implements OnInit {
  id:any =localStorage.getItem("id");
  cabForm: FormGroup;
  submitted = false;
  Contract: any = ['Full Contract','Labour Contarct']
  Area: any = ['Town','Village']
 Vehicle:any=['Mini Car','Prime Play Car','Prime Sedan Car','Prime SUV Car','Tempo Traveller','Omini Bus','Tourist Bus']

  constructor(private formBuilder: FormBuilder,private router:Router,private http:HttpClient) { }
 
  ngOnInit() {
    
      this.cabForm = this.formBuilder.group({
          pickup: ['', Validators.required],
          person: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          vehicle: ['', Validators.required],
          destination: ['', Validators.required],
          trip: ['', Validators.required],
          pickup_date: ['', Validators.required]     
      });
  }
 
  check(e){

    let mytrip = e.target.value;
    console.log('checked :',mytrip);

  if (mytrip =="round trip") {
  
    this.cabForm.addControl("return_date", new FormControl('',Validators.required))
   
  } else {
    this.cabForm.removeControl("return_date")
    
  }
  }
  get f() { return this.cabForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.cabForm.invalid) {
        console.log("required");
        
          return;
      }else{
        console.log(this.id);
        
      // let Post:any={
      //     sqrft:this.cabForm.value.sqrft,
      //     budget:this.cabForm.value.budget,
      //     months:this.cabForm.value.months,
      //     contract:this.cabForm.value.contract,
      //     area:this.cabForm.value.area,
      //     notes:this.cabForm.value.notes,
      //     user_id:this.id

      //   }
      
         console.log(this.cabForm.value);
        //  this.http.post("http://localhost:1337/constructions",Post).subscribe((res)=>{
        //   console.log(res);
        //   this.router.navigateByUrl('home')
        // })

      }

  }
}

