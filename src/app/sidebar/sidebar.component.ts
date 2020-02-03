import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserGroupService } from '../user-group.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user_data;
  user_type;
  isAdmin:boolean=false;
  sidebarOpened:boolean=true;
  constructor(private route: ActivatedRoute, private router: Router,private userGroupService:UserGroupService) { }

  ngOnInit() {

     this.user_data=JSON.parse(localStorage.getItem("userdata"));
//     if(this.user_data.user_group==="admin"){
//       this.user_type=true;
//     }
//     this.isAdmin=this.userGroupService.isAdmin;

this.checkAdmin();
  }
logout(){
  console.log("logged out");
  this.router.navigate(["/login"]);

}

checkAdmin(){
    let groups;
    this.userGroupService.getUserAppsGroups(this.user_data.email).subscribe((res:any)=>{
    groups=res;
    //console.log(res)
    if(res.data.indexOf('admin')>-1){

    this.isAdmin=true;
    //console.log("this.isAdmin",this.isAdmin)
    }
    });
    return groups;
}
sidebarOn(){
this.sidebarOpened=!this.sidebarOpened
}
}
