import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ConfigsService} from '../configs.service';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserGroupService } from '../user-group.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
product_details={
      "product_id":"gsdjghsdjf",
      "product_type":"phone",
      "product_name":"abc",
      "description":"abc@gdhd.com",
      "associated_groups":[
        {
          "group_name":"aaa",
          "members":[
            {
      "first_name":"abc",
      "last_name":"vvv",
      "email":"abc@gdhd.com",
      "emp_id":3684694,
      "phone":7493684694,
      "groups_count":6,
      "profile_picture":"https://bestindiandeals.net/wp-content/uploads/2018/06/cool-profile-picture-300x219.jpg",
    },
    {
      "first_name":"fgrdt",
      "last_name":"vrtgertvv",
      "email":"ertertert@gdhd.com",
      "emp_id":345345,
      "phone":749345346,
      "groups_count":3,
      "profile_picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
    },
    {
      "first_name":"drgteryt",
      "last_name":"eryeryery",
      "email":"dfhdhdfh@gdhd.com",
      "emp_id":46456,
      "phone":436457,
      "groups_count":2,
      "profile_picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
    }
          ]
        },{
          "group_name":"sssshjd",
          "members":[

          ]
        },{
          "group_name":"ghjsdg",
          "members":[

          ]
        }],
      "groups_count":6,
      "branch_config":{
        "application_path":"http://www.application.com",
        "communication_path":"http://www.communication.com"
      },
      "product_picture":"https://bestindiandeals.net/wp-content/uploads/2018/06/cool-profile-picture-300x219.jpg",
    };

employee;

// credentials=[
//   {
//     "devops_name":"bugzilla",
//     "username":"sjfhf",
//     "password":"shkhkfh",
//     "icon":"https://www.bugzilla.org/img/buggie.png"
//   },
//   {
//     "devops_name":"Gerrit",
//     "username":"fghdfghdfhg",
//     "password":"dfhgfgh",
//     "icon":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gerrit_icon.svg/78px-Gerrit_icon.svg.png"
//   }
// ];

new;
credentials;
isEditProfileDetails = false;
isEditCred = false;
user_groups;
isAdmin:boolean;
  constructor(private data: DataService,private configs: ConfigsService,
  private route: ActivatedRoute,
  private router: Router, private auth: AuthService,private userGroupService:UserGroupService) {
 this.getData();
  }

  ngOnInit() {
//console.log("is authenticated",this.auth.isAuthenticated())
    if(!this.auth.isAuthenticated()){

    this.router.navigate(['login']);
    }



  }

  getData(){
    var res=localStorage.getItem("userdata");
    //console.log(res);
    this.employee=JSON.parse(res);
    //console.log(this.employee);
 this.userGroupService.getUserAppsGroups(this.employee.email) .subscribe(
       (res:any) => {
           this.user_groups = res.data;
           this.userGroupService.isAdmin=this.isAdmin;
           //console.log("user groups",this.user_groups);
            //this.isAdmin=this.user_groups.includes("admin")
       }
   );
//  .subscribe(data=>{
//  this.user_groups=data;
//  });
    //localStorage.setItem("usergroups",this.user_groups);

    this.configs.getUserAppsConfigs(this.employee.email).subscribe(
    data=>{
    this.credentials=data;
    //console.log("user credentials",this.credentials);
    }
    );



  }

  toggleEditProfile() {
    this.isEditProfileDetails = !this.isEditProfileDetails;
  }

  toggleEditCred(){
    this.isEditCred=!this.isEditCred;
  }

  editProfileSubmit(formdata){
  let data=formdata;
  data["email"]=this.employee.email;
    //console.log(formdata);
    this.auth.update_account_details(formdata).subscribe(res=>{
    if(res.status==200){
    this.employee=res
    }
    });

  }
  credSubmit(formdata){
    //console.log(formdata);
    var data;
    this.configs.saveUserCredentials(formdata.app_name,formdata.user,formdata.username,formdata.password).subscribe(
      data=>this.data=data
    );
//console.log("saved cred",data);
  }
}
