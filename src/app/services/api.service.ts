import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  sharedData:any;

  constructor(private http:HttpClient) {
   }

  //get service requester details
 getRequests(service){
 return this.http.get(`http://localhost:1337/${service}`);
}

// Register User
register(data){
  return this.http.post("http://localhost:1337/register",data);
}

// User login
login(data){
  return this.http.post("http://localhost:1337/login",data);

}
//post service
postservice(service,data){
  return this.http.get(`http://localhost:1337/${service}`,data);
}


 //update views
  update(data){
    return this.http.post("http://localhost:1337/update",data)
  }

}