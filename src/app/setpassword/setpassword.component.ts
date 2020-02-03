import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {
user_email;
  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        //console.log(params); // {order: "popular"}

        this.user_email = params.email;
        //console.log(this.user_email); // popular
      });
  }

setPassword(data){
    if(data.password1===data.password2){
        this.auth.setUserPassword(this.user_email,data.password1,data.password2).subscribe(res=>{
            //console.log("server response",res);
            setTimeout(() => {
              /** spinner ends after 5 seconds */
              //this.spinner.hide();
            }, 10000);
            //localStorage.setItem("userdata",JSON.stringify(res));
            this.router.navigate(["/login"]);
          });
    }
    else{
            alert("password does not match");
            }

}


 }


