import { Injectable } from '@angular/core';
import {BehaviorSubject, observable, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse, HttpHandler, HttpInterceptor,HttpRequest,HttpErrorResponse} from '@angular/common/http';
import {map, tap ,catchError} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
BASE_PRODUCT_URL="http://192.168.1.200:83/products"
  constructor(private http: HttpClient,private cookieService: CookieService) { }



  getAllProducts(){
  var url=this.BASE_PRODUCT_URL
  return this.http.get(url)
  }
  addProduct(data){
  //console.log('product--->>>', data)
  var url=this.BASE_PRODUCT_URL


//   Object.keys().forEach(key => {
//   //console.log("form data",data[key])
//     formData.append(key, data[key]);
//   });
//   let imagefile=new File("../assest/bitbucket.png")
//   formData.set("image",fileReader.readAsText(imagefile))
//   console.log("form data",data)
        let headers = new HttpHeaders();
        headers=headers.append('Content-Type', 'application/json');
        //console.log('url@@', url);
  return this.http.post(url,data,{headers:headers,observe:'response'}) .pipe(
         tap(resp => {
           //console.log('response', resp);
           return resp
         })
    );
  }

 getAproduct(product_id){
 var url=this.BASE_PRODUCT_URL+"?product_id="+product_id
 return this.http.get(url)
 }
 getProductByGroup(group_name){
 var url=this.BASE_PRODUCT_URL+"/get_product_by_group_name?group_name="+group_name
 return this.http.get(url)
 }

}
