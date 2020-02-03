import { Injectable } from '@angular/core';
import {BehaviorSubject, observable, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConfigsService {
APS_CONFIG_BASE_URL = 'http://192.168.1.200:82/configurations';
  constructor(private http: HttpClient) { }

  getAppsConfig(){



      // return this.http.post<any>(login_url, { email:email, password:password },{headers})
      //       .pipe(map(user => {
      //         //  login successful if there's a jwt token in the response
      //           if (user) {
      //               // store user details and jwt token in local storage to keep user logged in between page refreshes
      //               localStorage.setItem('currentUser', JSON.stringify(user));
      //               //this.currentUserSubject.next(user);
      //           }
      //         console.log(user);
      //           console.log("headers ",user.headers);
      //           return user;
      //       }));

      return this.http.get(this.APS_CONFIG_BASE_URL);
  }


    saveAppsConfig(name,url){
      //console.log("name :",name," url :",url);

      var headers=new HttpHeaders();
      headers.append("Access-Control-Allow-Origin","*");
      headers.append("Access-Control-Allow-Methods","GET, POST");
      return this.http.put<any>(this.APS_CONFIG_BASE_URL, { name:name,url:url },{headers})
            .pipe(map(data => {
              //  login successful if there's a jwt token in the response
              //   if (data) {
              //       // store user details and jwt token in local storage to keep user logged in between page refreshes
              //       localStorage.setItem('currentUser', JSON.stringify(data));
              //       //this.currentUserSubject.next(user);
              //   }
              console.log(data);

                return data;
            }));

      //return this.http.get(edit_apps_config_url);
  }

  getUserAppsConfigs(email){
    var edit_apps_config_url = this.APS_CONFIG_BASE_URL+'?user=';
      return this.http.get(edit_apps_config_url+email);

  }

  saveUserCredentials(app_name,user,username,password){
      var edit_apps_cred_url = this.APS_CONFIG_BASE_URL+'/'+app_name;


      return this.http.put<any>(edit_apps_cred_url, { app_name:app_name,user:user,username:username,password:password })
            .pipe(map(data => {
              //  login successful if there's a jwt token in the response
              //   if (data) {
              //       // store user details and jwt token in local storage to keep user logged in between page refreshes
              //       localStorage.setItem('currentUser', JSON.stringify(data));
              //       //this.currentUserSubject.next(user);
              //   }
              console.log(data);

                return data;
            }));

      //return this.http.get(edit_apps_config_url);
  }
}
