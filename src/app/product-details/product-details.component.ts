import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';
import {ConfigsService} from '../configs.service';
import {AuthService} from '../auth.service';
import { UserGroupService } from '../user-group.service';
import { ProductService } from '../product.service';
import { NgxSpinnerService } from "ngx-spinner";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

product_details=
{
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
      "profile_picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
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
      "product_picture":"https://ss7.vzw.com/is/image/VerizonWireless/iPhoneX-Svr?$device-lg$",
    };

    aaaa;
    groups_with_members;
  constructor(private route: ActivatedRoute,private productService:ProductService,
  private spinner:NgxSpinnerService,private snackbar:MatSnackBar,
  private userGroupService:UserGroupService,
  private auth:AuthService) { }
  ngOnInit() {

  this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.aaaa = params.product_id;
        console.log(this.aaaa); // popular
        this.productService.getAproduct(this.aaaa).subscribe((res:any)=>{
        this.product_details=res
        console.log("product details",this.product_details)
        let all_user_groups_with_members=new Array()
        let g=res.groups
        for(let e of g){
        this.userGroupService.getGroupWithMembers(e).subscribe((res1:any)=>{
        console.log("this users group coleagues res1",res1)
        let usersarray=res1.ass_emps
            this.auth.getGroupUserData(usersarray).subscribe((res2:any)=>{
            console.log("this users group coleagues res2",res2)
            all_user_groups_with_members.push({"group_name":e,"ass_emps":res2})
            })

        })
        }
        this.groups_with_members=all_user_groups_with_members
        console.log("sadsdf",this.groups_with_members)

        })
      });



  }


}
