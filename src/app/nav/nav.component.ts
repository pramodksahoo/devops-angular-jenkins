import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user_data;
  logged_in;
  constructor(private route: ActivatedRoute, private router: Router,private auth: AuthService) { }

  ngOnInit() {
  this.logged_in=this.auth.isAuthenticated()
  if(this.logged_in){
  this.user_data=JSON.parse(localStorage.getItem("userdata"));
  }

  }
  logout(){
  var sessionid=localStorage.getItem('sessionid');
  this.auth.logout(sessionid)
  //console.log("logged out");
  this.router.navigate(["/login"]);

}

}
