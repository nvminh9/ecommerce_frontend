import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private http : HttpClient,
  ) { }

    // call api seller
    private url = 'http://localhost:3000/api/'

    delete_product(productId:any) : Observable<any>{
      let api = 'product/delete'
      return this.http.post(this.url + api,productId)
    }
    create_product(formdata:FormData) : Observable<any>{
      let api = 'product/create'
      return this.http.post(this.url + api, formdata)
    }
    update_product(formData:FormData) : Observable<any>{
      let api = 'product/update'
      return this.http.post(this.url + api, formData)
    }
    // list_product()
  
  
}
