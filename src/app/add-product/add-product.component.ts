import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ConfigsService} from '../configs.service';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserGroupService } from '../user-group.service';
import { ProductService } from '../product.service';
import { NgxSpinnerService } from "ngx-spinner";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
image:File;
product_details=    {
        "branch_category": "",
        "groups": [],
        "product_type": "",
        "product_name": "",
        "description": "",
        "image": this.image,
        "owner": "",
        "ap_path": "",
        "cp_path": ""
    }

aaaa:any;
products:any;
allusers;
groups_with_user_data;
groupFromServer;
mygroups;
addedGroupToProduct;
selectedGroupsToAdd=Array();
newProduct={};
user;
imageFile:File;
  constructor(private productService:ProductService,private router: Router,private route: ActivatedRoute,
  private auth: AuthService,private userGroupService:UserGroupService,
  private spinner:NgxSpinnerService,private snackbar:MatSnackBar) { }

  ngOnInit() {
   this.user=JSON.parse(localStorage.getItem("userdata")).email
   console.log(this.user)
  this.userGroupService.getAllGroupsWithAllMembers() .subscribe(
       res => {
           this.groupFromServer = res;
           //console.log("all groups with members",this.groupFromServer);
//            var arr=Array();
//            for(let group of this.groupFromServer){
//                var data={group_name:group.group_name,number_of_members:group.ass_emps.length}
//                arr.push(data);
//            }
//            this.mygroups=arr;
//            console.log("mygroup data",this.mygroups)
//             this.groups=this.getMembersDataOfGroup();
//             //this.isAdmin=this.user_groups.includes("admin")
//             this.selected_group_index=0;


       }
   );


  }

   addProduct(){
   this.user=JSON.parse(localStorage.getItem("userdata")).email
   let groups__=Array();
   for(let a of this.selectedGroupsToAdd){
    groups__.push(a.group_name)
   }
    this.product_details.groups=groups__
    this.product_details.owner=this.user
    //console.log("group data",selectedGroupsToAdd)
    if(this.product_details.branch_category===""){
        alert("Please provide Branch.")
    }
    else if(this.product_details.product_type===""){
    alert("Please provide Product Type.")
    }
    else if(this.product_details.product_name===""){
    alert("Please provide Product Name.")
    }
    else if(this.product_details.ap_path===""){
    alert("Please provide Product AP path.")
    }
    else if(this.product_details.cp_path===""){
    alert("Please provide Product CP path.")
    }
    if(this.product_details.groups.length==0){
    alert("Please add atleast one group.")
    }


    console.log("form data",this.product_details)
    this.productService.addProduct(this.product_details).subscribe((res:any)=>{
    //console.log("form data",this.product_details)
        //console.log("add product res",res)
        return res
        })


}


   addNewProduct(data){
    this.spinner.show()
   let groups__=Array();
   for(let a of this.selectedGroupsToAdd){
    groups__.push(a.group_name)
   }
    this.product_details.groups=groups__


    data["groups"]=groups__
    data["image"]=this.imageFile
    //console.log("form data",JSON.stringify(data))
    this.productService.addProduct(data).subscribe((res:any)=>{
    //console.log("form data",this.product_details)
        //console.log("add product res",res)
        this.spinner.hide()
        this.snackbar.open("New Product Added.", "ok", {duration: 3000,});
        this.router.navigate(['/product'])
        })


}

onChaneInputData(inputdata){

}


getAllUsers(){
    this.auth.getAllUsers().subscribe(data=>{
        this.allusers=data;
        console.log(this.allusers)
    });
}
onSelectedGroup(group){
    this.selectedGroupsToAdd.push(group);
//console.log(user)
}

branchTypeChange(option){
this.product_details.branch_category=option
}
onchangeImage(event: any){
this.imageFile= event.target.image;
}

}
