import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss'],
})
export class ProviderPage implements OnInit {

Data:any[];
  service=localStorage.getItem("service");

  constructor(private http:HttpClient) { 
    console.log(this.service);
    
  }

  ngOnInit() {
this.getDetails();
  }
getDetails(){
          
          if(this.service ==="Construction" ){
            this.http.get("http://localhost:1337/constructions").subscribe((res:any)=>{
            this.Data=res;
            console.log(this.Data); 
          })
          }
           
          else if(this.service ==="AC Service" ){
            this.http.get("http://localhost:1337/acservices").subscribe((res:any)=>{
              this.Data=res;
              console.log(this.Data); 
            }) 
          }
          else if(this.service ==="Cab Services" ){
            this.http.get("http://localhost:1337/cabservices").subscribe((res:any)=>{
              this.Data=res;
              console.log(this.Data); 
            }) 
          }
          else if(this.service ==="Interiors" ){
            this.http.get("http://localhost:1337/interiors").subscribe((res:any)=>{
              this.Data=res;
              console.log(this.Data); 
            }) 
          }
          else{
                console.log("No Data Available");
                
          }

      
     
}

}
