import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

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
}