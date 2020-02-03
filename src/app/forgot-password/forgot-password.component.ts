import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private auth: AuthService,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

resetPasswordRequest(data){
this.auth.verification_mail(data.email);
this.snackbar.open("Password change link has been sent to "+data.email, "ok", {
      duration: 2000,
    });
}

}
