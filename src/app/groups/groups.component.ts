import { Component, OnInit } from '@angular/core';
import {ConfigsService} from '../configs.service';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserGroupService } from '../user-group.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Add New Group</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
       <div class="from-group">
                                <label for="new-group-name">Group Name</label>
                                 <input name="newGroupName" class="checkbox ml-2" #newGroupName type="text" (keyup)="newGroupNameFun(newGroupName.value)" ngModel  required>
                              </div>
      <p><button class="btn btn-lg btn-outline-primary" (click)="open()">Add Members</button></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class AddGroupModel {
newGroupName;
  constructor(private modalService: NgbModal,
   public activeModal: NgbActiveModal,
   private spinner: NgxSpinnerService,
   private snackbar:MatSnackBar) {}

  open() {

    this.modalService.open(AddGroupMemberModal, {
      size: 'lg'
    });
  }
  newGroupNameFun(name){
  this.newGroupName=name;
  console.log("newGroupName",this.newGroupName);
  localStorage.setItem("newGroupName",this.newGroupName);
  }
}



@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <button *ngIf="!dorpdownClosed"  id="hide-dropdown" class="brn btn-primary form-control" onclick="$('#myDropdown').toggle('show');">Done</button>
      <div id="myDropdown" class="dropdown-content">
          <input class="form-control" type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
          <a *ngFor="let user of allusers" >
          <input class="checkbox" (click)="onSelectedEmployee(user)" type="checkbox"  name="agreement">
          <img style="border:1px solid gray;border-radius: 50%;" src="{{user.profile_picture}}" height="30px" width="30px"> {{user.first_name}} {{user.last_name}}</a>
      </div>
      <div id="added-employees">
           <a *ngFor="let user of selectedEmployee" >
          <input class="checkbox" (click)="onSelectedEmployee(user)" type="checkbox"  name="agreement">
          <img style="border:1px solid gray;border-radius: 50%;" src="{{user.profile_picture}}" height="30px" width="30px"> {{user.first_name}} {{user.last_name}}</a>

      </div>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      <button class="btn btn-danger" (click)="addGroupWithUsers()">Create and Add</button>
    </div>
  `,
  styleUrls: ['./groups.component.css']
})
export class AddGroupMemberModal {
allusers;
dropdownOpen:boolean=true;
dorpdownClosed:boolean=false;
selectedEmployee=Array();

  constructor(public activeModal: NgbActiveModal,private auth: AuthService,private userGroupService:UserGroupService) {
  this.getAllUsers();
  }

  getAllUsers(){
    this.auth.getAllUsers().subscribe(data=>{
        this.allusers=data;
        console.log("add member allusers",this.allusers)
    });
}
toggleDropdown(){
this.dropdownOpen=! this.dropdownOpen;
this.dorpdownClosed=!this.dorpdownClosed;
}

onSelectedEmployee(user){
this.selectedEmployee.push(user);
//console.log(user)
}

addGroupWithUsers(){
let groupname=localStorage.getItem("newGroupName");
let users=Array();
for(let emp of this.selectedEmployee){
users.push(emp.email);
}
var aaa={group_name:groupname,ass_emps:users}
console.log("json group data",aaa)
this.userGroupService.addUserGroup(groupname,users).subscribe(res=>console.log("group added",groupname))
}

}


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups=[
    {
      "group_name":"ghfgj",
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
    },
    {
      "group_name":"fgjhfgj",
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
    },
    {
      "group_name":"wwrchgdfjhfk",
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
    },
    {
      "group_name":"fgjfghjkgjh",
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
    }
  ];

selected_group_name;
selected_group_index;
selected_group;
groupFromServer;
mygroups;
groups_with_user_data;

newGroupMembers;
allusers;
  constructor(private modalService: NgbModal,private configs: ConfigsService,
  private route: ActivatedRoute,
  private router: Router, private auth: AuthService,
  private userGroupService:UserGroupService,
  private snackbar:MatSnackBar,
  private spinner: NgxSpinnerService) {

   }

  ngOnInit() {


  this.userGroupService.getAllGroupsWithAllMembers() .subscribe(
       res => {
           this.groupFromServer = res;
           //console.log("all groups with members",this.groupFromServer);
           var arr=Array();
           for(let group of this.groupFromServer){
               var data={group_name:group.group_name,number_of_members:group.ass_emps.length}
               arr.push(data);
           }
           this.mygroups=arr;
           //console.log("mygroup data",this.mygroups)
            this.groups=this.getMembersDataOfGroup();
            //this.isAdmin=this.user_groups.includes("admin")
            this.selected_group_index=0;


       }
   );

    this.getAllUsers();

    if(this.selected_group_index==null){
      this.selected_group_name=this.groups[0].group_name;
    }
    this.selected_group=this.groups[this.selected_group_index];
     this.onSelectedGroup(this.selected_group_name);
  }

  onSelectedGroup(name){
    this.selected_group_name=name;
    this.selected_group_index = this.groups.findIndex(function(item, i){
      return item.group_name === name;
    });
    this.selected_group=this.groups[this.selected_group_index];
  }

  getMembersDataOfGroup(){
      //console.log("group from server",this.groupFromServer);
      var arr=Array();
      for(let g of this.groupFromServer){
      var list=g.ass_emps
        this.auth.getGroupUserData(list).subscribe(
            res => {
            //console.log("group members user data",res);

            Object.values(res).forEach((aaa:any,index)=>{
            this.userGroupService.getUserAppsGroups(aaa.email).subscribe((numofg:any)=>res[index]["groups_count"]=numofg.data.length);
            });
            arr.push({"group_name":g.group_name,"members":res})
            });
       }
       //console.log("arr",arr)
  return arr;
}

onSelectedMember(data){

}

addNewGroup(){
    this.router.navigate(['add_group']);
}

getAllUsers(){
    this.auth.getAllUsers().subscribe(data=>{
        this.allusers=data;
        //console.log(this.allusers)
    });
}



openAddGroupModal() {
    this.modalService.open(AddGroupModel);
  }
deleteGroup(){
    this.spinner.show();
    //console.log("selected_group",this.selected_group_name)
    this.userGroupService.deleteGroup(this.selected_group_name).subscribe(res=>{
    this.spinner.hide();
    this.snackbar.open("Group deleted.", "ok", {
      duration: 2000,
    });
    });
}


}

