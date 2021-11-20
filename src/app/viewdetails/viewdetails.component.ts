import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss'],
})
export class ViewdetailsComponent implements OnInit {

  Data:any[];

Details:any[];

  service=localStorage.getItem("service");

  constructor(private http:HttpClient,private api:ApiService,private router:Router) { 
    console.log(this.service);
  }

  

  getData(details){
    this.api.sharedData = details;
    console.log(this.api.sharedData);
    this.router.navigateByUrl('userdetails');
  }

  ngOnInit() {
    if(this.service ==="Construction" ){
      var servicename="constructions";
      this.api.getRequests(servicename).subscribe((res:any)=>{
        this.Data=res;

        console.log(this.Data); 
      })
    }
     
    else if(this.service ==="AC Service" ){
          
      var servicename="acservices";
      this.api.getRequests(servicename).subscribe((res:any)=>{
        this.Data=res;
        console.log(this.Data); 
      })  
    }
    
    else if(this.service ==="Cab Services" ){

      var servicename="cabservices";
      this.api.getRequests(servicename).subscribe((res:any)=>{
        this.Data=res;
        console.log(this.Data); 
      })   
    }

    else if(this.service ==="Interiors" ){
          
      var servicename="interiors";
      this.api.getRequests(servicename).subscribe((res:any)=>{
        this.Data=res;
        console.log(this.Data); 
      })
      
    }
    else{
          console.log("No Data Available");
          
    }

}
 
}

