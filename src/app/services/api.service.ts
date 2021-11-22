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
//Finance
finance(data){
 return this.http.post("http://localhost:1337/finances",data);
}
//cab service
cabservice(data){
  return this.http.post("http://localhost:1337/cabservices",data);
}

//Ac Service 
acservice(data){
 return this.http.post("http://localhost:1337/acservices",data)
}
//construction
construction(data){
  return this.http.post("http://localhost:1337/constructions",data)
 }

 //interior
interior(data){
  return this.http.post("http://localhost:1337/interiors",data)
 }

}