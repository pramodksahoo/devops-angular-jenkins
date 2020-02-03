import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUserData;
  ConfigAppsData;
  constructor() { }
  setUserData(data){
    this.currentUserData=data;
    console.log(this.currentUserData);
  }
  getUserData(){
    return this.currentUserData;
  }

  setConfigAppsData(data){
    this.ConfigAppsData=data;
    console.log(this.ConfigAppsData);
  }
  getConfigAppsData(){
    return this.ConfigAppsData;
  }


}
