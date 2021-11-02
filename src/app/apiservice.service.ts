import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(public http:HttpClient) { }
  login(value){
    this.http.post('http://localhost:1337/admin/fb-users/login',value)
  }
}
