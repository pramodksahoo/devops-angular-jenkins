import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Title }     from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService,private route: ActivatedRoute,
   private router: Router, private auth: AuthService,
   private spinner: NgxSpinnerService,private titleService: Title,
   private snackbar:MatSnackBar) { }

  ngOnInit() {


//console.log("is authenticated",this.auth.isAuthenticated())
    if(this.auth.isAuthenticated()){

    this.router.navigate(['home']);
    }

  }
  login(data){
  //console.log("logging in");
   this.spinner.show();

  //console.log(data);
  this.auth.user_login(data.email,data.password).subscribe((res)=>{

    this.data.setUserData(res);
    this.spinner.hide();
    var response=JSON.parse(JSON.stringify(res.body));
    //console.log("res status",response)
    if(response.status===200){
    this.router.navigate(['home']);
    }
    else if(response.status===401){
        this.snackbar.open("You Entered Wrong Password.", "ok", {
      duration: 2000,
    });
    }
    else if(response.status===404){
        this.snackbar.open("No Such User.", "ok", {
      duration: 2000,
    });
    }
//   }
//   ,
//   (error) => {
//    this.spinner.hide();
//     if(error.status===401){
//         this.snackbar.open("You Entered Wrong Password.", "ok", {
//       duration: 2000,
//     });
//     }
//     if(error.status===404){
//         this.snackbar.open("No Such User.", "ok", {
//       duration: 2000,
//     });
//     }
//      console.log("http error",error.error);

     });
  //console.log(data);



  }
}
