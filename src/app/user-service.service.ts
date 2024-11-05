import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = 'http://localhost:3000/api/';

  constructor(
    private http : HttpClient
  ) { }

  // cau hinh Headers
  options = { headers : new HttpHeaders().set("Content-Type" , "application/json") }

  user_register(formData : FormData) : Observable<any>{
    const api = 'user/create'
    return this.http.post(this.url + api, formData) // post (api_name , data , option_headers)
  }
  user_login(user_email:any, user_password:any) : Observable<any>{
    const api = 'user/login'
    const body = {
      "user_email" : user_email,
      "user_password" : user_password
    }
    return this.http.post(this.url + api, body, this.options)
  }
}
