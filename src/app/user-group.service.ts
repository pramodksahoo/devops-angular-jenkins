import { Injectable } from '@angular/core';
import { User } from './models/user';
import {BehaviorSubject, observable, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse, HttpHandler, HttpInterceptor,HttpRequest,HttpErrorResponse} from '@angular/common/http';
import {map, tap ,catchError} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgxSpinnerService } from "ngx-spinner";
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {
isAdmin:boolean=false;
  BASE_USER_GROUP_URL="http://192.168.1.200:84/api/"
  constructor(private http: HttpClient,private cookieService: CookieService) { }

  public getUserGroups(user: string){

    var url=this.BASE_USER_GROUP_URL+"usergroups/"
    return this.http.get(url+user) .pipe(
         map((resp:Response) => {
           //console.log('response', resp);
           //localStorage.setItem("usergroups",JSON.stringify(resp));
            return resp;
         })
    );



  }

 getUserAppsGroups(email){
    var url=this.BASE_USER_GROUP_URL+"usergroups/"+email;
      return this.http.get(url);

  }

 getAllGroupsWithAllMembers(){
  var url=this.BASE_USER_GROUP_URL+"groups";
      return this.http.get(url);
 }
 addUserGroup(name,data){
 var url=this.BASE_USER_GROUP_URL+"groups"
 return this.http.post(url,{group_name:name,ass_emps:data})
 }

 deleteGroup(name:string){
 let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
 var url=this.BASE_USER_GROUP_URL+"groups";
 return this.http.request('delete',url,{body:{group_name:name}, headers:headers})
 }

 getGroupWithMembers(name){
 var url=this.BASE_USER_GROUP_URL+"groups/"+name;
 return this.http.get(url)
 }

addToGroup(group_name,users){
 var url=this.BASE_USER_GROUP_URL+"groups/"+group_name
 return this.http.put(url,{ass_emps:users})
}
removeFromGroup(group_name,users){
    let headers: HttpHeaders = new HttpHeaders();
            headers = headers.append('Accept', 'application/json');
    var url=this.BASE_USER_GROUP_URL+"groups/"+group_name
     return this.http.request("delete",url,{body:{ass_emps:users}, headers:headers})
}
}
