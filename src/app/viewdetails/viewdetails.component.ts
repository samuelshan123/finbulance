import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss'],
})
export class ViewdetailsComponent implements OnInit {

  Data:any[];
  service=localStorage.getItem("service");

  constructor(private http:HttpClient,private api:ApiService) { 
    console.log(this.service);
    
  }



  getData(id){
    console.log(id);
    //  this.http.get("http://localhost:1337/cabservices/"+id).subscribe((res)=>{
    //    console.log(res);

    //    localStorage.setItem("cab",JSON.stringify(res))
    //  })
  
    

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

