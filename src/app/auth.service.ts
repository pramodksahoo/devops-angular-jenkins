import { Injectable } from '@angular/core';
import { User } from './models/user';
import {BehaviorSubject, observable, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse, HttpHandler, HttpInterceptor,HttpRequest,HttpErrorResponse,HttpParams} from '@angular/common/http';
import {map, tap ,catchError} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgxSpinnerService } from "ngx-spinner";
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  sessionId : any;
//   BASE_USER_URL="http://127.0.0.1:8000/users/"
  BASE_USER_URL="http://192.168.1.200:81/users/"

  constructor(private http: HttpClient,private cookieService: CookieService,private snackbar:MatSnackBar,private spinner: NgxSpinnerService) { }
//   public get currentUserValue(): User {
//         return this.currentUserSubject.value;
//     }

jwtHelper = new JwtHelperService();
  public isAuthenticated(): boolean {
    const sessionid = localStorage.getItem('sessionid');
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');
    // Check whether the token is expired and return
    // true or false
    //console.log("jwt helper access_token",access_token)
    //console.log("jwt helper refresh_token",refresh_token)
//     if(sessionid!=null){
//     return true;
//     }
//     else{
//     return false;
//     }

    if(!this.jwtHelper.isTokenExpired(refresh_token) && this.jwtHelper.isTokenExpired(access_token)){
        this.getNewToken(refresh_token).subscribe((res:any)=>{
        const access_token = localStorage.setItem('access_token',res.access_token);
        return !this.jwtHelper.isTokenExpired(localStorage.getItem('access_token'));
    })
    }
    else{
        return !this.jwtHelper.isTokenExpired(refresh_token);
    }

  }
    public user_login (email: string, password: string) :Observable<HttpResponse<Object>>{
      var login_url = this.BASE_USER_URL+'login/';


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

      return this.http.post(login_url, { email:email, password:password },{observe:'response'}) .pipe(
         tap(resp => {
           //console.log('response', resp);
           var response=JSON.parse(JSON.stringify(resp.body));
           console.log("response",response);
           localStorage.setItem('userdata', JSON.stringify(response.data));
           localStorage.setItem('access_token', JSON.stringify(response.access));
           localStorage.setItem('refresh_token', JSON.stringify(response.refresh));
           localStorage.setItem('sessionid',response.sessionid);
           this.cookieService.set('sessionid',response.sessionid);
           //this.cookieService.set('csrftoken',response.csrftoken);
           return resp;
         })
    );
    }
    private catchError(error: any): Promise<any> {


     return Promise.reject(error.message || 'Server error: ' + error);
  }

//     logout() {
//         //remove user from local storage to log user out
//
//         this.currentUserSubject.next(null);
//     }

    public create_account(first_name: string,last_name: string,email: string):Observable<HttpResponse<Object>> {
      var add_user_url = this.BASE_USER_URL+'add/';
      return this.http.post(add_user_url, { first_name:first_name, last_name:last_name,email:email },{observe:'response'}) .pipe(
         tap(resp => {
           //console.log('response', resp);
           return resp
         })
    );
    }

    public update_account_details(data):Observable<HttpResponse<Object>> {
    let sessionid=localStorage.getItem('sessionid');
     let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization', 'sessionid ' + sessionid);
        headers = headers.append("Access-Control-Allow-Origin", "*");
        headers = headers.append('HTTP-Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        console.log(headers)
      var add_user_url = this.BASE_USER_URL+'manages/';
      return this.http.put(add_user_url, {data},{observe:'response',headers:headers}) .pipe(
         tap(resp => {
           console.log('response', resp);
           return resp
         })
    );
    }

    public changePassword(data){
    var url=this.BASE_USER_URL+'setpassword/?email='+data.email;

    }

    public setUserPassword(email,pass1,pass2){
    var url=this.BASE_USER_URL+'set_password/?email='+email;
    return this.http.post(url, {password1:pass1,password2:pass2 },{observe:'response'}) .pipe(
         tap(resp => {
           //console.log('response', resp);
           return resp
         })
    );
    }

     public verification_mail(email: string) {
      var verification_mail_url = this.BASE_USER_URL+'reset_password/?email='+email;
      return this.http.get(verification_mail_url);
    }

    public logout(sessionid){
       var logout_url=this.BASE_USER_URL;
       localStorage.removeItem('userdata');
       localStorage.removeItem('sessionid');
       localStorage.removeItem('access_token');
       localStorage.removeItem('refresh_token');
       this.cookieService.delete('sessionid');
       return this.http.get(logout_url);
    }

    public getGroupUserData(list){
        var url=this.BASE_USER_URL+'get_group_users';
        this.sessionId = localStorage.getItem('sessionid');
        let access_token=localStorage.getItem('access_token');
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('HTTP-AUTHORIZATION', 'Bearer ' + access_token);
//         console.log('headersheaders', headers);
        let params=new HttpParams().set("requestData",JSON.stringify({ users:list }));
        //console.log("session from get user",localStorage.getItem('sessionid'))
//         console.log('this.sessionId', this.sessionId);

        return this.http.post(url,{users:list},{headers:headers});

}

getAllUsers(){
var url=this.BASE_USER_URL+'get_all_user';
let access_token=localStorage.getItem('access_token');
 let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        //headers = headers.append('WWW-Authenticate', 'sessionid ' + sessionid);
        headers = headers.append('HTTP-AUTHORIZATION', 'Bearer ' + access_token);
return this.http.get(url,{headers:headers});
}

getNewToken(refresh_token){
let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
    var url=this.BASE_USER_URL+'token/refresh/';
    return this.http.post(url,{refresh:refresh_token},{headers:headers});
}
}


