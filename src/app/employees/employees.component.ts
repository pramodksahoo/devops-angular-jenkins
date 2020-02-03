import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ConfigsService} from '../configs.service';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserGroupService } from '../user-group.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
//   users = [
//
//     {
//       "first_name":"drgteryt",
//       "last_name":"eryeryery",
//       "email":"dfhdhdfh@gdhd.com",
//       "emp_id":46456,
//       "phone":436457,
//       "groups_count":2,
//       "profile_picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
//     }
//     ,
//     {
//       "first_name":"fgrdt",
//       "last_name":"vrtgertvv",
//       "email":"ertertert@gdhd.com",
//       "emp_id":345345,
//       "phone":749345346,
//       "groups_count":3,
//       "profile_picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
//     },
//     {
//       "first_name":"drgteryt",
//       "last_name":"eryeryery",
//       "email":"dfhdhdfh@gdhd.com",
//       "emp_id":46456,
//       "phone":436457,
//       "groups_count":2,
//       "profile_picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
//     }
//   ]

users:any;
  constructor(private data: DataService,private configs: ConfigsService,
  private route: ActivatedRoute,
  private router: Router, private auth: AuthService,private userGroupService:UserGroupService) { }

  ngOnInit() {
  this.users=this.getEmployees()
  //console.log(this.users)
  }

  getEmployees(){
  var arr:any;
  this.auth.getAllUsers().subscribe(
    (res:any)=>{
        //console.log(res)
        Object.values(res.data).forEach((aaa:any,index)=>{
            this.userGroupService.getUserAppsGroups(aaa.email).subscribe((numofg:any)=>{
            //console.log(numofg.data.length)
            res.data[index]["groups_count"]=numofg.data.length
            });

         });
         arr=res.data
         this.users=res.data
         //console.log("user with group count",arr)
    })
    return arr;
  }

}
