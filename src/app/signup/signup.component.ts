import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
agree:boolean;
  constructor(private data: DataService, private auth: AuthService,private route: ActivatedRoute,
   private router: Router,private spinner: NgxSpinnerService,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }
  signup(data){
  if(this.agree){
    //console.log("signing up");
  this.spinner.show();
  //console.log(data);
  this.auth.create_account(data.first_name,data.last_name,data.email).subscribe(res=>{
    //console.log("server response",res);
    localStorage.setItem("userdata",JSON.stringify(res));

    this.data.setUserData(res);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    this.router.navigate(["/dashboard"]);
  });
  //console.log(data);
  }else{
    this.snackbar.open("You don't agree to our terms.", "ok", {duration: 3000,});
  }

  }
  onchangeAgreement(val){
  this.agree=val
  //console.log("this.agree",this.agree)
  }
}
