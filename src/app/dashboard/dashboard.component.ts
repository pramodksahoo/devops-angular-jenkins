import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {AuthService} from '../auth.service';
import {Title} from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";
import {DataService} from '../data.service';
import {ConfigsService} from '../configs.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appsConfigData;
  user_data;
  user_type;
  constructor(private data: DataService,private route: ActivatedRoute, private router: Router,private auth: AuthService,private appsconfig: ConfigsService,private spinner: NgxSpinnerService,private titleService: Title) { }

  ngOnInit() {

    this.user_data=JSON.parse(localStorage.getItem("userdata"));
    if(this.user_data.user_group==="admin"){
      this.user_type=true;
    }



this.getConfs();
  }


  getConfs(){
    this.appsconfig.getAppsConfig().subscribe(data=>this.appsConfigData=data);
    //console.log("apps config",this.appsConfigData);
  }


resend_verification(){

 this.auth.verification_mail(this.user_data.email).subscribe(res=>{
    //console.log("server response",res);
    this.data.setUserData(res);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    localStorage.setItem("userdata",JSON.stringify(res));
    this.router.navigate(["/home"]);
  });
}
  }
