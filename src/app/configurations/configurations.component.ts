import { Component, OnInit } from '@angular/core';
import { ConfigsService } from '../configs.service';
import {DataService} from '../data.service';
import {MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {
confs_data;
selected_conf_data;
selected_conf_index;
selected_conf_name;
isShow = false;
  constructor(private configs:ConfigsService,private data: DataService,private snackbar: MatSnackBar) {

this.getConfs();

  }

  ngOnInit() {

    //console.log("conf data",this.confs_data);
    //console.log("confs data",this.confs_data);

        // this.selected_conf_index=0;
        // this.selected_conf_data=this.confs_data[this.selected_conf_index];
        // this.selected_conf_name=this.selected_conf_data.name;
        // this.selected_conf(this.selected_conf_name);

  }

  getConfs(){
    this.configs.getAppsConfig().subscribe(data=>{
      this.confs_data=data;

    }).add(
      aaa=>{
        //console.log("add data",this.confs_data);
        this.selected_conf_index=0;
        this.selected_conf_data=this.confs_data[this.selected_conf_index];
        this.selected_conf_name=this.selected_conf_data.name;
        this.selected_conf(this.selected_conf_name);

      }
    );
  }
  selected_conf(name){
    this.selected_conf_index = this.confs_data.findIndex(function(item, i){
      return item.name === name;
    });
    this.selected_conf_data=this.confs_data[this.selected_conf_index];
    this.selected_conf_name=this.selected_conf_data.name;


  }
  saveConfig(data){
    console.log(data);
    this.configs.saveAppsConfig(this.selected_conf_data.name,data.confUrl).subscribe(
      (data:any)=>{
        //console.log(data);
        this.selected_conf_data.url=data.url;
        this.openSnackBar("Saved Successfully.",null);
      }
      );
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, "Ok", {
      duration: 2000,
    });
    //window.location.reload();
  }
toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
