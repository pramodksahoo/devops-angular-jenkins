import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import { UserGroupService } from '../user-group.service';
import {ConfigsService} from '../configs.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Title }     from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
aaaa;
employee:any;
credentials;
user_groups;
user_groups_data;
setAdmin:boolean;
configurations;
isAdmin:boolean;
associated_projects;
  constructor(private data: DataService,private productService:ProductService,private route: ActivatedRoute,private auth: AuthService,
   private spinner: NgxSpinnerService,private titleService: Title,
   private snackbar:MatSnackBar,private userGroupService:UserGroupService,private configs: ConfigsService) {

   this.route.queryParams
      .subscribe(params => {
        //console.log(params); // {order: "popular"}

        this.aaaa = params.employee_id;
        //console.log("param emp id",this.aaaa); // popular

      });
   }

  ngOnInit() {

    this.auth.getGroupUserData(new Array(this.aaaa)).subscribe(data=>{
    this.employee=data[0]
    //console.log("this.employee",this.employee)
    this.configs.getUserAppsConfigs(this.employee.email).subscribe(data=>this.configurations=data);
    this.userGroupService.getUserAppsGroups(this.employee.email) .subscribe(
       (res:any) => {
           this.user_groups = res.data;
           //console.log("user groups",this.user_groups);
           if(this.user_groups.indexOf('admin')>-1){
                this.isAdmin=true;
                //console.log("this.isAdmin",this.isAdmin)
                }

            //this.isAdmin=this.user_groups.includes("admin")
           var arr=Array();
           var arr2=Array();
           for(let group of this.user_groups){

           this.userGroupService.getGroupWithMembers(group).subscribe((gdata:any)=>{
           var data={group_name:group,ass_emps:gdata.ass_emps.length}
               arr.push(data);
               this.productService.getProductByGroup(group).subscribe((res:any)=>{
               for(let pp of res){
                pp["emp_length"]=gdata.ass_emps.length
                arr2.push(pp)
               }


                })


           })

           }
            this.associated_projects=arr2
            //console.log("arr2",this.associated_projects)
           this.user_groups_data=arr
           //console.log("arr",arr)

       }
   );
    });


  }


getData(){





  }

 setAsAuperadmin(event){
     this.setAdmin=event
     let arr=new Array(this.employee.email)
     if(this.setAdmin){
        this.userGroupService.addToGroup("admin",arr).subscribe(data=>{
        //console.log("add admin",data)
        this.snackbar.open("You made this user Super Admin.", "ok", {duration: 2000,});
        });

     }
     else{
        this.userGroupService.removeFromGroup("admin",arr).subscribe(data=>{
        //console.log("add admin",data)
        this.snackbar.open("You removed this user from Super Admin.", "ok", {duration: 2000,});
        });

     }

 }

getUserProjects(group_name,members){
this.productService.getProductByGroup(group_name).subscribe((res:any)=>{
this.associated_projects=res
//console.log("projects",res)
})
}

}
