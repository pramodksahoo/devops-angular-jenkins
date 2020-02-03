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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

aaaa:any;
products:any;
  constructor(private productService:ProductService,private spinner:NgxSpinnerService,private snackbar:MatSnackBar) { }

  ngOnInit() {
  this.getProducts()
  }

getProducts(){
this.spinner.show()
    this.productService.getAllProducts().subscribe((res:any)=>{
    this.products=res
    //console.log("product res",res)
    this.spinner.hide()
    return res
    })

}

}
