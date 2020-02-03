import { Component, OnInit } from '@angular/core';
import {ConfigsService} from '../configs.service';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserGroupService } from '../user-group.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
allusers;
dropdownOpen:boolean=true;
dropdownClosed:boolean=false;
selectedEmployee=Array();
newGroupName;
  constructor(private auth: AuthService,private userGroupService:UserGroupService) {
  }

  ngOnInit() {
  this.getAllUsers();
  }




getAllUsers(){
    this.auth.getAllUsers().subscribe((res:any)=>{
        this.allusers=res.data;
        console.log("add member allusers",this.allusers)
    });
}
toggleDropdown(){
    this.dropdownOpen=! this.dropdownOpen;
    this.dropdownClosed=!this.dropdownClosed;
}

onSelectedEmployee(user){
    this.selectedEmployee.push(user);
//console.log(user)
}

addGroupWithUsers(){

    if(this.newGroupName){
        let users=Array();
        for(let emp of this.selectedEmployee){
            users.push(emp.email);
        }

        var aaa={group_name:localStorage.getItem("newGroupName"),ass_emps:users}
        //console.log("json group data",aaa)
        this.userGroupService.addUserGroup(this.newGroupName,users).subscribe(res=>console.log("group added",this.newGroupName))

    }
    else{
        alert("Provide group name")
    }
}
newGroupNameFun(name){
      this.newGroupName=name;
      //console.log("newGroupName",name);
      localStorage.setItem("newGroupName",this.newGroupName);
  }


}
