(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-group/add-group.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-group/add-group.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n <app-sidebar></app-sidebar>\n    <div id=\"contents\" class=\"col justify-content-center\" style=\"display: table-cell;vertical-align: middle;height:90vh;\" valign=\"middle\">\n\n      <div class=\"row d-flex  align-content-center flex-wrap\">\n        <div class=\"col\" style=\"height:90vh;\">\n          <div class=\"d-flex justify-content-between ml-5 mt-1\">\n\n\n            <div>\n              <h5><a class=\"pr-4\" [routerLink]=\"['/groups']\" style=\"right\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>New Group</h5>\n              <p class=\"ml-3 pl-4\">Groups / <a style=\"color:blue;\">New Group</a></p>\n            </div>\n            <div>\n              <button class=\"btn btn-primary\" [routerLink]=\"['/groups']\">Cancel</button>\n              <button class=\"btn btn-danger ml-2 mr-2\" (click)=\"addGroupWithUsers()\">Save</button>\n            </div>\n\n\n          </div>\n\n         <div class=\"align-self-center ml-4 m-1 mt-0 mr-4\" style=\"height:70vh;\">\n           <div class=\"row\"style=\"height:70vh;box-shadow: 2px 2px 10px 1px #e2e2e2;overflow-y:scroll;\">\n\n\n             <div class=\"col-md-12 col-lg-9 col-sm-12 border-left\" style=\"border-left:1px solid #8080803b;height:70vh;\">\n              <div class=\"pl-4 pt-4\" >\n                <label class=\"label\" style=\"color: #d50000;\">Group Information</label>\n                <div class=\" ml-4 mr-2 mt-2 mb-2\" style=\"display:block!important;\" >\n                  <label for=\"groupname\" class=\"mr-4\">Group Name</label>\n                  <input ngModel class=\"form-control\" (keyup)=\"newGroupNameFun($event.target.value)\" type=\"text\" name=\"groupname\" id=\"groupname\" required>\n\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"pt-2\">\n                <label class=\"label\" style=\"color: #d50000;\">Associated Employee List</label>\n                </div>\n                <div class=\"\">\n                  <div  class=\"d-flex justify-content-center \">\n                    <div *ngIf=\"selectedEmployee?.length < 1\" class=\"align-self-center\">\n                       <img src=\"../assets/Bitbucket.png\" height=\"200px\" width=\"200px\">\n                    <p class=\"\">No Employees Added to the Group</p>\n                    <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#innermodel\">Add Employees</button>\n                    </div>\n\n\n                  </div>\n                  <div>\n                    <div id=\"added-employees\" class=\"dropdown-content\" *ngIf=\"selectedEmployee?.length > 0\">\n                      <input class=\"form-control\" type=\"text\" placeholder=\"Search..\" id=\"searchEmplpoyeeInput\" onkeyup=\"filterFunctionGroupEmployee()\">\n\n                                   <a *ngFor=\"let user of selectedEmployee\" >\n                                  <input class=\"checkbox\" (click)=\"onSelectedEmployee(user)\" type=\"checkbox\"  name=\"agreement\">\n                                  <img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{user.profile_picture}}\" height=\"30px\" width=\"30px\"> {{user.first_name}} {{user.last_name}}</a>\n\n                    </div>\n                  </div>\n\n                   <!-- Modal -->\n                  <div class=\"modal fade\" id=\"innermodel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n                        <div class=\"modal-dialog modal-lg\" role=\"document\">\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\"> All Employees</h5>\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                              </button>\n                            </div>\n                            <div class=\"modal-body\">\n<!--                              <button *ngIf=\"!dropdownClosed\"  id=\"hide-dropdown\" class=\"brn btn-primary form-control\" onclick=\"$('#myDropdown').toggle('show');\">Done</button>-->\n                              <div id=\"myDropdown\" class=\"dropdown-content\">\n                                  <input class=\"form-control\" type=\"text\" placeholder=\"Search..\" id=\"myInput\" onkeyup=\"filterFunction()\">\n                                  <a *ngFor=\"let user of allusers\" >\n                                  <input class=\"checkbox\" (click)=\"onSelectedEmployee(user)\" type=\"checkbox\"  name=\"agreement\">\n                                  <img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{user.profile_picture}}\" height=\"30px\" width=\"30px\"> {{user.first_name}} {{user.last_name}}</a>\n                              </div>\n                              <div id=\"selected-employees\">\n                                <h5 *ngIf=\"selectedEmployee\">Selected Employees</h5>\n                                   <a *ngFor=\"let user of selectedEmployee\" >\n                                  <input class=\"checkbox\" (click)=\"onSelectedEmployee(user)\" type=\"checkbox\"  name=\"agreement\">\n                                  <img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{user.profile_picture}}\" height=\"30px\" width=\"30px\"> {{user.first_name}} {{user.last_name}}</a>\n\n                              </div>\n                            </div>\n                            <div class=\"modal-footer\">\n                              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Done</button>\n<!--                              <button class=\"btn btn-danger\" (click)=\"addGroupWithUsers()\">Done</button>-->\n\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                </div>\n              </div>\n             </div>\n           </div>\n         </div>\n\n        </div>\n      </div>\n      <!-- <pagination-controls class=\"product-pagination\" (pageChange)=\"p = $event\"></pagination-controls> -->\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-product/add-product.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-product/add-product.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n <app-sidebar></app-sidebar>\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center\" style=\"display: table-cell;vertical-align: middle; font-size:12px;\" valign=\"middle\">\n\n      <div class=\"row d-flex  align-content-center flex-wrap\">\n        <div class=\"col\" style=\"height:100%;\">\n          <div class=\"d-flex justify-content-between ml-5 mt-1\">\n\n\n            <h5><a class=\"pr-4\" [routerLink]=\"['/product']\" style=\"right\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>Mirafra Product</h5>\n            <div>\n              <button class=\"btn btn-primary\" [routerLink]=\"['/product']\">Cancel</button>\n              <button class=\"btn btn-danger ml-2 mr-2\"  form=\"AddProductForm\" (click)=\"addNewProduct(AddProductForm.value)\"  [disabled]=\"!AddProductForm.form.valid\">Save</button>\n            </div>\n\n          </div>\n\n         <div class=\"align-self-center ml-4 m-1 mt-0 mr-4\" style=\"height:80vh;\">\n           <div class=\"pt-2 custom-scroll-2\" style=\"height:100%!important;box-shadow: 2px 0px 10px 1px #e2e2e2;overflow-y:scroll;height:80vh;\">\n             <div   class=\"col-md-12 col-lg-9 col-sm-12 ml-3 mt-2\" >\n              <form #AddProductForm=\"ngForm\" enctype=\"multipart/form-data\">\n                <div class=\"\" >\n                <label class=\"label\" style=\"color: #d50000;\">Branch Selection</label>\n                <div class=\"btn-group btn-group-toggle ml-0 mr-2 mt-2 mb-2\" style=\"display:block!important;\" >\n                  <label class=\" mr-4\">\n                    <input ngModel name=\"branch_category\" class=\"\" (change)=\"branchTypeChange($event.target.value)\" value=\"Master\" type=\"radio\" id=\"option1\" autocomplete=\"off\" checked> Master\n                  </label>\n                  <label class=\"\">\n                    <input ngModel name=\"branch_category\" class=\"\" (change)=\"branchTypeChange($event.target.value)\" value=\"Child\" type=\"radio\"  id=\"option2\" autocomplete=\"off\"> Child\n                  </label>\n                </div>\n                <label class=\"label \" style=\"color: #d50000;\">Product Information</label>\n                <input hidden [(ngModel)]=\"user\" name=\"owner\" type=\"text\" class=\"form-control\"  value=\"{{user}}\">\n                  <div class=\"d-flex\">\n\n                    <div class=\"form-group mr-3\">\n                      <label for=\"product-type\">Product Type</label>\n                      <input required [(ngModel)]=\"product_details.product_type\" name=\"product_type\" type=\"text\" class=\"form-control\" id=\"product-type\"  value=\"{{product_details.product_type | titlecase}}\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"product-name\">Product Name</label>\n                      <input required [(ngModel)]=\"product_details.product_name\" name=\"product_name\" type=\"text\" class=\"form-control\" id=\"product-name\"  value=\"{{product_details.product_name | titlecase}}\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"product-image\">Product Image</label>\n                      <input required [(ngModel)]=\"image\" (change)=\"onchangeImage($event)\" name=\"image\" type=\"file\" class=\"form-control\" id=\"product-image\"  >\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"product-description\">Product Description</label>\n                    <input required [(ngModel)]=\"product_details.description\" name=\"description\" type=\"text\" class=\"form-control\" id=\"product-description\" value=\"{{product_details.description}}\">\n                  </div>\n                  <label class=\"label\" style=\"color: #d50000;\">Branch Configs</label>\n                  <div class=\"form-group\">\n                    <label for=\"ap-path\">AP Path</label>\n                    <input required [(ngModel)]=\"product_details.ap_path\" name=\"ap_path\" type=\"text\" class=\"form-control\" id=\"ap-path\"  value=\"{{product_details.ap_path }}\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"cp-path\">CP Path</label>\n                    <input required [(ngModel)]=\"product_details.cp_path\"  name=\"cp_path\" type=\"text\" class=\"form-control\" id=\"cp-path\" value=\"{{product_details.cp_path}}\">\n                  </div>\n              </div>\n              </form>\n\n              <div  class=\"\">\n                <div class=\"mt-4\">\n                <label class=\"label\" style=\"color: #d50000;\">Associated Groups {{selectedGroupsToAdd.length}}</label>\n                <div class=\"pull-right\">\n                <a class=\"\"  style=\"color: #cbcbcb;\">REMOVE GROUP</a>\n                <a class=\" ml-5\" style=\"color: #d50000;\">ADD GROUP</a>\n                </div>\n                </div>\n                <div class=\"\">\n                  <ul class=\"list-group user-group-list\">\n                  <li class=\"list-group-item pl-5 align-middle\" *ngFor=\"let group of selectedGroupsToAdd; let i = index\">\n                    <div class=\"d-flex\">\n                    <input class=\"form-check-input pl-5 align-self-center\" type=\"checkbox\" name=\"options\" id=\"option3\" >\n                    <i style=\"font-size: 14px!important;color: gray; \" class=\"fa fa-circle-o ml-2 mr-2 mt-4 pt-1\" aria-hidden=\"true\"></i>\n                    <div *ngIf=\"selectedGroupsToAdd?.length >0\"  class=\"col pl-5\">\n                      <label  class=\"col\" style=\"font-size: 15px;\">{{group.group_name | titlecase }}</label>\n                      <label  class=\"col\" style=\"margin-top:-20px!important;font-size: 10px;\">Members {{group.ass_emps.length}}</label>\n                    </div>\n                    </div>\n                  </li>\n                  </ul>\n\n                </div>\n              </div>\n               <div>\n\n               </div>\n\n               </div>\n          <div *ngIf=\"!selectedGroupsToAdd?.length >0\" class=\"p-2 d-flex justify-content-center\">\n\n           <div class=\"align-content-center\" align=\"center\">\n             <i class=\"fa fa-users fa-5x\" width=\"100\" height=\"35\"></i>\n             <h3 >Add Group</h3>\n             <p>No Groups added to Project.</p>\n            <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#innermodel\">Add Groups</button>\n\n            </div>\n\n\n          </div>\n\n             <!-- Modal Add Group-->\n             <div class=\"modal fade\" id=\"innermodel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n                        <div class=\"modal-dialog modal-lg\" role=\"document\">\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                              <h5 class=\"modal-title\" id=\"AddGroupsModal\">Available Groups</h5>\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                              </button>\n                            </div>\n                            <div class=\"modal-body\">\n<!--                              <button *ngIf=\"!dropdownClosed\"  id=\"hide-dropdown\" class=\"brn btn-primary form-control\" onclick=\"$('#myDropdown').toggle('show');\">Done</button>-->\n                              <div id=\"myDropdown\" class=\"dropdown-content\">\n                                  <input class=\"form-control\" type=\"text\" placeholder=\"Search..\" id=\"myInput\" onkeyup=\"filterFunction()\">\n                                  <a *ngFor=\"let group of groupFromServer\" >\n                                  <input class=\"checkbox\" (click)=\"onSelectedGroup(group)\" type=\"checkbox\"  name=\"agreement\">\n                                  {{group.group_name}}</a>\n                              </div>\n                              <div id=\"selected-employees\">\n                                <h5 *ngIf=\"selectedGroupsToAdd\">Selected Groups</h5>\n                                   <a *ngFor=\"let group of selectedGroupsToAdd\" >\n                                  <input class=\"checkbox\" (click)=\"onSelectedGroup(group)\" type=\"checkbox\"  name=\"agreement\">\n                                  {{group.group_name}}</a>\n\n                              </div>\n                            </div>\n                            <div class=\"modal-footer\">\n                              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Done</button>\n<!--                              <button class=\"btn btn-danger\" (click)=\"addGroupWithUsers()\">Done</button>-->\n\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n\n         </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configurations/configurations.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configurations/configurations.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n <app-sidebar></app-sidebar>\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center m-2\" style=\"display: table-cell;vertical-align: middle;\" valign=\"middle\">\n      <div class=\"d-flex justify-content-between mt-1\">\n\n\n            <h5 style=\"color: #d50000;\">Configuration</h5>\n\n\n          </div>\n\n      <div style=\"margin-top:0;box-shadow: 2px 2px 10px 1px #e2e2e2;\" >\n        <div class=\"row d-flex  align-content-center flex-wrap\">\n        <div class=\"col\" >\n\n         <div class=\"align-self-center ml-4 m-1 mt-0 mr-4\">\n           <div class=\"row\"style=\"\">\n             <div class=\"col-sm-12 col-md-12 col-lg-12 m-2 pt-1 d-flex\" style=\"margin-top:0!important;margin-right:0!important;margin-left:0!important;padding-right:0!important;padding-left:0!important;\">\n               <ul *ngIf=\"confs_data?.length > 0\" class=\"list-group col-sm-4 col-md-4 col-lg-3\">\n                 <li (click)=\"selected_conf(conf.name)\" class=\"list-group-item\" *ngFor=\"let conf of confs_data\">\n                   <i class=\"fa fa-circle-o mr-2\"  aria-expanded=\"false\"> </i>{{conf.name | titlecase}}\n<!--                 <a (click)=\"selected_conf(conf.name)\">{{conf.name | titlecase}}</a>-->\n               </li>\n               </ul>\n               <div *ngIf=\"confs_data?.length > 0\" class=\"col-sm-8 col-md-8 col-lg-9\" style=\" border-left: 1px solid #e2e2e2;\">\n                 <div class=\"row\">\n                   <div class=\"col-sm-12 col-md-12 col-lg-12\">\n                     <form #SaveForm=\"ngForm\" (ngSubmit)=\"saveConfig(SaveForm.value)\">\n                     <div class=\"d-flex justify-content-between\">\n                       <label>{{selected_conf_data.name | titlecase}} config details.</label>\n                       <a *ngIf=\"!isShow\"  (click) = toggleDisplay()><i class=\"fa fa-2x fa-edit\"  aria-expanded=\"false\"></i></a>\n                       <div *ngIf=\"isShow\" class=\" my-save-conf my-save-conf-collapse\" id=\"edit-conf-save\" >\n                          <button (click) = toggleDisplay()  type=\"button\" class=\"ml-2 btn\"   name=\"cancel\" >CANCEL</button>\n                        <input class=\"btn btn-danger ml-2\"  type=\"submit\" name=\"saveurl\" value=\"SAVE\">\n                       </div>\n\n                     </div>\n                     <div>\n                       <label>{{selected_conf_data.name}} URL</label>\n\n                         <input [disabled]=\"!isShow\" ngModel class=\"form-control\" type=\"text\" id=\"confUrl-{{selected_conf_data.name}}\" name=\"confUrl\" value=\"{{selected_conf_data.url}}\">\n\n\n                     </div>\n                     </form>\n\n\n                   </div>\n                 </div>\n\n               </div>\n               <div  *ngIf=\"!confs_data?.length > 0\">\n                 <h3>Nothing to display</h3>\n               </div>\n\n\n\n\n\n             </div>\n\n\n\n\n<!--             <div class=\"col-md-12 col-lg-9 col-sm-12 \" style=\"\">-->\n<!--              <div class=\"pl-3\" style=\"border-left:1px solid #8080803b;\">-->\n<!--                <div class=\"d-flex justify-content-between mt-4 mb-2\">-->\n<!--                  <label class=\"label \" style=\"color: #d50000;\">Personal Information</label>-->\n<!--                <a class=\"pr-4\" href=\"\" style=\"right\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a>-->\n<!--                </div>-->\n\n<!--                <div class=\"d-flex\">-->\n<!--                  <div class=\"form-group mr-5\">-->\n<!--                    <label for=\"product-type\">First Name</label>-->\n<!--                    <input type=\"text\" class=\"form-control\" id=\"product-type\"  value=\"{{employee.first_name | titlecase}}\">-->\n<!--                  </div>-->\n<!--                  <div class=\"form-group\">-->\n<!--                    <label for=\"product-description\">Last Name</label>-->\n<!--                    <input type=\"text\" class=\"form-control\" id=\"product-description\" value=\"{{employee.last_name}}\">-->\n<!--                  </div>-->\n<!--                  </div>-->\n<!--                <div class=\"d-flex\">-->\n<!--                  <div class=\"form-group mr-5\">-->\n<!--                    <label for=\"email\">Email Address</label>-->\n<!--                    <input type=\"text\" class=\"form-control\" id=\"email\"  value=\"{{employee.email }}\">-->\n<!--                  </div>-->\n<!--                  <div class=\"form-group\">-->\n<!--                    <label for=\"phone\">Phone Number</label>-->\n<!--                    <input type=\"text\" class=\"form-control\" id=\"phone\" value=\"{{employee.phone}}\">-->\n<!--                  </div>-->\n<!--                  </div>-->\n<!--                <div class=\"d-flex\">-->\n<!--                  <div class=\"form-group mr-5\">-->\n<!--                    <label for=\"emp-id\">Employee Id</label>-->\n<!--                    <input type=\"text\" class=\"form-control\" id=\"emp-id\"  value=\"{{employee.emp_id }}\">-->\n<!--                  </div>-->\n<!--                  <div class=\"form-group\">-->\n<!--                    <label for=\"emp-desig\">Employee Designation</label>-->\n<!--                    <input type=\"text\" class=\"form-control\" id=\"emp-desig\" value=\"{{employee.emp_desig}}\">-->\n<!--                  </div>-->\n<!--                  </div>-->\n\n\n<!--              </div>-->\n\n<!--             </div>-->\n           </div>\n         </div>\n\n\n        </div>\n\n      </div>\n<!--        <div class=\"row d-flex  align-content-center flex-wrap\">-->\n<!--          <div class=\"col \">-->\n<!--          <div class=\"pl-3\" style=\"background-color: #dddddd;\">-->\n<!--                <div class=\"mt-4\">-->\n<!--                <label class=\"label mb-2\" style=\"color: #d50000;\">Credentials</label>-->\n\n<!--                </div>-->\n<!--                <div class=\"pl-3\" style=\"background-color: #dddddd;\">-->\n<!--                  <ul class=\"list-group user-group-list\" style=\"background-color: #dddddd;\">-->\n<!--                  <li style=\"padding-left:0px!important;background-color: #dddddd;\" class=\"list-group-item align-middle\"  *ngFor=\"let credential of credentials; let i = index\">-->\n<!--                    <div class=\"\">-->\n<!--                      <span class=\"d-flex justify-content-between\" style=\"color: green\">-->\n<!--                        <div class=\"d-flex\">-->\n<!--                          <img height=\"25px\" width=\"25px\" src=\"{{credential.icon }}\">-->\n<!--                    <label for=\"username\" class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{credential.devops_name | titlecase }}</label>-->\n<!--                        </div>-->\n<!--                      <a class=\"pr-4\" href=\"\" style=\"right\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a>-->\n<!--                      </span>-->\n\n<!--                    <div class=\"d-flex mt-2 justify-content-start\">-->\n<!--                      <div class=\"form-group mr-5 mt-2\">-->\n<!--                      <label for=\"username\" class=\"\" style=\"margin-bottom:0px!important;font-size: 15px;\">Username</label>-->\n<!--                      <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" value=\"{{credential.username }}\">-->\n<!--                        </div>-->\n<!--                      <div class=\"form-group mr-5 ml-5\">-->\n<!--                      <label  class=\"\" style=\"margin-top:0px!important;font-size: 15px;\">Password</label>-->\n<!--                      <input type=\"password\" class=\"form-control\" id=\"password\" name=\"username\" value=\"{{credential.password }}\">-->\n<!--                         </div>-->\n<!--                    </div>-->\n\n<!--                    </div>-->\n<!--                  </li>-->\n<!--                  </ul>-->\n\n<!--                </div>-->\n<!--              </div>-->\n<!--              <div class=\"pl-3\">-->\n<!--                <div class=\"mt-4\">-->\n<!--                <label class=\"label\">Associated Groups</label>-->\n\n<!--                </div>-->\n<!--                <div class=\"\">-->\n<!--                  <ul class=\"list-group user-group-list\">-->\n<!--                  <li class=\"list-group-item pl-5 align-middle\"  *ngFor=\"let group of product_details.associated_groups; let i = index\">-->\n<!--                    <div class=\"d-flex\">-->\n<!--                      <span class=\"\" style=\"color: green\">-->\n\n<!--                    <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>-->\n<!--                      </span>-->\n\n<!--                    <div class=\"col\">-->\n<!--                      <label class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{group.group_name | titlecase }}</label>-->\n<!--                      <label class=\"col\" style=\"margin-top:0px!important;font-size: 10px;\">Members {{group.members.length}}</label>-->\n<!--                    </div>-->\n\n<!--                    </div>-->\n<!--                  </li>-->\n<!--                  </ul>-->\n\n<!--                </div>-->\n<!--              </div>-->\n\n<!--          </div>-->\n<!--        </div>-->\n      </div>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n    <app-sidebar></app-sidebar>\n\n    <div id=\"contents\" class=\"col justify-content-center\" style=\"display: table-cell;vertical-align: middle;\" valign=\"middle\">\n\n      <div class=\"row d-flex  align-content-center flex-wrap\">\n        <div class=\"offset-md-3 col-md-6 \">\n          <!-- if Admin user show this in dashboard-->\n          <div *ngIf=\"user_data.user_group==='admin'; else elseBlock\" id=\"dash-container-admin \" class=\"align-self-center m-5\">\n            <div class=\"align-content-center\" align=\"center\">\n              <img src=\"https://mirafra.com/wp-content/uploads/2016/05/mira_logo.png\" width=\"100\" height=\"35\">\n                    <h3 >Welcome to Mirafra DevOps,</h3>\n                    <p>Dashboard is coming soon.</p>\n                    <a [routerLink]=\"['/employees']\" class=\"btn btn-danger btn-lg\">Mirafra Employees</a>\n\n\n\n            </div>\n          </div>\n\n          <!-- if Regular user show this in dashboard-->\n          <ng-template #elseBlock>\n            <div  id=\"dash-container-employee\" class=\"align-self-center m-5\">\n            <div class=\"align-content-center\" align=\"center\">\n              <img src=\"https://mirafra.com/wp-content/uploads/2016/05/mira_logo.png\" width=\"100\" height=\"35\">\n                    <h3 >Verifiy Your Email Address,</h3>\n                    <p>We have sent verification email link to your registered email address.</p>\n                    <p>If not received wait for sometime or click on resend button.</p>\n                    <a [routerLink]=\"['/profile']\" class=\"btn btn-danger mr-2\">Skip</a>\n                    <a (click)=\"resend_verification()\" class=\"btn btn-danger\">Resend Link</a>\n\n\n\n\n            </div>\n          </div>\n            </ng-template>\n          <!-- <div id=\"login-container \" class=\"align-self-center m-5\">\n\n\n              <div>\n                <h4>Sign In</h4>\n                <p>Welcome back to Mirafra DevOps,</p>\n                <p>Please login to continue your works!</p>\n\n              </div>\n              <form class=\"\">\n\n                  <div class=\"container form-group\">\n                    <label for=\"email\"><b>Email Address</b></label>\n                    <input type=\"text\" class=\"form-control\" type=\"text\" placeholder=\"Enter Email\" name=\"email\" required>\n\n                    <label for=\"password\"><b>Password</b></label>\n                    <input type=\"password\" class=\"form-control\" type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n                      <label>\n                      <input class=\"form-control\" type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\n                    </label>\n                     <div class=\"container\" style=\"background-color:#f1f1f1\">\n\n                    <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\n                  </div>\n                    <input class=\"btn btn-danger btn-lg\" type=\"submit\" value=\"Sign In\">\n\n                  </div>\n\n\n              </form>\n\n          </div>\n        -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee-details/employee-details.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee-details/employee-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n <app-sidebar></app-sidebar>\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center m-2\" style=\" display: table-cell;vertical-align: middle;\" valign=\"middle\">\n      <div class=\"d-flex justify-content-between mt-1\">\n            <h5 style=\"color: #d50000;\">Employee Details</h5>\n\n      </div>\n\n      <div style=\"margin-top:0;box-shadow: 2px 2px 10px 1px #e2e2e2;height:80vh;\">\n        <div class=\"row d-flex  align-content-center flex-wrap\">\n        <div class=\"col\" style=\"\">\n\n         <div class=\"align-self-center ml-4 m-1 mt-0 mr-4\">\n           <div class=\"row\"style=\"\">\n             <div class=\"col-sm-12 col-md-4 col-lg-4 m-2 pt-1\" style=\"border-right:1px solid #8080803b;margin-top:0!important;margin-right:0!important;margin-left:0!important;padding-right:0!important;padding-left:0!important;\">\n                <div class=\"d-flex justify-content-center\" style=\"width:100%;\">\n                  <img class=\" align-self-center\" style=\"width:200px!important; height:200px!important; border-radius: 50%\" src=\"{{employee.profile_picture}}\" >\n                </div>\n              <div class=\"\" style=\"font-size:12px;\"  align=\"center\">\n               <div class=\"\">\n                 <div class=\"\">\n                  <label class=\"\"><strong>{{employee.first_name}} {{employee.last_name}}</strong></label>\n                 <div class=\"\">\n                  <label class=\"ml-2\" style=\"color: #d50000;\">Employee</label>\n                </div></div>\n                </div>\n                <div class=\"\">\n                  <label class=\"mr-2\">Email:</label>\n                  <label class=\"\">{{employee.email}}</label>\n                </div>\n                <div class=\"\" >\n                  <label class=\"mr-2\">Emp ID:</label>\n                  <label class=\"\">{{employee.emp_id}}</label>\n                </div>\n                <div class=\"\" >\n                  <label class=\" \"><input [checked]=\"isAdmin\" class=\"mr-2\" type=\"checkbox\" (change)=\"setAsAuperadmin($event.target.checked)\">Super Admin</label>\n\n                </div>\n              </div>\n               <div class=\"border-top mt-2 pt-2 ml-2\" >\n                 <h6 style=\"color: #d50000;\">Configurations</h6>\n                <div class=\"d-flex pb-1 justify-content-between\" *ngFor=\"let confs of configurations\">\n                  <div class=\"d-flex\">\n                    <img height=\"25px\" width=\"25px\" src=\"../assets/{{confs.app_name }}.png\">\n                    <label class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{confs.app_name | titlecase }}</label>\n                  </div>\n                  <div class=\"d-flex\">\n                    <a class=\"mr-1\"><i class=\"fa fa-times-circle-o text-danger\" aria-hidden=\"true\"></i></a>\n                    <a class=\"mr-1\"><i class=\"fa fa-check-circle text-success\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n\n               </div>\n\n\n\n             </div>\n\n\n\n\n             <div class=\"col-md-8 col-lg-8 col-sm-12 custom-scroll-2\" style=\"overflow-y:scroll;height:70vh;\">\n              <div class=\"pl-3\" style=\"\">\n                <div class=\"d-flex justify-content-between mt-4 mb-2\">\n                  <label class=\"label \" style=\"color: #d50000;\">Associated Groups</label>\n                </div>\n\n                <div class=\"d-flex\">\n                  <ul class=\"list-group user-group-list\" style=\"width:100%;\">\n                  <li class=\"list-group-item align-middle\"  *ngFor=\"let group of user_groups_data; let i = index\">\n                    <div class=\"d-flex\">\n                      <span class=\"\" style=\"color: green\">\n\n                    <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>\n                      </span>\n\n                    <div class=\"col\">\n                      <label class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{group.group_name | titlecase }}</label>\n                      <label class=\"col\" style=\"margin-top:0px!important;font-size: 10px;\">Members {{group.ass_emps}}</label>\n                    </div>\n\n                    </div>\n                  </li>\n                  </ul>\n                  </div>\n\n\n\n              </div>\n               <div class=\"pl-3\" style=\"\">\n                <div class=\"d-flex justify-content-between mt-4 mb-2\">\n                  <label class=\"label \" style=\"color: #d50000;\">Associated Projects</label>\n                </div>\n\n                <div class=\"d-flex\" style=\"\">\n                  <ul class=\"list-group user-group-list\" style=\"width:100%;\">\n                  <li class=\"list-group-item align-middle\"  *ngFor=\"let proj of associated_projects; let i = index\">\n\n                    <div class=\"d-flex\">\n<!--                      <span class=\"\" style=\"color: green\">-->\n\n<!--                    <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>-->\n<!--                      </span>-->\n\n                    <div class=\"col\">\n                      <label class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{proj.product_name | titlecase }}</label>\n                      <label class=\"col\" style=\"margin-top:0px!important;font-size: 10px;\">Members {{proj.emp_length}}</label>\n                    </div>\n\n                    </div>\n                  </li>\n                  </ul>\n                  </div>\n\n\n\n              </div>\n             </div>\n           </div>\n         </div>\n\n\n        </div>\n\n      </div>\n<!--        <div class=\"row d-flex  align-content-center flex-wrap\">-->\n<!--          <div class=\"col \">-->\n<!--          <div class=\"pl-3\" style=\"background-color: #dddddd;\">-->\n<!--                <div class=\"mt-4\">-->\n<!--                <label class=\"label mb-2\" style=\"color: #d50000;\">Credentials</label>-->\n\n<!--                </div>-->\n<!--                <div class=\"pl-3\" style=\"background-color: #dddddd;\">-->\n\n\n<!--                  <ul class=\"list-group user-group-list\" style=\"background-color: #dddddd;\">-->\n\n<!--                  <li style=\"padding-left:0px!important;background-color: #dddddd;\" class=\"list-group-item align-middle\"  *ngFor=\"let credential of credentials; let i = index\">-->\n<!--                    <form [attr.id]=\"'form-'+i\" name=\"'form-'+i\">-->\n<!--                    <div class=\"\">-->\n<!--                      <span class=\"d-flex justify-content-between\" style=\"color: green\">-->\n<!--                        <div class=\"d-flex\">-->\n<!--                          <img height=\"25px\" width=\"25px\" src=\"../assets/{{credential.app_name }}.png\">-->\n<!--                    <label for=\"username-{{i}}\" class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{credential.app_name | titlecase }}</label>-->\n<!--                        </div>-->\n<!--                      <a *ngIf=\"!isEditCred\" (click) = \"toggleEditCred()\" class=\"pr-4\"  style=\"\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a>-->\n<!--                        <div  *ngIf=\"isEditCred\" class=\" my-save-conf my-save-conf-collapse\" >-->\n<!--                          <button (click) = \"toggleEditCred()\"  type=\"button\" class=\"ml-2 btn\"   name=\"cancel\" >CANCEL</button>-->\n<!--                        <input class=\"btn btn-danger ml-2\" (click)=\"credSubmit(credential)\"  type=\"submit\" name=\"saveurl\" value=\"SAVE\">-->\n<!--                       </div>-->\n<!--                      </span>-->\n\n<!--                    <div class=\"d-flex mt-2 justify-content-start\">-->\n<!--                      <div class=\"form-group mr-5 mt-2\">-->\n<!--                      <label for=\"username-{{i}}\" class=\"\" style=\"margin-bottom:0px!important;font-size: 15px;\">Username</label>-->\n<!--                        <input hidden type=\"text\" [(ngModel)]=\"credential.app_name\" name=\"devopsName\">-->\n<!--                      <input [disabled]=\"!isEditCred\"  type=\"text\" class=\"form-control\" id=\"username-{{i}}\" name=\"username-{{i}}\" [(ngModel)]=\"credential.username\">-->\n<!--                        </div>-->\n<!--                      <div class=\"form-group mr-5 ml-5\">-->\n<!--                      <label  class=\"\" style=\"margin-top:0px!important;font-size: 15px;\">Password</label>-->\n<!--                      <input [disabled]=\"!isEditCred\" type=\"password\" class=\"form-control\" id=\"password-{{i}}\" name=\"password-{{i}}\" [(ngModel)]=\"credential.password\" >-->\n<!--                         </div>-->\n<!--                    </div>-->\n\n<!--                    </div>-->\n<!--                    </form>-->\n<!--                  </li>-->\n<!--                  </ul>-->\n\n<!--                </div>-->\n<!--              </div>-->\n<!--              <div class=\"pl-3\">-->\n<!--                <div class=\"mt-4\">-->\n<!--                <label class=\"label\">Associated Groups</label>-->\n\n<!--                </div>-->\n<!--                <div class=\"\">-->\n<!--                  <ul class=\"list-group user-group-list\">-->\n<!--                  <li class=\"list-group-item pl-5 align-middle\"  *ngFor=\"let group of user_groups; let i = index\">-->\n<!--                    <div class=\"d-flex\">-->\n<!--                      <span class=\"\" style=\"color: green\">-->\n\n<!--                    <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>-->\n<!--                      </span>-->\n\n<!--                    <div class=\"col\">-->\n<!--                      <label class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{group.group_name | titlecase }}</label>-->\n<!--                      <label class=\"col\" style=\"margin-top:0px!important;font-size: 10px;\">Members {{ass_emp}}</label>-->\n<!--                    </div>-->\n\n<!--                    </div>-->\n<!--                  </li>-->\n<!--                  </ul>-->\n\n<!--                </div>-->\n<!--              </div>-->\n\n<!--          </div>-->\n<!--        </div>-->\n      </div>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employees.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n <app-sidebar></app-sidebar>\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center\" style=\"display: table-cell;vertical-align: middle;height:90vh;\" valign=\"middle\">\n\n      <div class=\"row d-flex  align-content-center flex-wrap\" style=\"height:90vh;\">\n        <div class=\"col\" style=\"height:90vh;\">\n          <div class=\"d-flex justify-content-between ml-5 mt-1\">\n            <h3>Employees</h3>\n            <a class=\"pr-4\" href=\"\" style=\"right\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n          </div>\n\n\n          <div class=\"align-self-center ml-5 m-1\">\n            <div class=\"dropdown\">\n              <div class=\" d-flex justify-content-between\">\n                <div class=\"d-inline-flex\">\n                <h5>Filters</h5>\n                <button onclick=\"myFunction()\" class=\"form-control dropbtn\">Employee Name <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                </button>\n                <button onclick=\"myFunction2()\" class=\"form-control dropbtn\">Email Address <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                </button>\n                </div>\n                <div class=\"pr-4\">\n                 <a href=\"\">RESET</a>\n                 </div>\n              </div>\n\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <input type=\"text\" placeholder=\"Search..\" id=\"myInput\" onkeyup=\"filterFunction()\">\n                <a *ngFor=\"let user of users\" [routerLink]=\"['/employeedetails']\" [queryParams]=\"{ employee_id: user.email}\"><input class=\"checkbox\" type=\"checkbox\"  name=\"agreement\"><img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{user.profile_picture}}\" height=\"30px\" width=\"30px\"> {{user.first_name}} {{user.last_name}}</a>\n\n              </div>\n              <div id=\"myDropdown2\" class=\"dropdown-content\">\n                <input type=\"text\" placeholder=\"Search..\" id=\"myInput2\" onkeyup=\"filterFunction2()\">\n                <a *ngFor=\"let user of users\" [routerLink]=\"['/employeedetails']\" [queryParams]=\"{ employee_id: user.email}\"><input class=\"checkbox\" type=\"checkbox\"  name=\"agreement\"><img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{user.profile_picture}}\" height=\"30px\" width=\"30px\"> {{user.email}}</a>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"align-self-center ml-5 m-3 custom-scroll-2\" style=\"overflow-y:scroll;height:70vh;\">\n            <table class=\"table\">\n              <tr>\n                <th scope=\"col\"></th>\n                <th scope=\"col\"></th>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Employee Id</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">Phone</th>\n                <th scope=\"col\">Groups</th>\n              </tr>\n              <tr class=\"userlist-row\" *ngFor=\"let user of users | paginate: { itemsPerPage: 8, currentPage: p }\" [routerLink]=\"['/employeedetails']\" [queryParams]=\"{employee_id: user.email}\" >\n                <td><input class=\"checkbox\" type=\"checkbox\"  name=\"agreement\"></td>\n                <td><img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{user.profile_picture}}\" height=\"40px\" width=\"40px\"></td>\n                <td>{{user.first_name}} {{user.last_name}}</td>\n                <td>{{user.email}}</td>\n                <td>{{user.emp_id}}</td>\n                <td>{{user.phone}}</td>\n                <td>{{user.groups_count}}</td>\n\n\n              </tr>\n            </table>\n\n          </div>\n\n        </div>\n      </div>\n      <pagination-controls class=\"employee-pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center\" style=\"display: table-cell;vertical-align: middle;\" valign=\"middle\">\n\n      <div class=\"row d-flex  align-content-center flex-wrap\">\n        <div class=\"offset-md-3 col-md-6 \">\n          <div id=\"login-container \" class=\"align-self-center m-5\">\n\n\n              <div>\n                <h4>Forgot Password</h4>\n                <p>Welcome back to Mirafra DevOps,</p>\n                <p>Dont worry enter your registered email and hit button to get link in your mail to resset your password!</p>\n\n              </div>\n              <form #ResetReqPassForm=\"ngForm\" (ngSubmit)=\"resetPasswordRequest(ResetReqPassForm.value)\">\n\n                  <div class=\" form-group\">\n                    <label for=\"email\"><b>Enter Password</b></label>\n                    <input ngModel id=\"email\" type=\"password\" class=\"form-control no-border\" type=\"text\" placeholder=\"Enter Password\" name=\"password1\" required>\n\n\n                  <div class=\"align-content-center\" align=\"center\">\n\n                    <input class=\"btn btn-danger mt-2\" type=\"submit\" value=\"Request password Change\">\n                    <div>Go To <a [routerLink]=\"['/login']\" >Login</a></div>\n\n\n                  </div>\n\n                  </div>\n\n\n              </form>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/group-details/group-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/group-details/group-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n <app-sidebar></app-sidebar>\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center \" style=\"background-color: #f1f1f1;display: table-cell;vertical-align: middle;\" valign=\"middle\">\n      <div class=\"row d-flex mt-1\">\n      <div class=\"col-md-3 mt-2\" >\n\n        <h5>GROUPS</h5>\n        <div class=\"  align-content-center\">\n          <div class=\"\">\n            <div class=\"list  group-list\" style=\"list-style: none; font-size: 20px;width: 100%!important;\">\n              <div class=\"row ml-2\" (click)=\"onSelectedGroup(group.group_name)\"  style=\"color:gray;list-style: none; font-size: 20px;width: 100%!important;\" *ngFor=\"let group of groups\">\n                <div  class=\"col-md-12 \" >\n                  <i style=\"font-size: 14px!important;color: gray; \" class=\"fa fa-circle-o mr-2\" aria-hidden=\"true\"></i>\n                  <label class=\"label ml-1\"><strong>{{group.group_name | titlecase}}</strong></label>\n\n\n                </div>\n                <label class=\"ml-5\" style=\"font-size: 14px!important;color: gray; \">Members : {{group.members.length}}</label>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"ml-3\" style=\"\" align=\"center\">\n            <button class=\"btn btn-danger align-center mt-5\" (click)=\"openAddGroupModal()\">NEW GROUP</button>\n<!--            <a  class=\"pull-right align-self-center\">VIEW EMPLOYEES</a >-->\n\n          </div>\n        </div>\n\n\n        </div>\n      <div class=\"col-md-9 pt-5\"  style=\"margin-top:-20px;background-color: white;\">\n\n        <div class=\"d-flex justify-content-between\">\n          <div><i class=\"fa fa-search mr-2\"></i><input type=\"text\" id=\"search-box\" placeholder=\"Search Here\"></div>\n          <div class=\"\"><i class=\"fa fa-trash\"></i><i class=\"fa fa-edit ml-2\"></i></div>\n        </div>\n        <div class=\"\">\n          <div class=\"p-3\" style=\"background-color: #404040; color: white; border-top-left-radius: 5px;border-top-right-radius: 5px;\">\n            <h2>{{selected_group.group_name | titlecase}} Group</h2>\n            <h6 style=\" color:darkgray;\">Created on 04/05/1990</h6>\n          </div>\n          <div class=\"mt-3 pl-4\" style=\"background-color:  #404040; color: white;\">\n            Members of Group\n          </div>\n\n          <div class=\"member-container\" style=\"max-height: 60vh;\">\n            <ul class=\"list-group\" style=\"overflow-y: scroll;\">\n              <li class=\"list-group-item mt-2\"  *ngFor=\"let member of selected_group.members\">\n                <div class=\"ml-2\">\n                  <img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{member.profile_picture}}\" height=\"40px\" width=\"40px\">\n                  <label class=\"ml-3\">{{member.first_name | titlecase}}  {{member.last_name | titlecase}}</label>\n                </div>\n                <label class=\"ml-5 pl-3\" style=\"font-size: 12px!important;color: darkgray;\">No. of Groups : {{member.groups_count}}</label>\n\n              </li>\n            </ul>\n          </div>\n\n        </div>\n\n        </div>\n         <!-- Modal -->\n<!--                      <div class=\"modal fade modal-fullscreen\" id=\"create-group-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">-->\n<!--                        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">-->\n<!--                          <div class=\"modal-content\">-->\n<!--                            <div class=\"modal-header\">-->\n<!--                              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Create New Group</h5>-->\n<!--                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">-->\n<!--                                <span aria-hidden=\"true\">&times;</span>-->\n<!--                              </button>-->\n<!--                            </div>-->\n<!--                            <div class=\"modal-body\">-->\n<!--                              <form #NewGroupForm=\"ngForm\">-->\n<!--                              <div class=\"from-group\">-->\n<!--                                <label for=\"new-group-name\">Group Name</label>-->\n<!--                                 <input ngModel type=\"text\" name=\"new-group-name\" class=\"checkbox ml-2\" id=\"new-group-name\" >-->\n<!--                              </div>-->\n<!--                              </form>-->\n\n<!--                              <div>-->\n<!--                                <button class=\"btn btn-danger\"  data-toggle=\"modal\" data-target=\"#innermodel\" >Add Members</button>-->\n<!--                                  &lt;!&ndash; Modal &ndash;&gt;-->\n<!--                                  <div class=\"modal fade innermodel\" id=\"innermodel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">-->\n<!--                                    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">-->\n<!--                                      <div class=\"modal-content\">-->\n<!--                                        <div class=\"modal-header\">-->\n<!--                                          <h5 class=\"modal-title\" id=\"innermembersmodel\">Modal title</h5>-->\n<!--                                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">-->\n<!--                                            <span aria-hidden=\"true\">&times;</span>-->\n<!--                                          </button>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"modal-body\">-->\n<!--                                          <div id=\"myDropdown\" class=\"dropdown-content\">-->\n<!--                                           <input type=\"text\" placeholder=\"Search..\" id=\"myInput\" onkeyup=\"filterFunction()\">-->\n<!--<a *ngFor=\"let user of allusers\" ><input class=\"checkbox\" type=\"checkbox\"  name=\"agreement\"><img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{user.profile_picture}}\" height=\"30px\" width=\"30px\"> {{user.first_name}} {{user.last_name}}</a>-->\n<!--                                        </div>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"modal-footer\">-->\n<!--                                          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"innermodel\">Close</button>-->\n<!--                                          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"innermodel\">Save changes</button>-->\n<!--                                        </div>-->\n<!--                                      </div>-->\n<!--                                    </div>-->\n<!--                                  </div>-->\n<!--                              </div>-->\n\n<!--                            </div>-->\n<!--                            <div class=\"modal-footer\">-->\n<!--                              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>-->\n<!--                              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addNewGroup(NewGroupForm.value)\" data-dismiss=\"modal\">Create</button>-->\n<!--                            </div>-->\n<!--                          </div>-->\n<!--                        </div>-->\n<!--                      </div>-->\n<!--                    </div>-->\n\n      <!--<div style=\"margin-top:0;box-shadow: 2px 2px 10px 1px #e2e2e2;\">-->\n        <!--<div class=\"row d-flex  align-content-center flex-wrap\">-->\n        <!--<div class=\"col\" >-->\n\n         <!--<div class=\"align-self-center ml-4 m-1 mt-0 mr-4\">-->\n           <!--<div class=\"row\"style=\"\">-->\n             <!--<div class=\"col-sm-12 col-md-12 col-lg-3 m-2 pt-1\" style=\"margin-top:0!important;margin-right:0!important;margin-left:0!important;padding-right:0!important;padding-left:0!important;\">-->\n                <!--<div class=\"\" style=\"width:100%;\">-->\n                  <!--<img class=\" align-self-center\" style=\"width:100%!important; height:200px!important; border-radius: 50%\" src=\"{{employee.profile_picture}}\" >-->\n\n                <!--</div>-->\n              <!--<div  align=\"center\">-->\n               <!--<div class=\"\">-->\n                 <!--<div class=\"\">-->\n                  <!--<label class=\"\"><strong>{{employee.first_name}} {{employee.last_name}}</strong></label>-->\n                 <!--<div class=\"\">-->\n                  <!--<label class=\"ml-2\">Employee</label>-->\n                <!--</div></div>-->\n                <!--</div>-->\n                <!--<div class=\"\">-->\n                  <!--<label class=\"\">Email </label>-->\n                  <!--<label class=\"ml-2\">{{employee.email}}</label>-->\n                <!--</div>-->\n                <!--<div class=\"\" >-->\n                  <!--<label class=\" \">Employee Id </label>-->\n                  <!--<label class=\"ml-2\">{{employee.emp_id}}</label>-->\n                <!--</div>-->\n              <!--</div>-->\n\n\n\n             <!--</div>-->\n\n\n\n\n             <!--<div class=\"col-md-12 col-lg-9 col-sm-12 \" style=\"\">-->\n              <!--<div class=\"pl-3\" style=\"border-left:1px solid #8080803b;\">-->\n                <!--<div class=\"d-flex justify-content-between mt-4 mb-2\">-->\n                  <!--<label class=\"label \">Personal Information</label>-->\n                <!--<a class=\"pr-4\" href=\"\" style=\"right\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a>-->\n                <!--</div>-->\n\n                <!--<div class=\"d-flex\">-->\n                  <!--<div class=\"form-group mr-5\">-->\n                    <!--<label for=\"product-type\">First Name</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"product-type\"  value=\"{{employee.first_name | titlecase}}\">-->\n                  <!--</div>-->\n                  <!--<div class=\"form-group\">-->\n                    <!--<label for=\"product-description\">Last Name</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"product-description\" value=\"{{employee.last_name}}\">-->\n                  <!--</div>-->\n                  <!--</div>-->\n                <!--<div class=\"d-flex\">-->\n                  <!--<div class=\"form-group mr-5\">-->\n                    <!--<label for=\"email\">Email Address</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"email\"  value=\"{{employee.email }}\">-->\n                  <!--</div>-->\n                  <!--<div class=\"form-group\">-->\n                    <!--<label for=\"phone\">Phone Number</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"phone\" value=\"{{employee.phone}}\">-->\n                  <!--</div>-->\n                  <!--</div>-->\n                <!--<div class=\"d-flex\">-->\n                  <!--<div class=\"form-group mr-5\">-->\n                    <!--<label for=\"emp-id\">Employee Id</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"emp-id\"  value=\"{{employee.emp_id }}\">-->\n                  <!--</div>-->\n                  <!--<div class=\"form-group\">-->\n                    <!--<label for=\"emp-desig\">Employee Designation</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"emp-desig\" value=\"{{employee.emp_desig}}\">-->\n                  <!--</div>-->\n                  <!--</div>-->\n\n\n              <!--</div>-->\n\n             <!--</div>-->\n           <!--</div>-->\n         <!--</div>-->\n\n\n        <!--</div>-->\n\n      <!--</div>-->\n        <!--<div class=\"row d-flex  align-content-center flex-wrap\">-->\n          <!--<div class=\"col \">-->\n          <!--<div class=\"pl-3\" style=\"background-color: #dddddd;\">-->\n                <!--<div class=\"mt-4\">-->\n                <!--<label class=\"label mb-2\">Credentials</label>-->\n\n                <!--</div>-->\n                <!--<div class=\"pl-3\" style=\"background-color: #dddddd;\">-->\n                  <!--<ul class=\"list-group user-group-list\" style=\"background-color: #dddddd;\">-->\n                  <!--<li style=\"padding-left:0px!important;background-color: #dddddd;\" class=\"list-group-item align-middle\"  *ngFor=\"let credential of credentials; let i = index\">-->\n                    <!--<div class=\"\">-->\n                      <!--<span class=\"d-flex justify-content-between\" style=\"color: green\">-->\n                        <!--<div class=\"d-flex\">-->\n                          <!--<img height=\"25px\" width=\"25px\" src=\"{{credential.icon }}\">-->\n                    <!--<label for=\"username\" class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{credential.devops_name | titlecase }}</label>-->\n                        <!--</div>-->\n                      <!--<a class=\"pr-4\" href=\"\" style=\"right\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a>-->\n                      <!--</span>-->\n\n                    <!--<div class=\"d-flex mt-2 justify-content-start\">-->\n                      <!--<div class=\"form-group mr-5 mt-2\">-->\n                      <!--<label for=\"username\" class=\"\" style=\"margin-bottom:0px!important;font-size: 15px;\">Username</label>-->\n                      <!--<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" value=\"{{credential.username }}\">-->\n                        <!--</div>-->\n                      <!--<div class=\"form-group mr-5 ml-5\">-->\n                      <!--<label  class=\"\" style=\"margin-top:0px!important;font-size: 15px;\">Password</label>-->\n                      <!--<input type=\"password\" class=\"form-control\" id=\"password\" name=\"username\" value=\"{{credential.password }}\">-->\n                         <!--</div>-->\n                    <!--</div>-->\n\n                    <!--</div>-->\n                  <!--</li>-->\n                  <!--</ul>-->\n\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"pl-3\">-->\n                <!--<div class=\"mt-4\">-->\n                <!--<label class=\"label\">Associated Groups</label>-->\n\n                <!--</div>-->\n                <!--<div class=\"\">-->\n                  <!--<ul class=\"list-group user-group-list\">-->\n                  <!--<li class=\"list-group-item pl-5 align-middle\"  *ngFor=\"let group of product_details.associated_groups; let i = index\">-->\n                    <!--<div class=\"d-flex\">-->\n                      <!--<span class=\"\" style=\"color: green\">-->\n\n                    <!--<i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>-->\n                      <!--</span>-->\n\n                    <!--<div class=\"col\">-->\n                      <!--<label class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{group.group_name | titlecase }}</label>-->\n                      <!--<label class=\"col\" style=\"margin-top:0px!important;font-size: 10px;\">Members {{group.members.length}}</label>-->\n                    <!--</div>-->\n\n                    <!--</div>-->\n                  <!--</li>-->\n                  <!--</ul>-->\n\n                <!--</div>-->\n              <!--</div>-->\n\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/groups.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/groups.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n <app-sidebar></app-sidebar>\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center \" style=\"background-color: #f1f1f1;display: table-cell;vertical-align: middle;\" valign=\"middle\">\n      <div class=\"row d-flex mt-1\">\n      <div class=\"col-md-3 mt-2\" >\n\n        <h5>GROUPS</h5>\n        <div class=\"  align-content-center\">\n          <div class=\"\">\n            <div class=\"list  group-list\" style=\"list-style: none; font-size: 20px;width: 100%!important;\">\n              <div class=\"row ml-2\" (click)=\"onSelectedGroup(group.group_name)\"  style=\"color:gray;list-style: none; font-size: 20px;width: 100%!important;\" *ngFor=\"let group of groups\">\n                <div  class=\"col-md-12 \" >\n                  <i style=\"font-size: 14px!important; \" class=\"fa fa-circle-o mr-2\" aria-hidden=\"true\"></i>\n                  <label class=\"label ml-1\"><strong>{{group.group_name | titlecase}}</strong></label>\n\n\n                </div>\n                <label class=\"member-label ml-5\" style=\"font-size: 14px!important;\">Members : {{group.members.length}}</label>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"ml-3\" style=\"\" align=\"center\">\n            <button class=\"btn btn-danger align-center mt-5\" (click)=\"addNewGroup()\">NEW GROUP</button>\n<!--            <a  class=\"pull-right align-self-center\">VIEW EMPLOYEES</a >-->\n\n          </div>\n        </div>\n\n\n        </div>\n      <div class=\"col-md-9 pt-5\"  style=\"margin-top:-20px;background-color: white;\">\n\n        <div class=\"d-flex justify-content-between\">\n          <div><i class=\"fa fa-search mr-2\"></i><input type=\"text\" id=\"search-box\" placeholder=\"Search Here\"></div>\n          <div class=\"\">\n            <a (click)=\"deleteGroup()\"><i class=\"fa fa-trash\"></i></a>\n            <i class=\"fa fa-edit ml-2\"></i></div>\n        </div>\n        <div class=\"\">\n          <div class=\"p-3\" style=\"background-color: #404040; color: white; border-top-left-radius: 5px;border-top-right-radius: 5px;\">\n            <h2>{{selected_group.group_name | titlecase}} Group</h2>\n            <h6 style=\" color:darkgray;\">Created on 04/05/1990</h6>\n          </div>\n          <div class=\"mt-3 pl-4\" style=\"background-color:  #404040; color: white;\">\n            Members of Group\n          </div>\n\n          <div class=\"member-container\" style=\"max-height: 60vh;\">\n            <ul class=\"list-group custom-scroll-2\" style=\"overflow-y: scroll;height:58vh;\">\n              <li class=\"list-group-item mt-2\"  *ngFor=\"let member of selected_group.members\">\n                <div class=\"ml-2\">\n                  <img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{member.profile_picture}}\" height=\"40px\" width=\"40px\">\n                  <label class=\"ml-3\">{{member.first_name | titlecase}}  {{member.last_name | titlecase}}</label>\n                </div>\n                <label class=\"ml-5 pl-3\" style=\"font-size: 12px!important;color: darkgray;\">No. of Groups : {{member.groups_count}}</label>\n\n              </li>\n            </ul>\n          </div>\n\n        </div>\n\n        </div>\n         <!-- Modal -->\n<!--                      <div class=\"modal fade modal-fullscreen\" id=\"create-group-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">-->\n<!--                        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">-->\n<!--                          <div class=\"modal-content\">-->\n<!--                            <div class=\"modal-header\">-->\n<!--                              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Create New Group</h5>-->\n<!--                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">-->\n<!--                                <span aria-hidden=\"true\">&times;</span>-->\n<!--                              </button>-->\n<!--                            </div>-->\n<!--                            <div class=\"modal-body\">-->\n<!--                              <form #NewGroupForm=\"ngForm\">-->\n<!--                              <div class=\"from-group\">-->\n<!--                                <label for=\"new-group-name\">Group Name</label>-->\n<!--                                 <input ngModel type=\"text\" name=\"new-group-name\" class=\"checkbox ml-2\" id=\"new-group-name\" >-->\n<!--                              </div>-->\n<!--                              </form>-->\n\n<!--                              <div>-->\n<!--                                <button class=\"btn btn-danger\"  data-toggle=\"modal\" data-target=\"#innermodel\" >Add Members</button>-->\n<!--                                  &lt;!&ndash; Modal &ndash;&gt;-->\n<!--                                  <div class=\"modal fade innermodel\" id=\"innermodel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">-->\n<!--                                    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">-->\n<!--                                      <div class=\"modal-content\">-->\n<!--                                        <div class=\"modal-header\">-->\n<!--                                          <h5 class=\"modal-title\" id=\"innermembersmodel\">Modal title</h5>-->\n<!--                                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">-->\n<!--                                            <span aria-hidden=\"true\">&times;</span>-->\n<!--                                          </button>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"modal-body\">-->\n<!--                                          <div id=\"myDropdown\" class=\"dropdown-content\">-->\n<!--                                           <input type=\"text\" placeholder=\"Search..\" id=\"myInput\" onkeyup=\"filterFunction()\">-->\n<!--<a *ngFor=\"let user of allusers\" ><input class=\"checkbox\" type=\"checkbox\"  name=\"agreement\"><img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{user.profile_picture}}\" height=\"30px\" width=\"30px\"> {{user.first_name}} {{user.last_name}}</a>-->\n<!--                                        </div>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"modal-footer\">-->\n<!--                                          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"innermodel\">Close</button>-->\n<!--                                          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"innermodel\">Save changes</button>-->\n<!--                                        </div>-->\n<!--                                      </div>-->\n<!--                                    </div>-->\n<!--                                  </div>-->\n<!--                              </div>-->\n\n<!--                            </div>-->\n<!--                            <div class=\"modal-footer\">-->\n<!--                              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>-->\n<!--                              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addNewGroup(NewGroupForm.value)\" data-dismiss=\"modal\">Create</button>-->\n<!--                            </div>-->\n<!--                          </div>-->\n<!--                        </div>-->\n<!--                      </div>-->\n<!--                    </div>-->\n\n      <!--<div style=\"margin-top:0;box-shadow: 2px 2px 10px 1px #e2e2e2;\">-->\n        <!--<div class=\"row d-flex  align-content-center flex-wrap\">-->\n        <!--<div class=\"col\" >-->\n\n         <!--<div class=\"align-self-center ml-4 m-1 mt-0 mr-4\">-->\n           <!--<div class=\"row\"style=\"\">-->\n             <!--<div class=\"col-sm-12 col-md-12 col-lg-3 m-2 pt-1\" style=\"margin-top:0!important;margin-right:0!important;margin-left:0!important;padding-right:0!important;padding-left:0!important;\">-->\n                <!--<div class=\"\" style=\"width:100%;\">-->\n                  <!--<img class=\" align-self-center\" style=\"width:100%!important; height:200px!important; border-radius: 50%\" src=\"{{employee.profile_picture}}\" >-->\n\n                <!--</div>-->\n              <!--<div  align=\"center\">-->\n               <!--<div class=\"\">-->\n                 <!--<div class=\"\">-->\n                  <!--<label class=\"\"><strong>{{employee.first_name}} {{employee.last_name}}</strong></label>-->\n                 <!--<div class=\"\">-->\n                  <!--<label class=\"ml-2\">Employee</label>-->\n                <!--</div></div>-->\n                <!--</div>-->\n                <!--<div class=\"\">-->\n                  <!--<label class=\"\">Email </label>-->\n                  <!--<label class=\"ml-2\">{{employee.email}}</label>-->\n                <!--</div>-->\n                <!--<div class=\"\" >-->\n                  <!--<label class=\" \">Employee Id </label>-->\n                  <!--<label class=\"ml-2\">{{employee.emp_id}}</label>-->\n                <!--</div>-->\n              <!--</div>-->\n\n\n\n             <!--</div>-->\n\n\n\n\n             <!--<div class=\"col-md-12 col-lg-9 col-sm-12 \" style=\"\">-->\n              <!--<div class=\"pl-3\" style=\"border-left:1px solid #8080803b;\">-->\n                <!--<div class=\"d-flex justify-content-between mt-4 mb-2\">-->\n                  <!--<label class=\"label \">Personal Information</label>-->\n                <!--<a class=\"pr-4\" href=\"\" style=\"right\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a>-->\n                <!--</div>-->\n\n                <!--<div class=\"d-flex\">-->\n                  <!--<div class=\"form-group mr-5\">-->\n                    <!--<label for=\"product-type\">First Name</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"product-type\"  value=\"{{employee.first_name | titlecase}}\">-->\n                  <!--</div>-->\n                  <!--<div class=\"form-group\">-->\n                    <!--<label for=\"product-description\">Last Name</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"product-description\" value=\"{{employee.last_name}}\">-->\n                  <!--</div>-->\n                  <!--</div>-->\n                <!--<div class=\"d-flex\">-->\n                  <!--<div class=\"form-group mr-5\">-->\n                    <!--<label for=\"email\">Email Address</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"email\"  value=\"{{employee.email }}\">-->\n                  <!--</div>-->\n                  <!--<div class=\"form-group\">-->\n                    <!--<label for=\"phone\">Phone Number</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"phone\" value=\"{{employee.phone}}\">-->\n                  <!--</div>-->\n                  <!--</div>-->\n                <!--<div class=\"d-flex\">-->\n                  <!--<div class=\"form-group mr-5\">-->\n                    <!--<label for=\"emp-id\">Employee Id</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"emp-id\"  value=\"{{employee.emp_id }}\">-->\n                  <!--</div>-->\n                  <!--<div class=\"form-group\">-->\n                    <!--<label for=\"emp-desig\">Employee Designation</label>-->\n                    <!--<input type=\"text\" class=\"form-control\" id=\"emp-desig\" value=\"{{employee.emp_desig}}\">-->\n                  <!--</div>-->\n                  <!--</div>-->\n\n\n              <!--</div>-->\n\n             <!--</div>-->\n           <!--</div>-->\n         <!--</div>-->\n\n\n        <!--</div>-->\n\n      <!--</div>-->\n        <!--<div class=\"row d-flex  align-content-center flex-wrap\">-->\n          <!--<div class=\"col \">-->\n          <!--<div class=\"pl-3\" style=\"background-color: #dddddd;\">-->\n                <!--<div class=\"mt-4\">-->\n                <!--<label class=\"label mb-2\">Credentials</label>-->\n\n                <!--</div>-->\n                <!--<div class=\"pl-3\" style=\"background-color: #dddddd;\">-->\n                  <!--<ul class=\"list-group user-group-list\" style=\"background-color: #dddddd;\">-->\n                  <!--<li style=\"padding-left:0px!important;background-color: #dddddd;\" class=\"list-group-item align-middle\"  *ngFor=\"let credential of credentials; let i = index\">-->\n                    <!--<div class=\"\">-->\n                      <!--<span class=\"d-flex justify-content-between\" style=\"color: green\">-->\n                        <!--<div class=\"d-flex\">-->\n                          <!--<img height=\"25px\" width=\"25px\" src=\"{{credential.icon }}\">-->\n                    <!--<label for=\"username\" class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{credential.devops_name | titlecase }}</label>-->\n                        <!--</div>-->\n                      <!--<a class=\"pr-4\" href=\"\" style=\"right\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a>-->\n                      <!--</span>-->\n\n                    <!--<div class=\"d-flex mt-2 justify-content-start\">-->\n                      <!--<div class=\"form-group mr-5 mt-2\">-->\n                      <!--<label for=\"username\" class=\"\" style=\"margin-bottom:0px!important;font-size: 15px;\">Username</label>-->\n                      <!--<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" value=\"{{credential.username }}\">-->\n                        <!--</div>-->\n                      <!--<div class=\"form-group mr-5 ml-5\">-->\n                      <!--<label  class=\"\" style=\"margin-top:0px!important;font-size: 15px;\">Password</label>-->\n                      <!--<input type=\"password\" class=\"form-control\" id=\"password\" name=\"username\" value=\"{{credential.password }}\">-->\n                         <!--</div>-->\n                    <!--</div>-->\n\n                    <!--</div>-->\n                  <!--</li>-->\n                  <!--</ul>-->\n\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"pl-3\">-->\n                <!--<div class=\"mt-4\">-->\n                <!--<label class=\"label\">Associated Groups</label>-->\n\n                <!--</div>-->\n                <!--<div class=\"\">-->\n                  <!--<ul class=\"list-group user-group-list\">-->\n                  <!--<li class=\"list-group-item pl-5 align-middle\"  *ngFor=\"let group of product_details.associated_groups; let i = index\">-->\n                    <!--<div class=\"d-flex\">-->\n                      <!--<span class=\"\" style=\"color: green\">-->\n\n                    <!--<i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>-->\n                      <!--</span>-->\n\n                    <!--<div class=\"col\">-->\n                      <!--<label class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{group.group_name | titlecase }}</label>-->\n                      <!--<label class=\"col\" style=\"margin-top:0px!important;font-size: 10px;\">Members {{group.members.length}}</label>-->\n                    <!--</div>-->\n\n                    <!--</div>-->\n                  <!--</li>-->\n                  <!--</ul>-->\n\n                <!--</div>-->\n              <!--</div>-->\n\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n <app-sidebar></app-sidebar>\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center m-2\" style=\" display: table-cell;vertical-align: middle;\" valign=\"middle\">\n      <div class=\"d-flex justify-content-between mt-1\">\n        <h5 style=\"color: #d50000;\">Profile Details</h5>\n        <a data-toggle=\"modal\" data-target=\"#change-password-modal\" style=\"color: #d50000;\">CHANGE PASSWORD</a>\n  <!-- Modal -->\n        <div class=\"modal fade\" id=\"change-password-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n                        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Create New Group</h5>\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                              </button>\n                            </div>\n                            <div class=\"modal-body\">\n                              <div class=\" form-group p-5\">\n                                <input type=\"password\" class=\"form-control ml-2\" id=\"password1\" placeholder=\"Enter Password\">\n\n                                <input type=\"password\" class=\"form-control ml-2\" id=\"password2\" placeholder=\"Confirm Password\">\n                                </div>\n\n                            </div>\n                            <div class=\"modal-footer\">\n                              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Change</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n      </div>\n\n      <div class=\"custom-scroll-2\" style=\"overflow-y:scroll;overflow-x:wrap;height:80vh;margin-top:0;box-shadow: 2px 2px 10px 1px #e2e2e2;\">\n        <div class=\"row d-flex  align-content-center flex-wrap\" style=\"width:100%;\">\n        <div class=\"col\" >\n\n         <div class=\"align-self-center ml-4 m-1 mt-0 mr-4\">\n           <div class=\"row\"style=\"\">\n             <div class=\"col-sm-12 col-md-4 col-lg-4 m-2 pt-1\" style=\"margin-top:0!important;margin-right:0!important;margin-left:0!important;padding-right:0!important;padding-left:0!important;\">\n                <div class=\"d-flex justify-content-center\" style=\"width:100%;\">\n                  <img class=\" align-self-center\" style=\"width:200px!important; height:200px!important; border-radius: 50%\" src=\"{{employee.profile_picture}}\" >\n\n                </div>\n              <div class=\"\"  align=\"center\">\n               <div class=\"\">\n                 <div class=\"\">\n                  <label class=\"\"><strong>{{employee.first_name}} {{employee.last_name}}</strong></label>\n                 <div class=\"\">\n                  <label class=\"ml-2\" style=\"color: #d50000;\">Employee</label>\n                </div></div>\n                </div>\n                <div class=\"\">\n                  <label class=\"\">Email </label>\n                  <label class=\"ml-2\">{{employee.email}}</label>\n                </div>\n                <div class=\"\" >\n                  <label class=\" \">Employee Id </label>\n                  <label class=\"ml-2\">{{employee.emp_id}}</label>\n                </div>\n              </div>\n\n             </div>\n\n\n             <div class=\"col-md-8 col-lg-8 col-sm-12 \" style=\"\">\n               <form #editProfileForm=\"ngForm\">\n              <div class=\"pl-3\" style=\"border-left:1px solid #8080803b;\">\n                <div class=\"d-flex justify-content-between mt-4 mb-2\">\n                  <label class=\"label \" style=\"color: #d50000;\">Personal Information</label>\n                <a class=\"pr-4\" *ngIf=\"!isEditProfileDetails\" (click) = toggleEditProfile() style=\"right\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a>\n                  <div  *ngIf=\"isEditProfileDetails\" class=\" my-save-conf my-save-conf-collapse\" id=\"edit-conf-save\" >\n                          <button (click) = toggleEditProfile()  type=\"button\" class=\"ml-2 btn\"   name=\"cancel\" >CANCEL</button>\n                        <input class=\"btn btn-danger ml-2\" (click)=\"editProfileSubmit(editProfileForm.value)\"  type=\"submit\" name=\"saveurl\" value=\"SAVE\">\n                       </div>\n                </div>\n\n                <div class=\"d-flex\">\n                  <div class=\"form-group mr-5\">\n                    <label for=\"first_name\">First Name</label>\n                    <input [(ngModel)]=\"employee.first_name\" name=\"first_name\" [disabled]=\"!isEditProfileDetails\" type=\"text\" class=\"form-control\" id=\"first_name\" >\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"last_name\">Last Name</label>\n                    <input [(ngModel)]=\"employee.last_name\" name=\"last_name\" [disabled]=\"!isEditProfileDetails\" type=\"text\" class=\"form-control\" id=\"last_name\" value=\"{{employee.last_name}}\">\n                  </div>\n                  </div>\n                <div class=\"d-flex\">\n                  <div class=\"form-group mr-5\">\n                    <label for=\"email\">Email Address</label>\n                    <input [(ngModel)]=\"employee.email\" name=\"email\" disabled type=\"text\" class=\"form-control\" id=\"email\"  value=\"{{employee.email }}\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"phone\">Phone Number</label>\n                    <input [(ngModel)]=\"employee.phone\" name=\"phone\" [disabled]=\"!isEditProfileDetails\" type=\"text\" class=\"form-control\" id=\"phone\" value=\"{{employee.phone}}\">\n                  </div>\n                  </div>\n                <div class=\"d-flex\">\n                  <div class=\"form-group mr-5\">\n                    <label for=\"emp-id\">Employee Id</label>\n                    <input [(ngModel)]=\"employee.emp_id\" name=\"emp_id\" type=\"text\" class=\"form-control\" id=\"emp-id\"  value=\"{{employee.emp_id }}\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"emp-desig\">Employee Designation</label>\n                    <input [(ngModel)]=\"employee.emp_desig\" name=\"emp_desig\" type=\"text\" class=\"form-control\" id=\"emp-desig\" value=\"{{employee.emp_desig}}\">\n                  </div>\n                  </div>\n\n\n              </div>\n              </form>\n             </div>\n           </div>\n         </div>\n\n\n        </div>\n\n      </div>\n        <div class=\"row d-flex  align-content-center flex-wrap\" style=\"width:100%;\">\n          <div class=\"col \">\n          <div class=\"pl-3\" style=\"background-color: #dddddd;\">\n                <div class=\"mt-4\">\n                <label class=\"label mb-2\" style=\"color: #d50000;\">Credentials</label>\n\n                </div>\n                <div class=\"pl-3\" style=\"background-color: #dddddd;\">\n\n\n                  <ul class=\"list-group user-group-list\" style=\"background-color: #dddddd;\">\n\n                  <li style=\"padding-left:0px!important;background-color: #dddddd;\" class=\"list-group-item align-middle\"  *ngFor=\"let credential of credentials; let i = index\">\n                    <form [attr.id]=\"'form-'+i\" name=\"'form-'+i\">\n                    <div class=\"\">\n                      <span class=\"d-flex justify-content-between\" style=\"color: green\">\n                        <div class=\"d-flex\">\n                          <img height=\"25px\" width=\"25px\" src=\"../assets/{{credential.app_name }}.png\">\n                    <label for=\"username-{{i}}\" class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{credential.app_name | titlecase }}</label>\n                        </div>\n                      <a *ngIf=\"!isEditCred\" (click) = \"toggleEditCred()\" class=\"pr-4\"  style=\"\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a>\n                        <div  *ngIf=\"isEditCred\" class=\" my-save-conf my-save-conf-collapse\" >\n                          <button (click) = \"toggleEditCred()\"  type=\"button\" class=\"ml-2 btn\"   name=\"cancel\" >CANCEL</button>\n                        <input class=\"btn btn-danger ml-2\" (click)=\"credSubmit(credential)\"  type=\"submit\" name=\"saveurl\" value=\"SAVE\">\n                       </div>\n                      </span>\n\n                    <div class=\"d-flex mt-2 justify-content-start\">\n                      <div class=\"form-group mr-5 mt-2\">\n                      <label for=\"username-{{i}}\" class=\"\" style=\"margin-bottom:0px!important;font-size: 15px;\">Username</label>\n                        <input hidden type=\"text\" [(ngModel)]=\"credential.app_name\" name=\"devopsName\">\n                      <input [disabled]=\"!isEditCred\"  type=\"text\" class=\"form-control\" id=\"username-{{i}}\" name=\"username-{{i}}\" [(ngModel)]=\"credential.username\">\n                        </div>\n                      <div class=\"form-group mr-5 ml-5\">\n                      <label  class=\"\" style=\"margin-top:0px!important;font-size: 15px;\">Password</label>\n                      <input [disabled]=\"!isEditCred\" type=\"password\" class=\"form-control\" id=\"password-{{i}}\" name=\"password-{{i}}\" [(ngModel)]=\"credential.password\" >\n                         </div>\n                    </div>\n\n                    </div>\n                    </form>\n                  </li>\n                  </ul>\n\n                </div>\n              </div>\n              <div *ngIf=\"!isAdmin\" class=\"pl-3\">\n                <div class=\"mt-4\">\n                <label class=\"label\">Associated Groups</label>\n\n                </div>\n                <div class=\"\">\n                  <ul class=\"list-group user-group-list\">\n                  <li class=\"list-group-item pl-5 align-middle\"  *ngFor=\"let group of user_groups; let i = index\">\n                    <div class=\"d-flex\">\n                      <span class=\"\" style=\"color: green\">\n\n                    <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>\n                      </span>\n\n                    <div class=\"col\">\n                      <label class=\"col\" style=\"margin-bottom:0px!important;font-size: 15px;\">{{group | titlecase }}</label>\n                      <label class=\"col\" style=\"margin-top:0px!important;font-size: 10px;\">Members {{group}}</label>\n                    </div>\n\n                    </div>\n                  </li>\n                  </ul>\n\n                </div>\n              </div>\n\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0\">\n  <div class=\"row m-0\" id=\"body-row\">\n\n\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center\" style=\"display: table-cell;vertical-align: middle;\" valign=\"middle\">\n\n      <div class=\"row d-flex  align-content-center flex-wrap m-5\">\n        <div class=\"offset-md-4 offset-lg-4 col-sm-12 col-md-4 col-lg-4\">\n          <div id=\"login-container\" class=\"align-self-center p-4\">\n\n\n              <div>\n                <h4>Sign In</h4>\n                <p>Welcome back to Mirafra DevOps,</p>\n                <p>Please login to continue your works!</p>\n\n              </div>\n              <form class=\"pr-2 pl-2\" #LofinForm=\"ngForm\" (ngSubmit)=\"login(LofinForm.value)\">\n\n                  <div class=\" form-group\">\n                    <label for=\"email\"><b>Email Address</b></label>\n                    <input ngModel type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" id=\"email\" class=\"form-control no-border\" type=\"text\" placeholder=\"Enter Email\" name=\"email\" required>\n\n                    <label for=\"password\"><b>Password</b></label>\n                    <input ngModel id=\"password\" type=\"password\"  class=\"form-control\" type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n\n\n\n\n                  <div class=\"align-content-center\" align=\"center\">\n                    <p class=\"psw mt-1\">Forgot <a [routerLink]=\"['/forgotPassword']\"  href=\"javascript:void(0)\">password?</a></p>\n                    <input class=\"btn btn-danger\" [disabled]=\"!LofinForm.form.valid\" type=\"submit\" value=\"Sign In\">\n                    <div>New User <a [routerLink]=\"['/signup']\" >Sign Up</a></div>\n\n\n                  </div>\n\n                  </div>\n\n\n              </form>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light sticky-top\" style=\"background-color: #e7f4fa;\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"http://www.mirafra.com\"><img src=\"https://mirafra.com/wp-content/uploads/2016/05/mira_logo.png\" width=\"100\" height=\"35\">Mirafra DevOps</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n    </ul>\n\n    <div *ngIf=\"logged_in\" class=\"profile-header dropdown mr-2 form-inline pull-right  my-3 my-lg-0 align-middle \" >\n\n      <img data-toggle=\"dropdown\" src=\"{{user_data.profile_picture}}\" style=\"border:1px solid gray;border-radius: 50%;\" width=\"30px\" height=\"30px\" class=\"rounded-circle\" alt=\"Cinque Terre\"><p class=\"align-middle ml-2  mr-1\" data-toggle=\"dropdown\" style=\"margin-bottom:-2%;\"><strong>{{user_data.first_name | titlecase }}</strong></p>\n    <div class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" [routerLink]=\"['/home']\">Profile</a>\n      <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n    </div>\n    </div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-details/product-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n <app-sidebar></app-sidebar>\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center\" style=\"display: table-cell;vertical-align: middle;\" valign=\"middle\">\n\n      <div class=\"row d-flex  align-content-center flex-wrap\" >\n        <div class=\"col\" >\n          <div class=\"d-flex justify-content-between ml-5 mt-1\" >\n\n\n            <h5><a class=\"pr-4\" [routerLink]=\"['/product']\" style=\"right\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>Mirafra Product</h5>\n            <a class=\"pr-4\" href=\"\" style=\"right\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a>\n          </div>\n\n         <div class=\"align-self-center ml-4 m-1 mt-0 mr-4\">\n           <div class=\"row custom-scroll-2\"style=\"height:80vh;box-shadow: 2px 2px 10px 1px #e2e2e2;overflow-y:scroll;\">\n             <div class=\"col-sm-12 col-md-12 col-lg-3 m-2 pt-1\" style=\"border-left:1px solid #8080803b;margin-top:0!important;margin-right:0!important;margin-left:0!important;padding-right:0!important;padding-left:0!important;\">\n                <div class=\"d-flex justify-content-center\" style=\"width:100%;\">\n                  <img class=\" align-self-center\" style=\"width:200px!important; height:200px!important; border-radius: 50%\" src=\"http://192.168.1.200:83/{{product_details.image}}\" >\n\n                </div>\n              <div class=\" align-self-center\" style=\"background-color:#8080803b;\">\n             <div class=\"m-2 \">\n                <div class=\"m-2\"><strong>{{product_details.product_name | titlecase}}</strong></div>\n\n              </div>\n              <div class=\"m-2 \">\n                <div class=\"m-2\">{{product_details.product_type | titlecase}}</div>\n              </div>\n              </div>\n\n              <div  class=\" p-2\" >\n                <label class=\" \">Description</label>\n                <div class=\"\">{{product_details.description}}</div>\n              </div>\n\n             </div>\n\n\n\n\n             <div class=\"col-md-12 col-lg-9 col-sm-12 border-left\" style=\"border-left:1px solid #8080803b;height:80vh;\">\n              <div class=\"mt-4\" >\n                <label class=\"label\" style=\"color: #d50000;\">Branch Selection</label>\n                <div class=\"btn-group btn-group-toggle ml-0 mr-2 mt-2 mb-2\" style=\"display:block!important;\" >\n                  <label class=\" mr-4\">\n                    <input ngModel name=\"branch_category\" class=\"\" (change)=\"branchTypeChange($event.target.value)\" value=\"Master\" type=\"radio\" id=\"option1\" autocomplete=\"off\" [checked]=\"product_details.branch_category==='Master'\"> Master\n                  </label>\n                  <label class=\"\">\n                    <input ngModel name=\"branch_category\" class=\"\" (change)=\"branchTypeChange($event.target.value)\" value=\"Child\" type=\"radio\"  id=\"option2\" autocomplete=\"off\" [checked]=\"product_details.branch_category==='Child'\"> Child\n                  </label>\n                </div>\n                <label class=\"label mt-4\" style=\"color: #d50000;\">Product Information</label>\n                  <div class=\"form-group\">\n                    <label for=\"product-type\">Product Type</label>\n                    <input type=\"text\" class=\"form-control\" id=\"product-type\"  value=\"{{product_details.product_type | titlecase}}\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"product-description\">Product Description</label>\n                    <input type=\"text\" class=\"form-control\" id=\"product-description\" value=\"{{product_details.description}}\">\n                  </div>\n                  <label class=\"label mt-4\" style=\"color: #d50000;\">Branch Configs</label>\n                  <div class=\"form-group\">\n                    <label for=\"ap-path\">AP Path</label>\n                    <input type=\"text\" class=\"form-control\" id=\"ap-path\"  value=\"{{product_details.ap_path }}\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"cp-path\">CP Path</label>\n                    <input type=\"text\" class=\"form-control\" id=\"cp-path\" value=\"{{product_details.cp_path}}\">\n                  </div>\n              </div>\n              <div class=\"\" >\n                <div class=\"mt-4\">\n                  <label class=\"label\" style=\"color: #d50000;\">Associated Groups (<a *ngIf=\"product_details.groups?.length >0\" >{{product_details.groups.length}}</a>)</label>\n                <div class=\"pull-right\">\n                <a class=\"\" href=\"\" style=\"color: #cbcbcb;\">REMOVE GROUP</a>\n                <a class=\" ml-5\" href=\"\" style=\"color: #d50000;\">ADD GROUP</a>\n                </div>\n                </div>\n                <div class=\"\" *ngIf=\"product_details.groups?.length >0\">\n                  <ul class=\"list-group user-group-list\">\n                  <li class=\"list-group-item pl-5 align-middle\" *ngFor=\"let group of groups_with_members; let i = index\">\n                    <div class=\"d-flex\">\n                      <input class=\"form-check-input pl-5 align-self-center\" type=\"checkbox\" name=\"options\" id=\"option3\" >\n\n                    <div class=\"col pl-5\" *ngIf=\"product_details.groups?.length >0\">\n                      <label class=\"col\" style=\"font-size: 15px;\">{{group.group_name | titlecase }}</label>\n                      <label class=\"col\" style=\"margin-top:-20px!important;font-size: 10px;\">Members {{group.ass_emps.length}}</label>\n                    </div>\n                    <a  class=\"pull-right align-self-center\"data-toggle=\"modal\" [attr.data-target]=\"'#ggg-'+ i\">VIEW EMPLOYEES</a >\n                    <!-- Modal -->\n                      <div class=\"modal fade\" id=\"ggg-{{i}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n                        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{ group.group_name | titlecase }} Members</h5>\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                              </button>\n                            </div>\n                            <div class=\"modal-body\">\n                              <ul class=\"list-group\">\n                                <li *ngFor=\"let emp of group.ass_emps\" class=\"list-group-item\">\n                                  <label><input type=\"checkbox\" class=\"checkbox ml-2\" ></label>\n                                  {{emp.first_name}}\n                                  {{emp.last_name}}\n                                </li>\n                              </ul>\n                            </div>\n                            <div class=\"modal-footer\">\n                              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </li>\n                  </ul>\n\n                </div>\n              </div>\n             </div>\n           </div>\n         </div>\n          <!-- <div class=\"align-self-center ml-5 m-1\">\n            <div class=\"dropdown\">\n              <div class=\" d-flex justify-content-between\">\n                <div class=\"d-inline-flex\">\n                <h5>Filters</h5>\n                <button onclick=\"myFunction()\" class=\"form-control dropbtn\">Product Type <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                </button>\n                </div>\n                <div class=\"pr-4\">\n                 <a href=\"\">RESET</a>\n                 </div>\n              </div>\n\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <input type=\"text\" placeholder=\"Search..\" id=\"myInput\" onkeyup=\"filterFunction()\">\n                <a *ngFor=\"let product of products\" href=\"{{product.product_id}}\"><input class=\"checkbox\" type=\"checkbox\"  name=\"agreement\"><img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{product.productprofile_picture}}\" height=\"30px\" width=\"30px\"> {{product.product_name}}</a>\n\n              </div>\n            </div>\n\n          </div> -->\n          <!-- <div class=\"align-self-center ml-5 m-3\">\n            <table class=\"table\">\n              <tr>\n                <th scope=\"col\"></th>\n                <th scope=\"col\"></th>\n                <th scope=\"col\">Product Type</th>\n                <th scope=\"col\">Product Id</th>\n                <th scope=\"col\">Product Name</th>\n                <th scope=\"col\">Description</th>\n                <th scope=\"col\">No. of Groups</th>\n                <th scope=\"col\">Members</th>\n              </tr>\n              <tr *ngFor=\"let product of products | paginate: { itemsPerPage: 8, currentPage: p }\">\n                <td><input class=\"checkbox\" type=\"checkbox\"  name=\"agreement\"></td>\n                <td><img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{product.product_picture}}\" height=\"40px\" width=\"40px\"></td>\n\n                <td>{{product.product_id}}</td>\n                <td>{{product.product_type}}</td>\n                <td>{{product.product_name}}</td>\n                <td>{{product.description}}</td>\n                <td>{{product.groups_count}}</td>\n                <td>\n                  <ul class=\"list-inline\" style=\"width:80px; overflow-x:hidden;display:flex;\">\n                    <li class=\"\" style=\" background-color:gray;align-text:center;list-style:none;width:40px;height:40px;overflow-hidden;border:1px solid black;border-radius: 50%; z-index:\" *ngFor=\"let member of product.members\"><span style=\"color:white\">{{ member.first_name | slice:0:1 | titlecase }}</span>\n\n                    </li>\n                    +more\n                  </ul>\n\n\n                </td>\n\n\n              </tr>\n            </table>\n\n          </div> -->\n\n        </div>\n      </div>\n      <!-- <pagination-controls class=\"product-pagination\" (pageChange)=\"p = $event\"></pagination-controls> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n <app-sidebar></app-sidebar>\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center\" style=\"display: table-cell;vertical-align: middle; height:90vh;\" valign=\"middle\">\n\n      <div class=\"row d-flex  align-content-center flex-wrap\" style=\"height:90vh;\">\n        <div class=\"col\" style=\"height:90vh;\">\n          <div class=\"d-flex justify-content-between ml-5 mt-1\" >\n            <h3>Product</h3>\n            <div>\n               <a class=\"\" href=\"\" style=\"right\" style=\"color: #d50000;\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n            <a class=\"mr-4 ml-2\" [routerLink]=\"['/add_product']\" style=\"right\" style=\"color: #d50000;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n            </div>\n\n          </div>\n\n\n          <div class=\"align-self-center ml-5 m-1\">\n            <div class=\"dropdown\">\n              <div class=\" d-flex justify-content-between\">\n                <div class=\"d-inline-flex\">\n                <h5>Filters</h5>\n                <button onclick=\"myFunction()\" class=\"form-control dropbtn\">Product Type <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                </button>\n                </div>\n                <div class=\"pr-4\">\n                 <a href=\"\" style=\"color: #d50000;\">RESET</a>\n                 </div>\n              </div>\n\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <input type=\"text\" placeholder=\"Search..\" id=\"myInput\" onkeyup=\"filterFunction()\">\n                <a *ngFor=\"let product of products\" [routerLink]=\"['/product_details']\" [queryParams]=\"{ product_id: product.product_id}\"><input class=\"checkbox\" type=\"checkbox\"  name=\"agreement\"><img style=\"border:1px solid gray;border-radius: 50%;\" src=\"http://192.168.1.200:83/{{product.image}}\" height=\"30px\" width=\"30px\"> {{product.product_type}}</a>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"align-self-center ml-5 m-3 custom-scroll-2\" style=\"overflow-y:scroll;height:70vh;\">\n            <table class=\"table\" >\n              <tr>\n                <th scope=\"col\"></th>\n                <th scope=\"col\"></th>\n                <th scope=\"col\">Product Type</th>\n                <th scope=\"col\">Product Id</th>\n                <th scope=\"col\">Product Name</th>\n                <th scope=\"col\">Description</th>\n                <th scope=\"col\">No. of Groups</th>\n                <th scope=\"col\">Members</th>\n              </tr>\n              <tr class=\"userlist-row\" [routerLink]=\"['/product_details']\" [queryParams]=\"{ product_id: product.product_id}\" *ngFor=\"let product of products | paginate: { itemsPerPage: 8, currentPage: p }\">\n\n                <td><input class=\"checkbox\" type=\"checkbox\"  name=\"agreement\"></td>\n                <td><img style=\"border:1px solid gray;border-radius: 50%;\" src=\"http://192.168.1.200:83/{{product.image}}\" height=\"40px\" width=\"40px\"></td>\n\n                <td>{{product.product_type}}</td>\n                <td>{{product.product_id}}</td>\n                <td>{{product.product_name}}</td>\n                <td>{{product.description}}</td>\n                <td>{{product.groups.length}}</td>\n                <td>\n                  <ul class=\"list-inline\" style=\"width:80px; overflow-x:hidden;display:flex;\">\n                    <li class=\"\" style=\" background-color:gray;align-text:center;list-style:none;width:40px;height:40px;overflow-hidden;border:1px solid black;border-radius: 50%; z-index:\" *ngFor=\"let member of product.members\"><span style=\"color:white\">{{ member.first_name | slice:0:1 | titlecase }}</span>\n\n                    </li>\n                    +more\n                  </ul>\n\n\n                </td>\n\n              </tr>\n            </table>\n\n          </div>\n\n        </div>\n      </div>\n      <pagination-controls class=\"product-pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/setpassword/setpassword.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setpassword/setpassword.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0\">\n  <app-nav></app-nav>\n  <div class=\"row m-0\" id=\"body-row\">\n\n\n\n\n\n    <div id=\"contents\" class=\"col justify-content-center\" style=\"display: table-cell;vertical-align: middle;\" valign=\"middle\">\n\n      <div class=\"row d-flex  align-content-center flex-wrap\">\n        <div class=\"offset-md-3 col-md-6 \">\n          <div id=\"login-container \" class=\"align-self-center m-5\">\n\n\n              <div>\n                <h4>Change Password</h4>\n                <p>Welcome back to Mirafra DevOps,</p>\n                <p>Please Set your password to continue your works!</p>\n\n              </div>\n              <form #ChangePassForm=\"ngForm\" (ngSubmit)=\"setPassword(ChangePassForm.value)\">\n\n                  <div class=\" form-group\">\n                    <label for=\"password1\"><b>Enter Password</b></label>\n                    <input ngModel id=\"password1\" type=\"password\" class=\"form-control no-border\" type=\"text\" placeholder=\"Enter Password\" name=\"password1\" required>\n\n                    <label for=\"password2\"><b>Confirm Password</b></label>\n                    <input ngModel id=\"password2\" type=\"password\"  class=\"form-control\" type=\"password\" placeholder=\"Confirm Password\" name=\"password2\" required>\n\n\n\n\n                  <div class=\"align-content-center\" align=\"center\">\n                    <input class=\"btn btn-danger btn-lg\" type=\"submit\" value=\"Set Password\">\n                    <div>Go To <a [routerLink]=\"['/login']\" >Login</a></div>\n\n\n                  </div>\n\n                  </div>\n\n\n              </form>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAdmin; else sidebarUser\" id=\"sidebar-container-admin\" aria-expanded=\"false\" class=\"sidebar-container d-none d-md-block sidebar-expanded\">\n\n\t<ul class=\"list-group\">\n\n<a [routerLink]=\"['/dashboard']\" aria-expanded=\"false\" class=\"bg-light list-group-item list-group-item-action flex-column align-items-start collapsed\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa-dashboard fa-fw \"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Dashboard</span>\n<span class=\"submenu-icon ml-auto\"></span>\n</div>\n</a>\n\n<a  [routerLink]=\"['/employees']\"  aria-expanded=\"false\" class=\"bg-light list-group-item list-group-item-action flex-column align-items-start collapsed\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa fa-user fa-fw \"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Employees</span>\n<span class=\"submenu-icon ml-auto\"></span>\n</div>\n</a>\n\n<a  [routerLink]=\"['/groups']\" aria-expanded=\"false\" class=\"bg-light list-group-item list-group-item-action flex-column align-items-start collapsed\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa-users fa-fw \"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Groups</span>\n<span class=\"submenu-icon ml-auto\"></span>\n</div>\n</a>\n\n<a  [routerLink]=\"['/product']\"  aria-expanded=\"false\" class=\"bg-light list-group-item list-group-item-action flex-column align-items-start collapsed\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa-mobile fa-fw \"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Products</span>\n<span class=\"submenu-icon ml-auto\"></span>\n</div>\n</a>\n\n<div id=\"submenu1\" class=\"collapse sidebar-submenu\">\n<a href=\"#\" class=\"list-group-item list-group-item-action bg-light text-white\">\n<span class=\"menu-collapsed ml-3\">Charts</span>\n</a>\n<a href=\"#\" class=\"list-group-item list-group-item-action bg-light text-white\">\n<span class=\"menu-collapsed ml-3\">Reports</span>\n</a>\n<a href=\"#\" class=\"list-group-item list-group-item-action bg-light text-white\">\n<span class=\"menu-collapsed ml-3\">Tables</span>\n</a>\n</div>\n<a [routerLink]=\"['/home']\"  aria-expanded=\"false\" class=\"bg-light list-group-item list-group-item-action flex-column align-items-start collapsed\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa-user fa-fw \"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Profile</span>\n<span class=\"submenu-icon ml-auto\"></span>\n</div>\n</a>\n\n<div id=\"submenu2\" class=\"collapse sidebar-submenu\">\n<a href=\"#\" class=\"list-group-item list-group-item-action bg-light text-white\">\n<span class=\"menu-collapsed ml-3\">Settings</span>\n</a>\n<a href=\"#\" class=\"list-group-item list-group-item-action bg-light text-white\">\n<span class=\"menu-collapsed ml-3\">Password</span>\n</a>\n</div>\n<a [routerLink]=\"['/configurations']\" class=\"bg-light list-group-item list-group-item-action\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa-gear fa-fw\"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Configs</span>\n</div>\n</a>\n\n<a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"bg-light list-group-item list-group-item-action\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa-sign-out fa-fw \"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Logout</span>\n</div>\n</a>\n\n<a href=\"javascript:void(0)\" data-toggle=\"sidebar-colapse\" (click)=\"sidebarOn()\" class=\"bg-dark list-group-item list-group-item-action d-flex align-items-center\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span id=\"collapse-icon\" class=\"fa fa-2x  fa-angle-double-left\"></span>\n<span *ngIf=\"sidebarOpened\"  id=\"collapse-text\" class=\"menu-collapsed ml-3\">Collapse</span>\n</div>\n</a>\n\n<!-- <li class=\"list-group-item logo-separator d-flex justify-content-center\">\n<img src=\"https://mirafra.com/wp-content/uploads/2016/05/mira_logo.png\" width=\"100\" height=\"50\">\n</li> -->\n</ul>\n</div>\n<ng-template #sidebarUser>\n<div id=\"\" aria-expanded=\"false\" class=\"sidebar-container d-none d-md-block sidebar-expanded\">\n\n\t<ul class=\"list-group\">\n<!--\n\t\t<li class=\"list-group-item sidebar-separator-title text-muted align-items-center menu-collapsed ml-3 d-flex\">\n\t\t\t<small>MAIN MENU</small>\n</li> -->\n\n\n<a [routerLink]=\"['/']\" aria-expanded=\"false\" class=\"bg-light list-group-item list-group-item-action flex-column align-items-start collapsed\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa-dashboard fa-fw \"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Dashboard</span>\n<span class=\"submenu-icon ml-auto\"></span>\n</div>\n</a>\n\n\n<a  [routerLink]=\"['/product']\"  aria-expanded=\"false\" class=\"bg-light list-group-item list-group-item-action flex-column align-items-start collapsed\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa-mobile fa-fw \"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Products</span>\n<span class=\"submenu-icon ml-auto\"></span>\n</div>\n</a>\n\n<div id=\"submenu4\" class=\"collapse sidebar-submenu\">\n<a href=\"#\" class=\"list-group-item list-group-item-action bg-light text-white\">\n<span class=\"menu-collapsed ml-3\">Charts</span>\n</a>\n<a href=\"#\" class=\"list-group-item list-group-item-action bg-light text-white\">\n<span class=\"menu-collapsed ml-3\">Reports</span>\n</a>\n<a href=\"#\" class=\"list-group-item list-group-item-action bg-light text-white\">\n<span class=\"menu-collapsed ml-3\">Tables</span>\n</a>\n</div>\n<a [routerLink]=\"['/home']\"  aria-expanded=\"false\" class=\"bg-light list-group-item list-group-item-action flex-column align-items-start collapsed\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa-user fa-fw \"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Profile</span>\n<span class=\"submenu-icon ml-auto\"></span>\n</div>\n</a>\n\n<div id=\"submenu3\" class=\"collapse sidebar-submenu\">\n<a href=\"#\" class=\"list-group-item list-group-item-action bg-light text-white\">\n<span class=\"menu-collapsed ml-3\">Settings</span>\n</a>\n<a href=\"#\" class=\"list-group-item list-group-item-action bg-light text-white\">\n<span class=\"menu-collapsed ml-3\">Password</span>\n</a>\n</div>\n<a [routerLink]=\"['/tasks']\" class=\"bg-light list-group-item list-group-item-action\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa-tasks fa-fw \"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Tasks</span>\n</div>\n</a>\n\n\n<a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"bg-light list-group-item list-group-item-action\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span class=\"fa fa-sign-out fa-fw \"></span>\n<span *ngIf=\"sidebarOpened\" class=\"menu-collapsed ml-3\">Logout</span>\n</div>\n</a>\n\n<a href=\"javascript:void(0)\" (click)=\"sidebarOn()\" data-toggle=\"sidebar-colapse\" class=\"bg-dark list-group-item list-group-item-action d-flex align-items-center\">\n<div class=\"d-flex w-100 justify-content-start align-items-center\">\n<span id=\"collapse1-icon\" class=\"fa fa-2x  fa-angle-double-left\"></span>\n<span *ngIf=\"sidebarOpened\" id=\"collapse2-text\"  class=\"menu-collapsed ml-3\">Collapse</span>\n</div>\n</a>\n\n<!-- <li class=\"list-group-item logo-separator d-flex justify-content-center\">\n<img src=\"https://mirafra.com/wp-content/uploads/2016/05/mira_logo.png\" width=\"100\" height=\"50\">\n</li> -->\n</ul>\n</div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0\">\n  <div class=\"row m-0\" id=\"body-row\">\n\n    <div id=\"contents\" class=\"col justify-content-center\" style=\"display: table-cell;vertical-align: middle; \" valign=\"middle\">\n\n      <div class=\"row d-flex  align-content-center flex-wrap m-5\" >\n        <div class=\"offset-md-4 offset-lg-4 col-sm-12 col-md-4 col-lg-4\" style=\"width:30vw;height:30vh;\">\n          <div id=\"signup-container\"  class=\"align-self-center p-4\">\n\n\n              <div>\n                <h4>Sign Up</h4>\n\n                <p>Please register with below details to get benifits of Mirafra DevOps Application.</p>\n\n              </div>\n              <form class=\"pr-2 pl-2\" #SignupForm=\"ngForm\" (ngSubmit)=\"signup(SignupForm.value)\" >\n\n                  <div class=\" form-group\">\n                    <p for=\"first_name\"><b>First Name</b></p>\n                    <input ngModel type=\"text\" class=\"form-control no-border\" id=\"first_name\"  placeholder=\"Enter First Name\" name=\"first_name\" required>\n                    <p for=\"last_name\"><b>Last Name</b></p>\n                    <input ngModel type=\"text\" class=\"form-control no-border\" id=\"last_name\"  placeholder=\"Enter Last Name\" name=\"last_name\" required>\n                    <p for=\"email\"><b>Email Address</b></p>\n                    <input ngModel type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" class=\"form-control no-border\"  id=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\n\n                   <label>\n                    <input ngModel (change)=\"onchangeAgreement($event.target.checked)\"  class=\"checkbox mt-1\" type=\"checkbox\" checked=\"checked\" name=\"agreement\">I Agree to the <a href=\"#\">Terms & Conditions</a> and <a href=\"#\">Privacy Policy</a> of Mirafra DevOps.\n                  </label>\n\n                  <div class=\"align-content-center\" align=\"center\">\n                    <p class=\"psw\">Forgot <a href=\"#\">password?</a></p>\n                    <input class=\"btn btn-danger\" [disabled]=\"!SignupForm.form.valid\" type=\"submit\" value=\"Sign Up\">\n                    <div>Already have Account <a [routerLink]=\"['/login']\">Sign In</a></div>\n                  </div>\n\n                  </div>\n\n\n              </form>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n"

/***/ }),

/***/ "./src/app/add-group/add-group.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-group/add-group.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dropdown Button */\n.dropbtn {\n  margin-left: 5px;\n}\n/* Dropdown button on hover & focus */\n.dropbtn:hover, .dropbtn:focus {\n  background-color:#383b38;\n  color: white;\n}\n/* The search field */\n#myInput {\n  box-sizing: border-box;\n  background-position: 14px 12px;\n  background-repeat: no-repeat;\n  font-size: 16px;\n  padding: 14px 20px 12px 45px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n}\n/* The search field when it gets focus/clicked on */\n#myInput:focus {outline: 3px solid #ddd;}\n/* The container <div> - needed to position the dropdown content */\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n\n\n  background-color: white;\n  width: 100%;\n  border: 1px solid #ddd;\n  z-index: 1;\n  margin-left:0px!important;\n  max-height:50vh;\n  overflow-y:scroll;\n}\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n\n}\n/* Links inside the dropdown */\n#selected-employees a,#added-employees a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n\n\n}\n#selected-employees{\n  overflow-y:scroll;\n}\n#selected-employees{\n  overflow-y:scroll;\n  max-height:15vh;\n}\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #f1f1f1}\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {display:block;}\nli {\n  margin-bottom: 5px;\n}\n.table td, .table th {\n    padding: .50rem;\n    vertical-align: middle !important;\n    border-top: 1px solid #dee2e6;\n}\n.product-pagination{\nposition: absolute;\nbottom:0px !important;\nright:5%;\n}\n.pagination-next{\n  -webkit-box-align: right !important;\n          align-items: right !important;\n}\ninput[type=\"text\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid gray;\n  border-radius: 0px;\n}\nlabel{\n\n}\n.list-group-item{\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid rgba(0,0,0,.125);\n}\nli{\n  margin-bottom: 0px!important;\n  padding-top: 0px!important;\n  padding-bottom: 0px!important;\n}\ninput[type=\"text\"],input[type=\"password\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid gray;\n  border-radius: 0px;\n}\n.group-list div:hover,.group-list div:focus{\nbackground-color: gray;\n  cursor: pointer;\n  color: #bb0117;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWdyb3VwL2FkZC1ncm91cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBLHFDQUFxQztBQUNyQztFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFFQSxtREFBbUQ7QUFDbkQsZ0JBQWdCLHVCQUF1QixDQUFDO0FBRXhDLGtFQUFrRTtBQUdsRSx5Q0FBeUM7QUFDekM7OztFQUdFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7O0FBRWhCO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYzs7O0FBR2hCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUEsNENBQTRDO0FBQzVDLDJCQUEyQix5QkFBeUI7QUFFcEQscUlBQXFJO0FBQ3JJLE9BQU8sYUFBYSxDQUFDO0FBQ3JCO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBR0E7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLDZCQUE2QjtBQUNqQztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixRQUFRO0FBQ1I7QUFDQTtFQUNFLG1DQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0Esc0JBQXNCO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRkLWdyb3VwL2FkZC1ncm91cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRHJvcGRvd24gQnV0dG9uICovXG4uZHJvcGJ0biB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi8qIERyb3Bkb3duIGJ1dHRvbiBvbiBob3ZlciAmIGZvY3VzICovXG4uZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzODNiMzg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogVGhlIHNlYXJjaCBmaWVsZCAqL1xuI215SW5wdXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTRweCAyMHB4IDEycHggNDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLyogVGhlIHNlYXJjaCBmaWVsZCB3aGVuIGl0IGdldHMgZm9jdXMvY2xpY2tlZCBvbiAqL1xuI215SW5wdXQ6Zm9jdXMge291dGxpbmU6IDNweCBzb2xpZCAjZGRkO31cblxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xuXG5cbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDowcHghaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OjUwdmg7XG4gIG92ZXJmbG93LXk6c2Nyb2xsO1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuI3NlbGVjdGVkLWVtcGxveWVlcyBhLCNhZGRlZC1lbXBsb3llZXMgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG5cbn1cbiNzZWxlY3RlZC1lbXBsb3llZXN7XG4gIG92ZXJmbG93LXk6c2Nyb2xsO1xufVxuI3NlbGVjdGVkLWVtcGxveWVlc3tcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XG4gIG1heC1oZWlnaHQ6MTV2aDtcbn1cblxuLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxfVxuXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51ICh1c2UgSlMgdG8gYWRkIHRoaXMgY2xhc3MgdG8gdGhlIC5kcm9wZG93bi1jb250ZW50IGNvbnRhaW5lciB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gYnV0dG9uKSAqL1xuLnNob3cge2Rpc3BsYXk6YmxvY2s7fVxubGkge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cblxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICAgIHBhZGRpbmc6IC41MHJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4ucHJvZHVjdC1wYWdpbmF0aW9ue1xucG9zaXRpb246IGFic29sdXRlO1xuYm90dG9tOjBweCAhaW1wb3J0YW50O1xucmlnaHQ6NSU7XG59XG4ucGFnaW5hdGlvbi1uZXh0e1xuICBhbGlnbi1pdGVtczogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxubGFiZWx7XG5cbn1cbi5saXN0LWdyb3VwLWl0ZW17XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xufVxubGl7XG4gIG1hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwcHghaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4IWltcG9ydGFudDtcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uZ3JvdXAtbGlzdCBkaXY6aG92ZXIsLmdyb3VwLWxpc3QgZGl2OmZvY3Vze1xuYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2JiMDExNztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-group/add-group.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-group/add-group.component.ts ***!
  \**************************************************/
/*! exports provided: AddGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function() { return AddGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-group.service */ "./src/app/user-group.service.ts");




var AddGroupComponent = /** @class */ (function () {
    function AddGroupComponent(auth, userGroupService) {
        this.auth = auth;
        this.userGroupService = userGroupService;
        this.dropdownOpen = true;
        this.dropdownClosed = false;
        this.selectedEmployee = Array();
    }
    AddGroupComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    AddGroupComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.auth.getAllUsers().subscribe(function (res) {
            _this.allusers = res.data;
            console.log("add member allusers", _this.allusers);
        });
    };
    AddGroupComponent.prototype.toggleDropdown = function () {
        this.dropdownOpen = !this.dropdownOpen;
        this.dropdownClosed = !this.dropdownClosed;
    };
    AddGroupComponent.prototype.onSelectedEmployee = function (user) {
        this.selectedEmployee.push(user);
        //console.log(user)
    };
    AddGroupComponent.prototype.addGroupWithUsers = function () {
        var _this = this;
        var e_1, _a;
        if (this.newGroupName) {
            var users = Array();
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selectedEmployee), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var emp = _c.value;
                    users.push(emp.email);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var aaa = { group_name: localStorage.getItem("newGroupName"), ass_emps: users };
            //console.log("json group data",aaa)
            this.userGroupService.addUserGroup(this.newGroupName, users).subscribe(function (res) { return console.log("group added", _this.newGroupName); });
        }
        else {
            alert("Provide group name");
        }
    };
    AddGroupComponent.prototype.newGroupNameFun = function (name) {
        this.newGroupName = name;
        //console.log("newGroupName",name);
        localStorage.setItem("newGroupName", this.newGroupName);
    };
    AddGroupComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _user_group_service__WEBPACK_IMPORTED_MODULE_3__["UserGroupService"] }
    ]; };
    AddGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-group',
            template: __webpack_require__(/*! raw-loader!./add-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-group/add-group.component.html"),
            styles: [__webpack_require__(/*! ./add-group.component.css */ "./src/app/add-group/add-group.component.css")]
        })
    ], AddGroupComponent);
    return AddGroupComponent;
}());



/***/ }),

/***/ "./src/app/add-product/add-product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-product/add-product.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dropdown Button */\n.dropbtn {\n  margin-left: 5px;\n}\n/* Dropdown button on hover & focus */\n.dropbtn:hover, .dropbtn:focus {\n  background-color:#383b38;\n  color: white;\n}\n/* The search field */\n#myInput {\n  box-sizing: border-box;\n  background-position: 14px 12px;\n  background-repeat: no-repeat;\n  font-size: 16px;\n  padding: 14px 20px 12px 45px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n}\n/* The search field when it gets focus/clicked on */\n#myInput:focus {outline: 3px solid #ddd;}\n/* The container <div> - needed to position the dropdown content */\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  background-color: #f6f6f6;\n  border: 1px solid #ddd;\n  z-index: 1;\n}\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #f1f1f1}\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {display:block;}\nli {\n  margin-bottom: 5px;\n}\n.table td, .table th {\n    padding: .50rem;\n    vertical-align: middle !important;\n    border-top: 1px solid #dee2e6;\n}\n.product-pagination{\nposition: absolute;\nbottom:0px !important;\nright:5%;\n}\n.pagination-next{\n  -webkit-box-align: right !important;\n          align-items: right !important;\n}\n#myDropdown{\n  height: 40vh;\n  max-height: 50vh;\n  overflow-y:scroll;\n}\ninput[type=\"text\"],input[type=\"password\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid gray;\n  border-radius: 0px;\n}\n.user-group-list li:hover,.user-group-list li:focus{\nbackground-color: gray;\n}\n.user-group-list>li a,.user-group-list>li a{\ndisplay: none;\n}\n.user-group-list li:hover a,.user-group-list li:focus a{\ndisplay: block;\n}\n.list-group-item, .list-group-item:hover{ z-index: auto; }\ninput[type='radio'] {\n        -webkit-appearance: none;\n        width: 15px;\n        height: 15px;\n        border-radius: 50%;\n        outline: none;\n        border: 3px solid gray;\n    }\ninput[type='radio']:before {\n        content: '';\n        display: block;\n        width: 60%;\n        height: 60%;\n        margin: 20% auto;\n        border-radius: 50%;\n    }\ninput[type=\"radio\"]:checked:before {\n        background: #d50000;\n\n    }\ninput[type=\"radio\"]:checked {\n      border-color:#d50000;\n    }\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEI7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkO0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0Usc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBRUEsbURBQW1EO0FBQ25ELGdCQUFnQix1QkFBdUIsQ0FBQztBQUV4QyxrRUFBa0U7QUFHbEUseUNBQXlDO0FBQ3pDO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUEsNENBQTRDO0FBQzVDLDJCQUEyQix5QkFBeUI7QUFFcEQscUlBQXFJO0FBQ3JJLE9BQU8sYUFBYSxDQUFDO0FBQ3JCO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBR0E7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLDZCQUE2QjtBQUNqQztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixRQUFRO0FBQ1I7QUFDQTtFQUNFLG1DQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsMENBQTBDLGFBQWEsRUFBRTtBQUV6RDtRQUNRLHdCQUF3QjtRQUN4QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0FBRUE7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLFVBQVU7UUFDVixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtBQUVIO1FBQ08sbUJBQW1COztJQUV2QjtBQUVBO01BQ0Usb0JBQW9CO0lBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xuLmRyb3BidG4ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4vKiBEcm9wZG93biBidXR0b24gb24gaG92ZXIgJiBmb2N1cyAqL1xuLmRyb3BidG46aG92ZXIsIC5kcm9wYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMzgzYjM4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFRoZSBzZWFyY2ggZmllbGQgKi9cbiNteUlucHV0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTRweCAxMnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE0cHggMjBweCAxMnB4IDQ1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi8qIFRoZSBzZWFyY2ggZmllbGQgd2hlbiBpdCBnZXRzIGZvY3VzL2NsaWNrZWQgb24gKi9cbiNteUlucHV0OmZvY3VzIHtvdXRsaW5lOiAzcHggc29saWQgI2RkZDt9XG5cbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cblxuXG4vKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgei1pbmRleDogMTtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjF9XG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgKHVzZSBKUyB0byBhZGQgdGhpcyBjbGFzcyB0byB0aGUgLmRyb3Bkb3duLWNvbnRlbnQgY29udGFpbmVyIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBidXR0b24pICovXG4uc2hvdyB7ZGlzcGxheTpibG9jazt9XG5saSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XG4gICAgcGFkZGluZzogLjUwcmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbn1cbi5wcm9kdWN0LXBhZ2luYXRpb257XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5ib3R0b206MHB4ICFpbXBvcnRhbnQ7XG5yaWdodDo1JTtcbn1cbi5wYWdpbmF0aW9uLW5leHR7XG4gIGFsaWduLWl0ZW1zOiByaWdodCAhaW1wb3J0YW50O1xufVxuI215RHJvcGRvd257XG4gIGhlaWdodDogNDB2aDtcbiAgbWF4LWhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLnVzZXItZ3JvdXAtbGlzdCBsaTpob3ZlciwudXNlci1ncm91cC1saXN0IGxpOmZvY3Vze1xuYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cbi51c2VyLWdyb3VwLWxpc3Q+bGkgYSwudXNlci1ncm91cC1saXN0PmxpIGF7XG5kaXNwbGF5OiBub25lO1xufVxuLnVzZXItZ3JvdXAtbGlzdCBsaTpob3ZlciBhLC51c2VyLWdyb3VwLWxpc3QgbGk6Zm9jdXMgYXtcbmRpc3BsYXk6IGJsb2NrO1xufVxuLmxpc3QtZ3JvdXAtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbTpob3Zlcnsgei1pbmRleDogYXV0bzsgfVxuXG5pbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyYXk7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT0ncmFkaW8nXTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICBtYXJnaW46IDIwJSBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Q1MDAwMDtcblxuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIHtcbiAgICAgIGJvcmRlci1jb2xvcjojZDUwMDAwO1xuICAgIH1cblxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/add-product/add-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-group.service */ "./src/app/user-group.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");








var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(productService, router, route, auth, userGroupService, spinner, snackbar) {
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.userGroupService = userGroupService;
        this.spinner = spinner;
        this.snackbar = snackbar;
        this.product_details = {
            "branch_category": "",
            "groups": [],
            "product_type": "",
            "product_name": "",
            "description": "",
            "image": this.image,
            "owner": "",
            "ap_path": "",
            "cp_path": ""
        };
        this.selectedGroupsToAdd = Array();
        this.newProduct = {};
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem("userdata")).email;
        console.log(this.user);
        this.userGroupService.getAllGroupsWithAllMembers().subscribe(function (res) {
            _this.groupFromServer = res;
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
        });
    };
    AddProductComponent.prototype.addProduct = function () {
        var e_1, _a;
        this.user = JSON.parse(localStorage.getItem("userdata")).email;
        var groups__ = Array();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selectedGroupsToAdd), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                groups__.push(a.group_name);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.product_details.groups = groups__;
        this.product_details.owner = this.user;
        //console.log("group data",selectedGroupsToAdd)
        if (this.product_details.branch_category === "") {
            alert("Please provide Branch.");
        }
        else if (this.product_details.product_type === "") {
            alert("Please provide Product Type.");
        }
        else if (this.product_details.product_name === "") {
            alert("Please provide Product Name.");
        }
        else if (this.product_details.ap_path === "") {
            alert("Please provide Product AP path.");
        }
        else if (this.product_details.cp_path === "") {
            alert("Please provide Product CP path.");
        }
        if (this.product_details.groups.length == 0) {
            alert("Please add atleast one group.");
        }
        console.log("form data", this.product_details);
        this.productService.addProduct(this.product_details).subscribe(function (res) {
            //console.log("form data",this.product_details)
            //console.log("add product res",res)
            return res;
        });
    };
    AddProductComponent.prototype.addNewProduct = function (data) {
        var _this = this;
        var e_2, _a;
        this.spinner.show();
        var groups__ = Array();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selectedGroupsToAdd), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                groups__.push(a.group_name);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.product_details.groups = groups__;
        data["groups"] = groups__;
        data["image"] = this.imageFile;
        //console.log("form data",JSON.stringify(data))
        this.productService.addProduct(data).subscribe(function (res) {
            //console.log("form data",this.product_details)
            //console.log("add product res",res)
            _this.spinner.hide();
            _this.snackbar.open("New Product Added.", "ok", { duration: 3000, });
            _this.router.navigate(['/product']);
        });
    };
    AddProductComponent.prototype.onChaneInputData = function (inputdata) {
    };
    AddProductComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.auth.getAllUsers().subscribe(function (data) {
            _this.allusers = data;
            console.log(_this.allusers);
        });
    };
    AddProductComponent.prototype.onSelectedGroup = function (group) {
        this.selectedGroupsToAdd.push(group);
        //console.log(user)
    };
    AddProductComponent.prototype.branchTypeChange = function (option) {
        this.product_details.branch_category = option;
    };
    AddProductComponent.prototype.onchangeImage = function (event) {
        this.imageFile = event.target.image;
    };
    AddProductComponent.ctorParameters = function () { return [
        { type: _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _user_group_service__WEBPACK_IMPORTED_MODULE_4__["UserGroupService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
    ]; };
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/add-product/add-product.component.css")]
        })
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _configurations_configurations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./configurations/configurations.component */ "./src/app/configurations/configurations.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
/* harmony import */ var _setpassword_setpassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./setpassword/setpassword.component */ "./src/app/setpassword/setpassword.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-group/add-group.component */ "./src/app/add-group/add-group.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");


















var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: 'setpassword', component: _setpassword_setpassword_component__WEBPACK_IMPORTED_MODULE_13__["SetpasswordComponent"] },
    { path: 'forgotPassword', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__["ForgotPasswordComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'groups', component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_5__["GroupsComponent"] },
    { path: 'group_details', component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_5__["GroupsComponent"] },
    { path: 'add_group', component: _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_16__["AddGroupComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"] },
    { path: 'add_product', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_17__["AddProductComponent"] },
    { path: 'product_details', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailsComponent"] },
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_6__["EmployeesComponent"] },
    { path: 'employeedetails', component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeDetailsComponent"] },
    { path: 'configurations', component: _configurations_configurations_component__WEBPACK_IMPORTED_MODULE_11__["ConfigurationsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n\n  font-family: Lato;\n}\n#body-row{\n  max-height:90vh;\n}\n#contents{\n  max-height:90vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcblxuICBmb250LWZhbWlseTogTGF0bztcbn1cbiNib2R5LXJvd3tcbiAgbWF4LWhlaWdodDo5MHZoO1xufVxuI2NvbnRlbnRze1xuICBtYXgtaGVpZ2h0Ojkwdmg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cicd';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _setpassword_setpassword_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./setpassword/setpassword.component */ "./src/app/setpassword/setpassword.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _group_details_group_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./group-details/group-details.component */ "./src/app/group-details/group-details.component.ts");
/* harmony import */ var _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-group/add-group.component */ "./src/app/add-group/add-group.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _configs_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./configs.service */ "./src/app/configs.service.ts");
/* harmony import */ var _user_group_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user-group.service */ "./src/app/user-group.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _configurations_configurations_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./configurations/configurations.component */ "./src/app/configurations/configurations.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");












//user components






// product components



//Groups Components




//employee components


//common components


//services




//configuration components

//auth guard

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_18__["ProductComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_24__["EmployeesComponent"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_21__["GroupsComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_26__["NavComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["SidebarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _configurations_configurations_component__WEBPACK_IMPORTED_MODULE_32__["ConfigurationsComponent"],
                _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_25__["EmployeeDetailsComponent"],
                _setpassword_setpassword_component__WEBPACK_IMPORTED_MODULE_17__["SetpasswordComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_23__["AddGroupComponent"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_21__["AddGroupModel"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_21__["AddGroupMemberModal"],
                _group_details_group_details_component__WEBPACK_IMPORTED_MODULE_22__["GroupDetailsComponent"],
                _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_20__["AddProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _configs_service__WEBPACK_IMPORTED_MODULE_29__["ConfigsService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_31__["CookieService"], _auth_guard__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"], _user_group_service__WEBPACK_IMPORTED_MODULE_30__["UserGroupService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_groups_groups_component__WEBPACK_IMPORTED_MODULE_21__["AddGroupModel"], _groups_groups_component__WEBPACK_IMPORTED_MODULE_21__["AddGroupMemberModal"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        this.router.navigate(['home']);
        return true;
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        return true;
    };
    AuthGuard.prototype.canLoad = function (route, segments) {
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");








var AuthService = /** @class */ (function () {
    function AuthService(http, cookieService, snackbar, spinner) {
        this.http = http;
        this.cookieService = cookieService;
        this.snackbar = snackbar;
        this.spinner = spinner;
        //   BASE_USER_URL="http://127.0.0.1:8000/users/"
        this.BASE_USER_URL = "http://192.168.1.200:81/users/";
        //   public get currentUserValue(): User {
        //         return this.currentUserSubject.value;
        //     }
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"]();
    }
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        var sessionid = localStorage.getItem('sessionid');
        var access_token = localStorage.getItem('access_token');
        var refresh_token = localStorage.getItem('refresh_token');
        // Check whether the token is expired and return
        // true or false
        //console.log("jwt helper access_token",access_token)
        //console.log("jwt helper refresh_token",refresh_token)
        //     if(sessionid!=null){
        //     return true;
        //     }
        //     else{
        //     return false;
        //     }
        if (!this.jwtHelper.isTokenExpired(refresh_token) && this.jwtHelper.isTokenExpired(access_token)) {
            this.getNewToken(refresh_token).subscribe(function (res) {
                var access_token = localStorage.setItem('access_token', res.access_token);
                return !_this.jwtHelper.isTokenExpired(localStorage.getItem('access_token'));
            });
        }
        else {
            return !this.jwtHelper.isTokenExpired(refresh_token);
        }
    };
    AuthService.prototype.user_login = function (email, password) {
        var _this = this;
        var login_url = this.BASE_USER_URL + 'login/';
        // return this.http.post<any>(login_url, { email:email, password:password },{headers})
        //       .pipe(map(user => {
        //         //  login successful if there's a jwt token in the response
        //           if (user) {
        //               // store user details and jwt token in local storage to keep user logged in between page refreshes
        //               localStorage.setItem('currentUser', JSON.stringify(user));
        //               //this.currentUserSubject.next(user);
        //           }
        //         console.log(user);
        //           console.log("headers ",user.headers);
        //           return user;
        //       }));
        return this.http.post(login_url, { email: email, password: password }, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
            //console.log('response', resp);
            var response = JSON.parse(JSON.stringify(resp.body));
            console.log("response", response);
            localStorage.setItem('userdata', JSON.stringify(response.data));
            localStorage.setItem('access_token', JSON.stringify(response.access));
            localStorage.setItem('refresh_token', JSON.stringify(response.refresh));
            localStorage.setItem('sessionid', response.sessionid);
            _this.cookieService.set('sessionid', response.sessionid);
            //this.cookieService.set('csrftoken',response.csrftoken);
            return resp;
        }));
    };
    AuthService.prototype.catchError = function (error) {
        return Promise.reject(error.message || 'Server error: ' + error);
    };
    //     logout() {
    //         //remove user from local storage to log user out
    //
    //         this.currentUserSubject.next(null);
    //     }
    AuthService.prototype.create_account = function (first_name, last_name, email) {
        var add_user_url = this.BASE_USER_URL + 'add/';
        return this.http.post(add_user_url, { first_name: first_name, last_name: last_name, email: email }, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
            //console.log('response', resp);
            return resp;
        }));
    };
    AuthService.prototype.update_account_details = function (data) {
        var sessionid = localStorage.getItem('sessionid');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization', 'sessionid ' + sessionid);
        headers = headers.append("Access-Control-Allow-Origin", "*");
        headers = headers.append('HTTP-Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        console.log(headers);
        var add_user_url = this.BASE_USER_URL + 'manages/';
        return this.http.put(add_user_url, { data: data }, { observe: 'response', headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
            console.log('response', resp);
            return resp;
        }));
    };
    AuthService.prototype.changePassword = function (data) {
        var url = this.BASE_USER_URL + 'setpassword/?email=' + data.email;
    };
    AuthService.prototype.setUserPassword = function (email, pass1, pass2) {
        var url = this.BASE_USER_URL + 'set_password/?email=' + email;
        return this.http.post(url, { password1: pass1, password2: pass2 }, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
            //console.log('response', resp);
            return resp;
        }));
    };
    AuthService.prototype.verification_mail = function (email) {
        var verification_mail_url = this.BASE_USER_URL + 'reset_password/?email=' + email;
        return this.http.get(verification_mail_url);
    };
    AuthService.prototype.logout = function (sessionid) {
        var logout_url = this.BASE_USER_URL;
        localStorage.removeItem('userdata');
        localStorage.removeItem('sessionid');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.cookieService.delete('sessionid');
        return this.http.get(logout_url);
    };
    AuthService.prototype.getGroupUserData = function (list) {
        var url = this.BASE_USER_URL + 'get_group_users';
        this.sessionId = localStorage.getItem('sessionid');
        var access_token = localStorage.getItem('access_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('HTTP-AUTHORIZATION', 'Bearer ' + access_token);
        //         console.log('headersheaders', headers);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("requestData", JSON.stringify({ users: list }));
        //console.log("session from get user",localStorage.getItem('sessionid'))
        //         console.log('this.sessionId', this.sessionId);
        return this.http.post(url, { users: list }, { headers: headers });
    };
    AuthService.prototype.getAllUsers = function () {
        var url = this.BASE_USER_URL + 'get_all_user';
        var access_token = localStorage.getItem('access_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Accept', 'application/json');
        //headers = headers.append('WWW-Authenticate', 'sessionid ' + sessionid);
        headers = headers.append('HTTP-AUTHORIZATION', 'Bearer ' + access_token);
        return this.http.get(url, { headers: headers });
    };
    AuthService.prototype.getNewToken = function (refresh_token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Accept', 'application/json');
        var url = this.BASE_USER_URL + 'token/refresh/';
        return this.http.post(url, { refresh: refresh_token }, { headers: headers });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/configs.service.ts":
/*!************************************!*\
  !*** ./src/app/configs.service.ts ***!
  \************************************/
/*! exports provided: ConfigsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigsService", function() { return ConfigsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ConfigsService = /** @class */ (function () {
    function ConfigsService(http) {
        this.http = http;
        this.APS_CONFIG_BASE_URL = 'http://192.168.1.200:82/configurations';
    }
    ConfigsService.prototype.getAppsConfig = function () {
        // return this.http.post<any>(login_url, { email:email, password:password },{headers})
        //       .pipe(map(user => {
        //         //  login successful if there's a jwt token in the response
        //           if (user) {
        //               // store user details and jwt token in local storage to keep user logged in between page refreshes
        //               localStorage.setItem('currentUser', JSON.stringify(user));
        //               //this.currentUserSubject.next(user);
        //           }
        //         console.log(user);
        //           console.log("headers ",user.headers);
        //           return user;
        //       }));
        return this.http.get(this.APS_CONFIG_BASE_URL);
    };
    ConfigsService.prototype.saveAppsConfig = function (name, url) {
        //console.log("name :",name," url :",url);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "GET, POST");
        return this.http.put(this.APS_CONFIG_BASE_URL, { name: name, url: url }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            //  login successful if there's a jwt token in the response
            //   if (data) {
            //       // store user details and jwt token in local storage to keep user logged in between page refreshes
            //       localStorage.setItem('currentUser', JSON.stringify(data));
            //       //this.currentUserSubject.next(user);
            //   }
            console.log(data);
            return data;
        }));
        //return this.http.get(edit_apps_config_url);
    };
    ConfigsService.prototype.getUserAppsConfigs = function (email) {
        var edit_apps_config_url = this.APS_CONFIG_BASE_URL + '?user=';
        return this.http.get(edit_apps_config_url + email);
    };
    ConfigsService.prototype.saveUserCredentials = function (app_name, user, username, password) {
        var edit_apps_cred_url = this.APS_CONFIG_BASE_URL + '/' + app_name;
        return this.http.put(edit_apps_cred_url, { app_name: app_name, user: user, username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            //  login successful if there's a jwt token in the response
            //   if (data) {
            //       // store user details and jwt token in local storage to keep user logged in between page refreshes
            //       localStorage.setItem('currentUser', JSON.stringify(data));
            //       //this.currentUserSubject.next(user);
            //   }
            console.log(data);
            return data;
        }));
        //return this.http.get(edit_apps_config_url);
    };
    ConfigsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ConfigsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ConfigsService);
    return ConfigsService;
}());



/***/ }),

/***/ "./src/app/configurations/configurations.component.css":
/*!*************************************************************!*\
  !*** ./src/app/configurations/configurations.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item:hover,.list-group-item:focus{\n  background-color:gainsboro ;\ncolor: #d50000;\n\n}\n.list-group-item{\n    border: none!important;\n  color:gray;\n  font-weight: bold;\n}\n.list-group-item:active{\n  background-color:gainsboro ;\ncolor: #d50000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhdGlvbnMvY29uZmlndXJhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3QixjQUFjOztBQUVkO0FBQ0E7SUFDSSxzQkFBc0I7RUFDeEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCLGNBQWM7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb25zL2NvbmZpZ3VyYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC1pdGVtOmhvdmVyLC5saXN0LWdyb3VwLWl0ZW06Zm9jdXN7XG4gIGJhY2tncm91bmQtY29sb3I6Z2FpbnNib3JvIDtcbmNvbG9yOiAjZDUwMDAwO1xuXG59XG4ubGlzdC1ncm91cC1pdGVte1xuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XG4gIGNvbG9yOmdyYXk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpc3QtZ3JvdXAtaXRlbTphY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6Z2FpbnNib3JvIDtcbmNvbG9yOiAjZDUwMDAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/configurations/configurations.component.ts":
/*!************************************************************!*\
  !*** ./src/app/configurations/configurations.component.ts ***!
  \************************************************************/
/*! exports provided: ConfigurationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsComponent", function() { return ConfigurationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs.service */ "./src/app/configs.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");





var ConfigurationsComponent = /** @class */ (function () {
    function ConfigurationsComponent(configs, data, snackbar) {
        this.configs = configs;
        this.data = data;
        this.snackbar = snackbar;
        this.isShow = false;
        this.getConfs();
    }
    ConfigurationsComponent.prototype.ngOnInit = function () {
        //console.log("conf data",this.confs_data);
        //console.log("confs data",this.confs_data);
        // this.selected_conf_index=0;
        // this.selected_conf_data=this.confs_data[this.selected_conf_index];
        // this.selected_conf_name=this.selected_conf_data.name;
        // this.selected_conf(this.selected_conf_name);
    };
    ConfigurationsComponent.prototype.getConfs = function () {
        var _this = this;
        this.configs.getAppsConfig().subscribe(function (data) {
            _this.confs_data = data;
        }).add(function (aaa) {
            //console.log("add data",this.confs_data);
            _this.selected_conf_index = 0;
            _this.selected_conf_data = _this.confs_data[_this.selected_conf_index];
            _this.selected_conf_name = _this.selected_conf_data.name;
            _this.selected_conf(_this.selected_conf_name);
        });
    };
    ConfigurationsComponent.prototype.selected_conf = function (name) {
        this.selected_conf_index = this.confs_data.findIndex(function (item, i) {
            return item.name === name;
        });
        this.selected_conf_data = this.confs_data[this.selected_conf_index];
        this.selected_conf_name = this.selected_conf_data.name;
    };
    ConfigurationsComponent.prototype.saveConfig = function (data) {
        var _this = this;
        console.log(data);
        this.configs.saveAppsConfig(this.selected_conf_data.name, data.confUrl).subscribe(function (data) {
            //console.log(data);
            _this.selected_conf_data.url = data.url;
            _this.openSnackBar("Saved Successfully.", null);
        });
    };
    ConfigurationsComponent.prototype.openSnackBar = function (message, action) {
        this.snackbar.open(message, "Ok", {
            duration: 2000,
        });
        //window.location.reload();
    };
    ConfigurationsComponent.prototype.toggleDisplay = function () {
        this.isShow = !this.isShow;
    };
    ConfigurationsComponent.ctorParameters = function () { return [
        { type: _configs_service__WEBPACK_IMPORTED_MODULE_2__["ConfigsService"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    ConfigurationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configurations',
            template: __webpack_require__(/*! raw-loader!./configurations.component.html */ "./node_modules/raw-loader/index.js!./src/app/configurations/configurations.component.html"),
            styles: [__webpack_require__(/*! ./configurations.component.css */ "./src/app/configurations/configurations.component.css")]
        })
    ], ConfigurationsComponent);
    return ConfigurationsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5,label{\n  color: #b40000 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUsbGFiZWx7XG4gIGNvbG9yOiAjYjQwMDAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _configs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configs.service */ "./src/app/configs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(data, route, router, auth, appsconfig, spinner, titleService) {
        this.data = data;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.appsconfig = appsconfig;
        this.spinner = spinner;
        this.titleService = titleService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user_data = JSON.parse(localStorage.getItem("userdata"));
        if (this.user_data.user_group === "admin") {
            this.user_type = true;
        }
        this.getConfs();
    };
    DashboardComponent.prototype.getConfs = function () {
        var _this = this;
        this.appsconfig.getAppsConfig().subscribe(function (data) { return _this.appsConfigData = data; });
        //console.log("apps config",this.appsConfigData);
    };
    DashboardComponent.prototype.resend_verification = function () {
        var _this = this;
        this.auth.verification_mail(this.user_data.email).subscribe(function (res) {
            //console.log("server response",res);
            _this.data.setUserData(res);
            setTimeout(function () {
                /** spinner ends after 5 seconds */
                _this.spinner.hide();
            }, 5000);
            localStorage.setItem("userdata", JSON.stringify(res));
            _this.router.navigate(["/home"]);
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _configs_service__WEBPACK_IMPORTED_MODULE_6__["ConfigsService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.setUserData = function (data) {
        this.currentUserData = data;
        console.log(this.currentUserData);
    };
    DataService.prototype.getUserData = function () {
        return this.currentUserData;
    };
    DataService.prototype.setConfigAppsData = function (data) {
        this.ConfigAppsData = data;
        console.log(this.ConfigAppsData);
    };
    DataService.prototype.getConfigAppsData = function () {
        return this.ConfigAppsData;
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/employee-details/employee-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWRldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employee-details/employee-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _user_group_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-group.service */ "./src/app/user-group.service.ts");
/* harmony import */ var _configs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configs.service */ "./src/app/configs.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");











var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent(data, productService, route, auth, spinner, titleService, snackbar, userGroupService, configs) {
        var _this = this;
        this.data = data;
        this.productService = productService;
        this.route = route;
        this.auth = auth;
        this.spinner = spinner;
        this.titleService = titleService;
        this.snackbar = snackbar;
        this.userGroupService = userGroupService;
        this.configs = configs;
        this.route.queryParams
            .subscribe(function (params) {
            //console.log(params); // {order: "popular"}
            _this.aaaa = params.employee_id;
            //console.log("param emp id",this.aaaa); // popular
        });
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getGroupUserData(new Array(this.aaaa)).subscribe(function (data) {
            _this.employee = data[0];
            //console.log("this.employee",this.employee)
            _this.configs.getUserAppsConfigs(_this.employee.email).subscribe(function (data) { return _this.configurations = data; });
            _this.userGroupService.getUserAppsGroups(_this.employee.email).subscribe(function (res) {
                var e_1, _a;
                _this.user_groups = res.data;
                //console.log("user groups",this.user_groups);
                if (_this.user_groups.indexOf('admin') > -1) {
                    _this.isAdmin = true;
                    //console.log("this.isAdmin",this.isAdmin)
                }
                //this.isAdmin=this.user_groups.includes("admin")
                var arr = Array();
                var arr2 = Array();
                var _loop_1 = function (group) {
                    _this.userGroupService.getGroupWithMembers(group).subscribe(function (gdata) {
                        var data = { group_name: group, ass_emps: gdata.ass_emps.length };
                        arr.push(data);
                        _this.productService.getProductByGroup(group).subscribe(function (res) {
                            var e_2, _a;
                            try {
                                for (var res_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](res), res_1_1 = res_1.next(); !res_1_1.done; res_1_1 = res_1.next()) {
                                    var pp = res_1_1.value;
                                    pp["emp_length"] = gdata.ass_emps.length;
                                    arr2.push(pp);
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (res_1_1 && !res_1_1.done && (_a = res_1.return)) _a.call(res_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        });
                    });
                };
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.user_groups), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var group = _c.value;
                        _loop_1(group);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.associated_projects = arr2;
                //console.log("arr2",this.associated_projects)
                _this.user_groups_data = arr;
                //console.log("arr",arr)
            });
        });
    };
    EmployeeDetailsComponent.prototype.getData = function () {
    };
    EmployeeDetailsComponent.prototype.setAsAuperadmin = function (event) {
        var _this = this;
        this.setAdmin = event;
        var arr = new Array(this.employee.email);
        if (this.setAdmin) {
            this.userGroupService.addToGroup("admin", arr).subscribe(function (data) {
                //console.log("add admin",data)
                _this.snackbar.open("You made this user Super Admin.", "ok", { duration: 2000, });
            });
        }
        else {
            this.userGroupService.removeFromGroup("admin", arr).subscribe(function (data) {
                //console.log("add admin",data)
                _this.snackbar.open("You removed this user from Super Admin.", "ok", { duration: 2000, });
            });
        }
    };
    EmployeeDetailsComponent.prototype.getUserProjects = function (group_name, members) {
        var _this = this;
        this.productService.getProductByGroup(group_name).subscribe(function (res) {
            _this.associated_projects = res;
            //console.log("projects",res)
        });
    };
    EmployeeDetailsComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] },
        { type: _user_group_service__WEBPACK_IMPORTED_MODULE_5__["UserGroupService"] },
        { type: _configs_service__WEBPACK_IMPORTED_MODULE_6__["ConfigsService"] }
    ]; };
    EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! raw-loader!./employee-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee-details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/employee-details/employee-details.component.css")]
        })
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dropdown Button */\n.dropbtn {\n  margin-left: 5px;\n}\n/* Dropdown button on hover & focus */\n.dropbtn:hover, .dropbtn:focus {\n  background-color:#383b38;\n  color: white;\n}\n/* The search field */\n#myInput {\n  box-sizing: border-box;\n  background-position: 14px 12px;\n  background-repeat: no-repeat;\n  font-size: 16px;\n  padding: 14px 20px 12px 45px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n}\n/* The search field when it gets focus/clicked on */\n#myInput:focus {outline: 3px solid #ddd;}\n/* The container <div> - needed to position the dropdown content */\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f6f6f6;\n  min-width: 230px;\n  border: 1px solid #ddd;\n  z-index: 1;\n}\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #f1f1f1}\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {display:block;}\nli {\n  margin-bottom: 5px;\n}\n.table td, .table th {\n    padding: .50rem;\n    vertical-align: middle !important;\n    border-top: 1px solid #dee2e6;\n}\n.employee-pagination{\nposition: absolute;\nbottom:0px !important;\nright:5%;\n}\n.pagination-next{\n  -webkit-box-align: right !important;\n          align-items: right !important;\n}\n#myDropdown,#myDropdown2{\n  height: 40vh;\n  max-height: 50vh;\n  overflow-y:scroll;\n}\n.userlist-row{\n    cursor:pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBLHFDQUFxQztBQUNyQztFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFFQSxtREFBbUQ7QUFDbkQsZ0JBQWdCLHVCQUF1QixDQUFDO0FBRXhDLGtFQUFrRTtBQUdsRSx5Q0FBeUM7QUFDekM7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQSw0Q0FBNEM7QUFDNUMsMkJBQTJCLHlCQUF5QjtBQUVwRCxxSUFBcUk7QUFDckksT0FBTyxhQUFhLENBQUM7QUFDckI7RUFDRSxrQkFBa0I7QUFDcEI7QUFHQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsNkJBQTZCO0FBQ2pDO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLFFBQVE7QUFDUjtBQUNBO0VBQ0UsbUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZXMvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEcm9wZG93biBCdXR0b24gKi9cbi5kcm9wYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLyogRHJvcGRvd24gYnV0dG9uIG9uIGhvdmVyICYgZm9jdXMgKi9cbi5kcm9wYnRuOmhvdmVyLCAuZHJvcGJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IzM4M2IzODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUaGUgc2VhcmNoIGZpZWxkICovXG4jbXlJbnB1dCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE0cHggMTJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNHB4IDIwcHggMTJweCA0NXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4vKiBUaGUgc2VhcmNoIGZpZWxkIHdoZW4gaXQgZ2V0cyBmb2N1cy9jbGlja2VkIG9uICovXG4jbXlJbnB1dDpmb2N1cyB7b3V0bGluZTogM3B4IHNvbGlkICNkZGQ7fVxuXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXG5cblxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgbWluLXdpZHRoOiAyMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgei1pbmRleDogMTtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjF9XG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgKHVzZSBKUyB0byBhZGQgdGhpcyBjbGFzcyB0byB0aGUgLmRyb3Bkb3duLWNvbnRlbnQgY29udGFpbmVyIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBidXR0b24pICovXG4uc2hvdyB7ZGlzcGxheTpibG9jazt9XG5saSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XG4gICAgcGFkZGluZzogLjUwcmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbn1cbi5lbXBsb3llZS1wYWdpbmF0aW9ue1xucG9zaXRpb246IGFic29sdXRlO1xuYm90dG9tOjBweCAhaW1wb3J0YW50O1xucmlnaHQ6NSU7XG59XG4ucGFnaW5hdGlvbi1uZXh0e1xuICBhbGlnbi1pdGVtczogcmlnaHQgIWltcG9ydGFudDtcbn1cbiNteURyb3Bkb3duLCNteURyb3Bkb3duMntcbiAgaGVpZ2h0OiA0MHZoO1xuICBtYXgtaGVpZ2h0OiA1MHZoO1xuICBvdmVyZmxvdy15OnNjcm9sbDtcbn1cbi51c2VybGlzdC1yb3d7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _configs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs.service */ "./src/app/configs.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-group.service */ "./src/app/user-group.service.ts");







var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(data, configs, route, router, auth, userGroupService) {
        this.data = data;
        this.configs = configs;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.userGroupService = userGroupService;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.users = this.getEmployees();
        //console.log(this.users)
    };
    EmployeesComponent.prototype.getEmployees = function () {
        var _this = this;
        var arr;
        this.auth.getAllUsers().subscribe(function (res) {
            //console.log(res)
            Object.values(res.data).forEach(function (aaa, index) {
                _this.userGroupService.getUserAppsGroups(aaa.email).subscribe(function (numofg) {
                    //console.log(numofg.data.length)
                    res.data[index]["groups_count"] = numofg.data.length;
                });
            });
            arr = res.data;
            _this.users = res.data;
            //console.log("user with group count",arr)
        });
        return arr;
    };
    EmployeesComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _configs_service__WEBPACK_IMPORTED_MODULE_3__["ConfigsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _user_group_service__WEBPACK_IMPORTED_MODULE_6__["UserGroupService"] }
    ]; };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        })
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(auth, snackbar) {
        this.auth = auth;
        this.snackbar = snackbar;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.resetPasswordRequest = function (data) {
        this.auth.verification_mail(data.email);
        this.snackbar.open("Password change link has been sent to " + data.email, "ok", {
            duration: 2000,
        });
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/group-details/group-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/group-details/group-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dropdown Button */\n.dropbtn {\n  margin-left: 5px;\n}\n/* Dropdown button on hover & focus */\n.dropbtn:hover, .dropbtn:focus {\n  background-color:#383b38;\n  color: white;\n}\n/* The search field */\n#myInput {\n  box-sizing: border-box;\n  background-position: 14px 12px;\n  background-repeat: no-repeat;\n  font-size: 16px;\n  padding: 14px 20px 12px 45px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n}\n/* The search field when it gets focus/clicked on */\n#myInput:focus {outline: 3px solid #ddd;}\n/* The container <div> - needed to position the dropdown content */\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n\n  position: absolute;\n  background-color: white;\n  width: 100%;\n  border: 1px solid #ddd;\n  z-index: 1;\n  margin-left:0px!important;\n  overflow-y:auto;\n}\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n/* Links inside the dropdown */\n#added-employees a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #f1f1f1}\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {display:block;}\nli {\n  margin-bottom: 5px;\n}\n.table td, .table th {\n    padding: .50rem;\n    vertical-align: middle !important;\n    border-top: 1px solid #dee2e6;\n}\n.product-pagination{\nposition: absolute;\nbottom:0px !important;\nright:5%;\n}\n.pagination-next{\n  -webkit-box-align: right !important;\n          align-items: right !important;\n}\ninput[type=\"text\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid gray;\n  border-radius: 0px;\n}\nlabel{\n\n}\n.list-group-item{\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid rgba(0,0,0,.125);\n}\nli{\n  margin-bottom: 0px!important;\n  padding-top: 0px!important;\n  padding-bottom: 0px!important;\n}\ninput[type=\"text\"],input[type=\"password\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid gray;\n  border-radius: 0px;\n}\n.group-list div:hover,.group-list div:focus{\nbackground-color: gray;\n  cursor: pointer;\n  color: #bb0117;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAtZGV0YWlscy9ncm91cC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUVBLG1EQUFtRDtBQUNuRCxnQkFBZ0IsdUJBQXVCLENBQUM7QUFFeEMsa0VBQWtFO0FBR2xFLHlDQUF5QztBQUN6Qzs7RUFFRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQSw0Q0FBNEM7QUFDNUMsMkJBQTJCLHlCQUF5QjtBQUVwRCxxSUFBcUk7QUFDckksT0FBTyxhQUFhLENBQUM7QUFDckI7RUFDRSxrQkFBa0I7QUFDcEI7QUFHQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsNkJBQTZCO0FBQ2pDO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLFFBQVE7QUFDUjtBQUNBO0VBQ0UsbUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxzQkFBc0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ncm91cC1kZXRhaWxzL2dyb3VwLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xuLmRyb3BidG4ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4vKiBEcm9wZG93biBidXR0b24gb24gaG92ZXIgJiBmb2N1cyAqL1xuLmRyb3BidG46aG92ZXIsIC5kcm9wYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMzgzYjM4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFRoZSBzZWFyY2ggZmllbGQgKi9cbiNteUlucHV0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTRweCAxMnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE0cHggMjBweCAxMnB4IDQ1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi8qIFRoZSBzZWFyY2ggZmllbGQgd2hlbiBpdCBnZXRzIGZvY3VzL2NsaWNrZWQgb24gKi9cbiNteUlucHV0OmZvY3VzIHtvdXRsaW5lOiAzcHggc29saWQgI2RkZDt9XG5cbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cblxuXG4vKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cbi5kcm9wZG93bi1jb250ZW50IHtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6MHB4IWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTphdXRvO1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbiNhZGRlZC1lbXBsb3llZXMgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjF9XG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgKHVzZSBKUyB0byBhZGQgdGhpcyBjbGFzcyB0byB0aGUgLmRyb3Bkb3duLWNvbnRlbnQgY29udGFpbmVyIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBidXR0b24pICovXG4uc2hvdyB7ZGlzcGxheTpibG9jazt9XG5saSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XG4gICAgcGFkZGluZzogLjUwcmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbn1cbi5wcm9kdWN0LXBhZ2luYXRpb257XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5ib3R0b206MHB4ICFpbXBvcnRhbnQ7XG5yaWdodDo1JTtcbn1cbi5wYWdpbmF0aW9uLW5leHR7XG4gIGFsaWduLWl0ZW1zOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5sYWJlbHtcblxufVxuLmxpc3QtZ3JvdXAtaXRlbXtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG59XG5saXtcbiAgbWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDBweCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHghaW1wb3J0YW50O1xufVxuaW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5ncm91cC1saXN0IGRpdjpob3ZlciwuZ3JvdXAtbGlzdCBkaXY6Zm9jdXN7XG5iYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjYmIwMTE3O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/group-details/group-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/group-details/group-details.component.ts ***!
  \**********************************************************/
/*! exports provided: GroupDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailsComponent", function() { return GroupDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroupDetailsComponent = /** @class */ (function () {
    function GroupDetailsComponent() {
    }
    GroupDetailsComponent.prototype.ngOnInit = function () {
    };
    GroupDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-details',
            template: __webpack_require__(/*! raw-loader!./group-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/group-details/group-details.component.html"),
            styles: [__webpack_require__(/*! ./group-details.component.css */ "./src/app/group-details/group-details.component.css")]
        })
    ], GroupDetailsComponent);
    return GroupDetailsComponent;
}());



/***/ }),

/***/ "./src/app/groups/groups.component.css":
/*!*********************************************!*\
  !*** ./src/app/groups/groups.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dropdown Button */\n.dropbtn {\n  margin-left: 5px;\n}\n/* Dropdown button on hover & focus */\n.dropbtn:hover, .dropbtn:focus {\n  background-color:#383b38;\n  color: white;\n}\n/* The search field */\n#myInput {\n  box-sizing: border-box;\n  background-position: 14px 12px;\n  background-repeat: no-repeat;\n  font-size: 16px;\n  padding: 14px 20px 12px 45px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n}\n/* The search field when it gets focus/clicked on */\n#myInput:focus {outline: 3px solid #ddd;}\n/* The container <div> - needed to position the dropdown content */\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n\n  position: absolute;\n  background-color: white;\n  width: 100%;\n  border: 1px solid #ddd;\n  z-index: 1;\n  margin-left:0px!important;\n  overflow-y:auto;\n}\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n/* Links inside the dropdown */\n#selected-employees a, #added-employees a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #f1f1f1}\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {display:block;}\nli {\n  margin-bottom: 5px;\n}\n.table td, .table th {\n    padding: .50rem;\n    vertical-align: middle !important;\n    border-top: 1px solid #dee2e6;\n}\n.product-pagination{\nposition: absolute;\nbottom:0px !important;\nright:5%;\n}\n.pagination-next{\n  -webkit-box-align: right !important;\n          align-items: right !important;\n}\ninput[type=\"text\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid gray;\n  border-radius: 0px;\n}\nlabel{\n\n}\n.list-group-item{\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid rgba(0,0,0,.125);\n}\nli{\n  margin-bottom: 0px!important;\n  padding-top: 0px!important;\n  padding-bottom: 0px!important;\n}\ninput[type=\"text\"],input[type=\"password\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid gray;\n  border-radius: 0px;\n}\n.group-list div:hover,.group-list div:focus{\nbackground-color: gray;\n  cursor: pointer;\n  color: #bb0117;\n}\n.group-list div i{\ncolor: gray;\n}\n.group-list div:hover i,.group-list div:focus i,.group-list div:hover .member-label{\ncolor: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBLHFDQUFxQztBQUNyQztFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFFQSxtREFBbUQ7QUFDbkQsZ0JBQWdCLHVCQUF1QixDQUFDO0FBRXhDLGtFQUFrRTtBQUdsRSx5Q0FBeUM7QUFDekM7O0VBRUUsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUEsNENBQTRDO0FBQzVDLDJCQUEyQix5QkFBeUI7QUFFcEQscUlBQXFJO0FBQ3JJLE9BQU8sYUFBYSxDQUFDO0FBQ3JCO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBR0E7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLDZCQUE2QjtBQUNqQztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixRQUFRO0FBQ1I7QUFDQTtFQUNFLG1DQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0Esc0JBQXNCO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVk7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xuLmRyb3BidG4ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4vKiBEcm9wZG93biBidXR0b24gb24gaG92ZXIgJiBmb2N1cyAqL1xuLmRyb3BidG46aG92ZXIsIC5kcm9wYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMzgzYjM4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFRoZSBzZWFyY2ggZmllbGQgKi9cbiNteUlucHV0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTRweCAxMnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE0cHggMjBweCAxMnB4IDQ1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi8qIFRoZSBzZWFyY2ggZmllbGQgd2hlbiBpdCBnZXRzIGZvY3VzL2NsaWNrZWQgb24gKi9cbiNteUlucHV0OmZvY3VzIHtvdXRsaW5lOiAzcHggc29saWQgI2RkZDt9XG5cbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cblxuXG4vKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cbi5kcm9wZG93bi1jb250ZW50IHtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6MHB4IWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTphdXRvO1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbiNzZWxlY3RlZC1lbXBsb3llZXMgYSwgI2FkZGVkLWVtcGxveWVlcyBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMX1cblxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSAodXNlIEpTIHRvIGFkZCB0aGlzIGNsYXNzIHRvIHRoZSAuZHJvcGRvd24tY29udGVudCBjb250YWluZXIgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGRyb3Bkb3duIGJ1dHRvbikgKi9cbi5zaG93IHtkaXNwbGF5OmJsb2NrO31cbmxpIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5cbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcbiAgICBwYWRkaW5nOiAuNTByZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuLnByb2R1Y3QtcGFnaW5hdGlvbntcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbmJvdHRvbTowcHggIWltcG9ydGFudDtcbnJpZ2h0OjUlO1xufVxuLnBhZ2luYXRpb24tbmV4dHtcbiAgYWxpZ24taXRlbXM6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbmxhYmVse1xuXG59XG4ubGlzdC1ncm91cC1pdGVte1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcbn1cbmxpe1xuICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMHB4IWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCFpbXBvcnRhbnQ7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmdyb3VwLWxpc3QgZGl2OmhvdmVyLC5ncm91cC1saXN0IGRpdjpmb2N1c3tcbmJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNiYjAxMTc7XG59XG4uZ3JvdXAtbGlzdCBkaXYgaXtcbmNvbG9yOiBncmF5O1xufVxuLmdyb3VwLWxpc3QgZGl2OmhvdmVyIGksLmdyb3VwLWxpc3QgZGl2OmZvY3VzIGksLmdyb3VwLWxpc3QgZGl2OmhvdmVyIC5tZW1iZXItbGFiZWx7XG5jb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: AddGroupModel, AddGroupMemberModal, GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupModel", function() { return AddGroupModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupMemberModal", function() { return AddGroupMemberModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs.service */ "./src/app/configs.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_group_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-group.service */ "./src/app/user-group.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");









var AddGroupModel = /** @class */ (function () {
    function AddGroupModel(modalService, activeModal, spinner, snackbar) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.spinner = spinner;
        this.snackbar = snackbar;
    }
    AddGroupModel.prototype.open = function () {
        this.modalService.open(AddGroupMemberModal, {
            size: 'lg'
        });
    };
    AddGroupModel.prototype.newGroupNameFun = function (name) {
        this.newGroupName = name;
        console.log("newGroupName", this.newGroupName);
        localStorage.setItem("newGroupName", this.newGroupName);
    };
    AddGroupModel.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
    ]; };
    AddGroupModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Add New Group</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n       <div class=\"from-group\">\n                                <label for=\"new-group-name\">Group Name</label>\n                                 <input name=\"newGroupName\" class=\"checkbox ml-2\" #newGroupName type=\"text\" (keyup)=\"newGroupNameFun(newGroupName.value)\" ngModel  required>\n                              </div>\n      <p><button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">Add Members</button></p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        })
    ], AddGroupModel);
    return AddGroupModel;
}());

var AddGroupMemberModal = /** @class */ (function () {
    function AddGroupMemberModal(activeModal, auth, userGroupService) {
        this.activeModal = activeModal;
        this.auth = auth;
        this.userGroupService = userGroupService;
        this.dropdownOpen = true;
        this.dorpdownClosed = false;
        this.selectedEmployee = Array();
        this.getAllUsers();
    }
    AddGroupMemberModal.prototype.getAllUsers = function () {
        var _this = this;
        this.auth.getAllUsers().subscribe(function (data) {
            _this.allusers = data;
            console.log("add member allusers", _this.allusers);
        });
    };
    AddGroupMemberModal.prototype.toggleDropdown = function () {
        this.dropdownOpen = !this.dropdownOpen;
        this.dorpdownClosed = !this.dorpdownClosed;
    };
    AddGroupMemberModal.prototype.onSelectedEmployee = function (user) {
        this.selectedEmployee.push(user);
        //console.log(user)
    };
    AddGroupMemberModal.prototype.addGroupWithUsers = function () {
        var e_1, _a;
        var groupname = localStorage.getItem("newGroupName");
        var users = Array();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selectedEmployee), _c = _b.next(); !_c.done; _c = _b.next()) {
                var emp = _c.value;
                users.push(emp.email);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var aaa = { group_name: groupname, ass_emps: users };
        console.log("json group data", aaa);
        this.userGroupService.addUserGroup(groupname, users).subscribe(function (res) { return console.log("group added", groupname); });
    };
    AddGroupMemberModal.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _user_group_service__WEBPACK_IMPORTED_MODULE_5__["UserGroupService"] }
    ]; };
    AddGroupMemberModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n    <button *ngIf=\"!dorpdownClosed\"  id=\"hide-dropdown\" class=\"brn btn-primary form-control\" onclick=\"$('#myDropdown').toggle('show');\">Done</button>\n      <div id=\"myDropdown\" class=\"dropdown-content\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"Search..\" id=\"myInput\" onkeyup=\"filterFunction()\">\n          <a *ngFor=\"let user of allusers\" >\n          <input class=\"checkbox\" (click)=\"onSelectedEmployee(user)\" type=\"checkbox\"  name=\"agreement\">\n          <img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{user.profile_picture}}\" height=\"30px\" width=\"30px\"> {{user.first_name}} {{user.last_name}}</a>\n      </div>\n      <div id=\"added-employees\">\n           <a *ngFor=\"let user of selectedEmployee\" >\n          <input class=\"checkbox\" (click)=\"onSelectedEmployee(user)\" type=\"checkbox\"  name=\"agreement\">\n          <img style=\"border:1px solid gray;border-radius: 50%;\" src=\"{{user.profile_picture}}\" height=\"30px\" width=\"30px\"> {{user.first_name}} {{user.last_name}}</a>\n\n      </div>\n\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n      <button class=\"btn btn-danger\" (click)=\"addGroupWithUsers()\">Create and Add</button>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")]
        })
    ], AddGroupMemberModal);
    return AddGroupMemberModal;
}());

var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(modalService, configs, route, router, auth, userGroupService, snackbar, spinner) {
        this.modalService = modalService;
        this.configs = configs;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.userGroupService = userGroupService;
        this.snackbar = snackbar;
        this.spinner = spinner;
        this.groups = [
            {
                "group_name": "ghfgj",
                "members": [
                    {
                        "first_name": "abc",
                        "last_name": "vvv",
                        "email": "abc@gdhd.com",
                        "emp_id": 3684694,
                        "phone": 7493684694,
                        "groups_count": 6,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "fgrdt",
                        "last_name": "vrtgertvv",
                        "email": "ertertert@gdhd.com",
                        "emp_id": 345345,
                        "phone": 749345346,
                        "groups_count": 3,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "drgteryt",
                        "last_name": "eryeryery",
                        "email": "dfhdhdfh@gdhd.com",
                        "emp_id": 46456,
                        "phone": 436457,
                        "groups_count": 2,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "fgrdt",
                        "last_name": "vrtgertvv",
                        "email": "ertertert@gdhd.com",
                        "emp_id": 345345,
                        "phone": 749345346,
                        "groups_count": 3,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "drgteryt",
                        "last_name": "eryeryery",
                        "email": "dfhdhdfh@gdhd.com",
                        "emp_id": 46456,
                        "phone": 436457,
                        "groups_count": 2,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    }
                ]
            },
            {
                "group_name": "fgjhfgj",
                "members": [
                    {
                        "first_name": "abc",
                        "last_name": "vvv",
                        "email": "abc@gdhd.com",
                        "emp_id": 3684694,
                        "phone": 7493684694,
                        "groups_count": 6,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "fgrdt",
                        "last_name": "vrtgertvv",
                        "email": "ertertert@gdhd.com",
                        "emp_id": 345345,
                        "phone": 749345346,
                        "groups_count": 3,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "drgteryt",
                        "last_name": "eryeryery",
                        "email": "dfhdhdfh@gdhd.com",
                        "emp_id": 46456,
                        "phone": 436457,
                        "groups_count": 2,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "fgrdt",
                        "last_name": "vrtgertvv",
                        "email": "ertertert@gdhd.com",
                        "emp_id": 345345,
                        "phone": 749345346,
                        "groups_count": 3,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "drgteryt",
                        "last_name": "eryeryery",
                        "email": "dfhdhdfh@gdhd.com",
                        "emp_id": 46456,
                        "phone": 436457,
                        "groups_count": 2,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    }
                ]
            },
            {
                "group_name": "wwrchgdfjhfk",
                "members": [
                    {
                        "first_name": "abc",
                        "last_name": "vvv",
                        "email": "abc@gdhd.com",
                        "emp_id": 3684694,
                        "phone": 7493684694,
                        "groups_count": 6,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "fgrdt",
                        "last_name": "vrtgertvv",
                        "email": "ertertert@gdhd.com",
                        "emp_id": 345345,
                        "phone": 749345346,
                        "groups_count": 3,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "drgteryt",
                        "last_name": "eryeryery",
                        "email": "dfhdhdfh@gdhd.com",
                        "emp_id": 46456,
                        "phone": 436457,
                        "groups_count": 2,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "fgrdt",
                        "last_name": "vrtgertvv",
                        "email": "ertertert@gdhd.com",
                        "emp_id": 345345,
                        "phone": 749345346,
                        "groups_count": 3,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "drgteryt",
                        "last_name": "eryeryery",
                        "email": "dfhdhdfh@gdhd.com",
                        "emp_id": 46456,
                        "phone": 436457,
                        "groups_count": 2,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    }
                ]
            },
            {
                "group_name": "fgjfghjkgjh",
                "members": [
                    {
                        "first_name": "abc",
                        "last_name": "vvv",
                        "email": "abc@gdhd.com",
                        "emp_id": 3684694,
                        "phone": 7493684694,
                        "groups_count": 6,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "fgrdt",
                        "last_name": "vrtgertvv",
                        "email": "ertertert@gdhd.com",
                        "emp_id": 345345,
                        "phone": 749345346,
                        "groups_count": 3,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "drgteryt",
                        "last_name": "eryeryery",
                        "email": "dfhdhdfh@gdhd.com",
                        "emp_id": 46456,
                        "phone": 436457,
                        "groups_count": 2,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "fgrdt",
                        "last_name": "vrtgertvv",
                        "email": "ertertert@gdhd.com",
                        "emp_id": 345345,
                        "phone": 749345346,
                        "groups_count": 3,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    },
                    {
                        "first_name": "drgteryt",
                        "last_name": "eryeryery",
                        "email": "dfhdhdfh@gdhd.com",
                        "emp_id": 46456,
                        "phone": 436457,
                        "groups_count": 2,
                        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                    }
                ]
            }
        ];
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userGroupService.getAllGroupsWithAllMembers().subscribe(function (res) {
            var e_2, _a;
            _this.groupFromServer = res;
            //console.log("all groups with members",this.groupFromServer);
            var arr = Array();
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.groupFromServer), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var group = _c.value;
                    var data = { group_name: group.group_name, number_of_members: group.ass_emps.length };
                    arr.push(data);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.mygroups = arr;
            //console.log("mygroup data",this.mygroups)
            _this.groups = _this.getMembersDataOfGroup();
            //this.isAdmin=this.user_groups.includes("admin")
            _this.selected_group_index = 0;
        });
        this.getAllUsers();
        if (this.selected_group_index == null) {
            this.selected_group_name = this.groups[0].group_name;
        }
        this.selected_group = this.groups[this.selected_group_index];
        this.onSelectedGroup(this.selected_group_name);
    };
    GroupsComponent.prototype.onSelectedGroup = function (name) {
        this.selected_group_name = name;
        this.selected_group_index = this.groups.findIndex(function (item, i) {
            return item.group_name === name;
        });
        this.selected_group = this.groups[this.selected_group_index];
    };
    GroupsComponent.prototype.getMembersDataOfGroup = function () {
        var _this = this;
        var e_3, _a;
        //console.log("group from server",this.groupFromServer);
        var arr = Array();
        var _loop_1 = function (g) {
            list = g.ass_emps;
            this_1.auth.getGroupUserData(list).subscribe(function (res) {
                //console.log("group members user data",res);
                Object.values(res).forEach(function (aaa, index) {
                    _this.userGroupService.getUserAppsGroups(aaa.email).subscribe(function (numofg) { return res[index]["groups_count"] = numofg.data.length; });
                });
                arr.push({ "group_name": g.group_name, "members": res });
            });
        };
        var this_1 = this, list;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.groupFromServer), _c = _b.next(); !_c.done; _c = _b.next()) {
                var g = _c.value;
                _loop_1(g);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        //console.log("arr",arr)
        return arr;
    };
    GroupsComponent.prototype.onSelectedMember = function (data) {
    };
    GroupsComponent.prototype.addNewGroup = function () {
        this.router.navigate(['add_group']);
    };
    GroupsComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.auth.getAllUsers().subscribe(function (data) {
            _this.allusers = data;
            //console.log(this.allusers)
        });
    };
    GroupsComponent.prototype.openAddGroupModal = function () {
        this.modalService.open(AddGroupModel);
    };
    GroupsComponent.prototype.deleteGroup = function () {
        var _this = this;
        this.spinner.show();
        //console.log("selected_group",this.selected_group_name)
        this.userGroupService.deleteGroup(this.selected_group_name).subscribe(function (res) {
            _this.spinner.hide();
            _this.snackbar.open("Group deleted.", "ok", {
                duration: 2000,
            });
        });
    };
    GroupsComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
        { type: _configs_service__WEBPACK_IMPORTED_MODULE_2__["ConfigsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _user_group_service__WEBPACK_IMPORTED_MODULE_5__["UserGroupService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
    ]; };
    GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! raw-loader!./groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")]
        })
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dropdown Button */\n.dropbtn {\n  margin-left: 5px;\n}\n/* Dropdown button on hover & focus */\n.dropbtn:hover, .dropbtn:focus {\n  background-color:#383b38;\n  color: white;\n}\n/* The search field */\n#myInput {\n  box-sizing: border-box;\n  background-position: 14px 12px;\n  background-repeat: no-repeat;\n  font-size: 16px;\n  padding: 14px 20px 12px 45px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n}\n/* The search field when it gets focus/clicked on */\n#myInput:focus {outline: 3px solid #ddd;}\n/* The container <div> - needed to position the dropdown content */\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f6f6f6;\n  min-width: 230px;\n  border: 1px solid #ddd;\n  z-index: 1;\n}\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #f1f1f1}\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {display:block;}\nli {\n  margin-bottom: 5px;\n}\n.table td, .table th {\n    padding: .50rem;\n    vertical-align: middle !important;\n    border-top: 1px solid #dee2e6;\n}\n.product-pagination{\nposition: absolute;\nbottom:0px !important;\nright:5%;\n}\n.pagination-next{\n  -webkit-box-align: right !important;\n          align-items: right !important;\n}\n#myDropdown{\n  height: 40vh;\n  max-height: 50vh;\n  overflow-y:scroll;\n}\ninput[type=\"text\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid gray;\n  border-radius: 0px;\n}\nlabel{\n\n}\n.list-group-item{\n  border: none!important;\n}\nli{\n  margin-bottom: 0px!important;\n  padding-top: 0px!important;\n  padding-bottom: 0px!important;\n}\ninput[type=\"text\"],input[type=\"password\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid gray;\n  border-radius: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUVBLG1EQUFtRDtBQUNuRCxnQkFBZ0IsdUJBQXVCLENBQUM7QUFFeEMsa0VBQWtFO0FBR2xFLHlDQUF5QztBQUN6QztFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUVBLDRDQUE0QztBQUM1QywyQkFBMkIseUJBQXlCO0FBRXBELHFJQUFxSTtBQUNySSxPQUFPLGFBQWEsQ0FBQztBQUNyQjtFQUNFLGtCQUFrQjtBQUNwQjtBQUdBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyw2QkFBNkI7QUFDakM7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsUUFBUTtBQUNSO0FBQ0E7RUFDRSxtQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEcm9wZG93biBCdXR0b24gKi9cbi5kcm9wYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLyogRHJvcGRvd24gYnV0dG9uIG9uIGhvdmVyICYgZm9jdXMgKi9cbi5kcm9wYnRuOmhvdmVyLCAuZHJvcGJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IzM4M2IzODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUaGUgc2VhcmNoIGZpZWxkICovXG4jbXlJbnB1dCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE0cHggMTJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNHB4IDIwcHggMTJweCA0NXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4vKiBUaGUgc2VhcmNoIGZpZWxkIHdoZW4gaXQgZ2V0cyBmb2N1cy9jbGlja2VkIG9uICovXG4jbXlJbnB1dDpmb2N1cyB7b3V0bGluZTogM3B4IHNvbGlkICNkZGQ7fVxuXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXG5cblxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgbWluLXdpZHRoOiAyMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgei1pbmRleDogMTtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjF9XG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgKHVzZSBKUyB0byBhZGQgdGhpcyBjbGFzcyB0byB0aGUgLmRyb3Bkb3duLWNvbnRlbnQgY29udGFpbmVyIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBidXR0b24pICovXG4uc2hvdyB7ZGlzcGxheTpibG9jazt9XG5saSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XG4gICAgcGFkZGluZzogLjUwcmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbn1cbi5wcm9kdWN0LXBhZ2luYXRpb257XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5ib3R0b206MHB4ICFpbXBvcnRhbnQ7XG5yaWdodDo1JTtcbn1cbi5wYWdpbmF0aW9uLW5leHR7XG4gIGFsaWduLWl0ZW1zOiByaWdodCAhaW1wb3J0YW50O1xufVxuI215RHJvcGRvd257XG4gIGhlaWdodDogNDB2aDtcbiAgbWF4LWhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5sYWJlbHtcblxufVxuLmxpc3QtZ3JvdXAtaXRlbXtcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbn1cbmxpe1xuICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMHB4IWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCFpbXBvcnRhbnQ7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _configs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs.service */ "./src/app/configs.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-group.service */ "./src/app/user-group.service.ts");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(data, configs, route, router, auth, userGroupService) {
        this.data = data;
        this.configs = configs;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.userGroupService = userGroupService;
        this.product_details = {
            "product_id": "gsdjghsdjf",
            "product_type": "phone",
            "product_name": "abc",
            "description": "abc@gdhd.com",
            "associated_groups": [
                {
                    "group_name": "aaa",
                    "members": [
                        {
                            "first_name": "abc",
                            "last_name": "vvv",
                            "email": "abc@gdhd.com",
                            "emp_id": 3684694,
                            "phone": 7493684694,
                            "groups_count": 6,
                            "profile_picture": "https://bestindiandeals.net/wp-content/uploads/2018/06/cool-profile-picture-300x219.jpg",
                        },
                        {
                            "first_name": "fgrdt",
                            "last_name": "vrtgertvv",
                            "email": "ertertert@gdhd.com",
                            "emp_id": 345345,
                            "phone": 749345346,
                            "groups_count": 3,
                            "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                        },
                        {
                            "first_name": "drgteryt",
                            "last_name": "eryeryery",
                            "email": "dfhdhdfh@gdhd.com",
                            "emp_id": 46456,
                            "phone": 436457,
                            "groups_count": 2,
                            "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                        }
                    ]
                }, {
                    "group_name": "sssshjd",
                    "members": []
                }, {
                    "group_name": "ghjsdg",
                    "members": []
                }
            ],
            "groups_count": 6,
            "branch_config": {
                "application_path": "http://www.application.com",
                "communication_path": "http://www.communication.com"
            },
            "product_picture": "https://bestindiandeals.net/wp-content/uploads/2018/06/cool-profile-picture-300x219.jpg",
        };
        this.isEditProfileDetails = false;
        this.isEditCred = false;
        this.getData();
    }
    HomeComponent.prototype.ngOnInit = function () {
        //console.log("is authenticated",this.auth.isAuthenticated())
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
        }
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        var res = localStorage.getItem("userdata");
        //console.log(res);
        this.employee = JSON.parse(res);
        //console.log(this.employee);
        this.userGroupService.getUserAppsGroups(this.employee.email).subscribe(function (res) {
            _this.user_groups = res.data;
            _this.userGroupService.isAdmin = _this.isAdmin;
            //console.log("user groups",this.user_groups);
            //this.isAdmin=this.user_groups.includes("admin")
        });
        //  .subscribe(data=>{
        //  this.user_groups=data;
        //  });
        //localStorage.setItem("usergroups",this.user_groups);
        this.configs.getUserAppsConfigs(this.employee.email).subscribe(function (data) {
            _this.credentials = data;
            //console.log("user credentials",this.credentials);
        });
    };
    HomeComponent.prototype.toggleEditProfile = function () {
        this.isEditProfileDetails = !this.isEditProfileDetails;
    };
    HomeComponent.prototype.toggleEditCred = function () {
        this.isEditCred = !this.isEditCred;
    };
    HomeComponent.prototype.editProfileSubmit = function (formdata) {
        var _this = this;
        var data = formdata;
        data["email"] = this.employee.email;
        //console.log(formdata);
        this.auth.update_account_details(formdata).subscribe(function (res) {
            if (res.status == 200) {
                _this.employee = res;
            }
        });
    };
    HomeComponent.prototype.credSubmit = function (formdata) {
        var _this = this;
        //console.log(formdata);
        var data;
        this.configs.saveUserCredentials(formdata.app_name, formdata.user, formdata.username, formdata.password).subscribe(function (data) { return _this.data = data; });
        //console.log("saved cred",data);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _configs_service__WEBPACK_IMPORTED_MODULE_3__["ConfigsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _user_group_service__WEBPACK_IMPORTED_MODULE_6__["UserGroupService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"text\"],input[type=\"password\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid black;\n  border-radius: 0px;\n\n}\na{\npointer:cursor;\n}\n#body-row{\nheight:100vh;\nbackground-color:black;\nfont-size:12px;\n\n}\n#login-container{\nbackground-color:white;\n  border-radius: 5px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixrQkFBa0I7O0FBRXBCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsY0FBYzs7QUFFZDtBQUNBO0FBQ0Esc0JBQXNCO0VBQ3BCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcblxufVxuYXtcbnBvaW50ZXI6Y3Vyc29yO1xufVxuI2JvZHktcm93e1xuaGVpZ2h0OjEwMHZoO1xuYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbmZvbnQtc2l6ZToxMnB4O1xuXG59XG4jbG9naW4tY29udGFpbmVye1xuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(data, route, router, auth, spinner, titleService, snackbar) {
        this.data = data;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.spinner = spinner;
        this.titleService = titleService;
        this.snackbar = snackbar;
    }
    LoginComponent.prototype.ngOnInit = function () {
        //console.log("is authenticated",this.auth.isAuthenticated())
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['home']);
        }
    };
    LoginComponent.prototype.login = function (data) {
        var _this = this;
        //console.log("logging in");
        this.spinner.show();
        //console.log(data);
        this.auth.user_login(data.email, data.password).subscribe(function (res) {
            _this.data.setUserData(res);
            _this.spinner.hide();
            var response = JSON.parse(JSON.stringify(res.body));
            //console.log("res status",response)
            if (response.status === 200) {
                _this.router.navigate(['home']);
            }
            else if (response.status === 401) {
                _this.snackbar.open("You Entered Wrong Password.", "ok", {
                    duration: 2000,
                });
            }
            else if (response.status === 404) {
                _this.snackbar.open("No Such User.", "ok", {
                    duration: 2000,
                });
            }
            //   }
            //   ,
            //   (error) => {
            //    this.spinner.hide();
            //     if(error.status===401){
            //         this.snackbar.open("You Entered Wrong Password.", "ok", {
            //       duration: 2000,
            //     });
            //     }
            //     if(error.status===404){
            //         this.snackbar.open("No Such User.", "ok", {
            //       duration: 2000,
            //     });
            //     }
            //      console.log("http error",error.error);
        });
        //console.log(data);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\n    left: -80% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUge1xuICAgIGxlZnQ6IC04MCUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var NavComponent = /** @class */ (function () {
    function NavComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.logged_in = this.auth.isAuthenticated();
        if (this.logged_in) {
            this.user_data = JSON.parse(localStorage.getItem("userdata"));
        }
    };
    NavComponent.prototype.logout = function () {
        var sessionid = localStorage.getItem('sessionid');
        this.auth.logout(sessionid);
        //console.log("logged out");
        this.router.navigate(["/login"]);
    };
    NavComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dropdown Button */\n.dropbtn {\n  margin-left: 5px;\n}\n/* Dropdown button on hover & focus */\n.dropbtn:hover, .dropbtn:focus {\n  background-color:#383b38;\n  color: white;\n}\n/* The search field */\n#myInput {\n  box-sizing: border-box;\n  background-position: 14px 12px;\n  background-repeat: no-repeat;\n  font-size: 16px;\n  padding: 14px 20px 12px 45px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n}\n/* The search field when it gets focus/clicked on */\n#myInput:focus {outline: 3px solid #ddd;}\n/* The container <div> - needed to position the dropdown content */\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f6f6f6;\n  min-width: 230px;\n  border: 1px solid #ddd;\n  z-index: 1;\n}\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #f1f1f1}\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {display:block;}\nli {\n  margin-bottom: 5px;\n}\n.table td, .table th {\n    padding: .50rem;\n    vertical-align: middle !important;\n    border-top: 1px solid #dee2e6;\n}\n.product-pagination{\nposition: absolute;\nbottom:0px !important;\nright:5%;\n}\n.pagination-next{\n  -webkit-box-align: right !important;\n          align-items: right !important;\n}\n#myDropdown{\n  height: 40vh;\n  max-height: 50vh;\n  overflow-y:scroll;\n}\ninput[type=\"text\"],input[type=\"password\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid gray;\n  border-radius: 0px;\n}\n.user-group-list li:hover,.user-group-list li:focus{\nbackground-color: gray;\n}\n.user-group-list>li a,.user-group-list>li a{\ndisplay: none;\n}\n.user-group-list li:hover a,.user-group-list li:focus a{\ndisplay: block;\ncursor: pointer;\n}\n.user-group-list li:hover input[type='checkbox'],.user-group-list li:focus input[type='checkbox']{\ndisplay: block;\ncursor: pointer;\n}\n.list-group-item, .list-group-item:hover{ z-index: auto; }\ninput[type='radio'] {\n        -webkit-appearance: none;\n        width: 15px;\n        height: 15px;\n        border-radius: 50%;\n        outline: none;\n        border: 3px solid gray;\n    }\ninput[type='radio']:before {\n        content: '';\n        display: block;\n        width: 60%;\n        height: 60%;\n        margin: 20% auto;\n        border-radius: 50%;\n    }\ninput[type=\"radio\"]:checked:before {\n        background: #d50000;\n\n    }\ninput[type=\"radio\"]:checked {\n      border-color:#d50000;\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBLHFDQUFxQztBQUNyQztFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFFQSxtREFBbUQ7QUFDbkQsZ0JBQWdCLHVCQUF1QixDQUFDO0FBRXhDLGtFQUFrRTtBQUdsRSx5Q0FBeUM7QUFDekM7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQSw0Q0FBNEM7QUFDNUMsMkJBQTJCLHlCQUF5QjtBQUVwRCxxSUFBcUk7QUFDckksT0FBTyxhQUFhLENBQUM7QUFDckI7RUFDRSxrQkFBa0I7QUFDcEI7QUFHQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsNkJBQTZCO0FBQ2pDO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLFFBQVE7QUFDUjtBQUNBO0VBQ0UsbUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsZUFBZTtBQUNmO0FBRUE7QUFDQSxjQUFjO0FBQ2QsZUFBZTtBQUNmO0FBQ0EsMENBQTBDLGFBQWEsRUFBRTtBQUV6RDtRQUNRLHdCQUF3QjtRQUN4QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0FBRUE7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLFVBQVU7UUFDVixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtBQUVIO1FBQ08sbUJBQW1COztJQUV2QjtBQUVBO01BQ0Usb0JBQW9CO0lBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRHJvcGRvd24gQnV0dG9uICovXG4uZHJvcGJ0biB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi8qIERyb3Bkb3duIGJ1dHRvbiBvbiBob3ZlciAmIGZvY3VzICovXG4uZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzODNiMzg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogVGhlIHNlYXJjaCBmaWVsZCAqL1xuI215SW5wdXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTRweCAyMHB4IDEycHggNDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLyogVGhlIHNlYXJjaCBmaWVsZCB3aGVuIGl0IGdldHMgZm9jdXMvY2xpY2tlZCBvbiAqL1xuI215SW5wdXQ6Zm9jdXMge291dGxpbmU6IDNweCBzb2xpZCAjZGRkO31cblxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xuXG5cbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIG1pbi13aWR0aDogMjMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxfVxuXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51ICh1c2UgSlMgdG8gYWRkIHRoaXMgY2xhc3MgdG8gdGhlIC5kcm9wZG93bi1jb250ZW50IGNvbnRhaW5lciB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gYnV0dG9uKSAqL1xuLnNob3cge2Rpc3BsYXk6YmxvY2s7fVxubGkge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cblxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICAgIHBhZGRpbmc6IC41MHJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4ucHJvZHVjdC1wYWdpbmF0aW9ue1xucG9zaXRpb246IGFic29sdXRlO1xuYm90dG9tOjBweCAhaW1wb3J0YW50O1xucmlnaHQ6NSU7XG59XG4ucGFnaW5hdGlvbi1uZXh0e1xuICBhbGlnbi1pdGVtczogcmlnaHQgIWltcG9ydGFudDtcbn1cbiNteURyb3Bkb3due1xuICBoZWlnaHQ6IDQwdmg7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93LXk6c2Nyb2xsO1xufVxuaW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi51c2VyLWdyb3VwLWxpc3QgbGk6aG92ZXIsLnVzZXItZ3JvdXAtbGlzdCBsaTpmb2N1c3tcbmJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG4udXNlci1ncm91cC1saXN0PmxpIGEsLnVzZXItZ3JvdXAtbGlzdD5saSBhe1xuZGlzcGxheTogbm9uZTtcbn1cbi51c2VyLWdyb3VwLWxpc3QgbGk6aG92ZXIgYSwudXNlci1ncm91cC1saXN0IGxpOmZvY3VzIGF7XG5kaXNwbGF5OiBibG9jaztcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXItZ3JvdXAtbGlzdCBsaTpob3ZlciBpbnB1dFt0eXBlPSdjaGVja2JveCddLC51c2VyLWdyb3VwLWxpc3QgbGk6Zm9jdXMgaW5wdXRbdHlwZT0nY2hlY2tib3gnXXtcbmRpc3BsYXk6IGJsb2NrO1xuY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpc3QtZ3JvdXAtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbTpob3Zlcnsgei1pbmRleDogYXV0bzsgfVxuXG5pbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyYXk7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT0ncmFkaW8nXTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICBtYXJnaW46IDIwJSBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Q1MDAwMDtcblxuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIHtcbiAgICAgIGJvcmRlci1jb2xvcjojZDUwMDAwO1xuICAgIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-group.service */ "./src/app/user-group.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");








var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(route, productService, spinner, snackbar, userGroupService, auth) {
        this.route = route;
        this.productService = productService;
        this.spinner = spinner;
        this.snackbar = snackbar;
        this.userGroupService = userGroupService;
        this.auth = auth;
        this.product_details = {
            "product_id": "gsdjghsdjf",
            "product_type": "phone",
            "product_name": "abc",
            "description": "abc@gdhd.com",
            "associated_groups": [
                {
                    "group_name": "aaa",
                    "members": [
                        {
                            "first_name": "abc",
                            "last_name": "vvv",
                            "email": "abc@gdhd.com",
                            "emp_id": 3684694,
                            "phone": 7493684694,
                            "groups_count": 6,
                            "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                        },
                        {
                            "first_name": "fgrdt",
                            "last_name": "vrtgertvv",
                            "email": "ertertert@gdhd.com",
                            "emp_id": 345345,
                            "phone": 749345346,
                            "groups_count": 3,
                            "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                        },
                        {
                            "first_name": "drgteryt",
                            "last_name": "eryeryery",
                            "email": "dfhdhdfh@gdhd.com",
                            "emp_id": 46456,
                            "phone": 436457,
                            "groups_count": 2,
                            "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hW4RqfgehYPGCdCeuWFsNhu-nDj_HGMzpavflfPUst1f_7FNfQ",
                        }
                    ]
                }, {
                    "group_name": "sssshjd",
                    "members": []
                }, {
                    "group_name": "ghjsdg",
                    "members": []
                }
            ],
            "groups_count": 6,
            "branch_config": {
                "application_path": "http://www.application.com",
                "communication_path": "http://www.communication.com"
            },
            "product_picture": "https://ss7.vzw.com/is/image/VerizonWireless/iPhoneX-Svr?$device-lg$",
        };
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            console.log(params); // {order: "popular"}
            _this.aaaa = params.product_id;
            console.log(_this.aaaa); // popular
            _this.productService.getAproduct(_this.aaaa).subscribe(function (res) {
                var e_1, _a;
                _this.product_details = res;
                console.log("product details", _this.product_details);
                var all_user_groups_with_members = new Array();
                var g = res.groups;
                var _loop_1 = function (e) {
                    _this.userGroupService.getGroupWithMembers(e).subscribe(function (res1) {
                        console.log("this users group coleagues res1", res1);
                        var usersarray = res1.ass_emps;
                        _this.auth.getGroupUserData(usersarray).subscribe(function (res2) {
                            console.log("this users group coleagues res2", res2);
                            all_user_groups_with_members.push({ "group_name": e, "ass_emps": res2 });
                        });
                    });
                };
                try {
                    for (var g_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](g), g_1_1 = g_1.next(); !g_1_1.done; g_1_1 = g_1.next()) {
                        var e = g_1_1.value;
                        _loop_1(e);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (g_1_1 && !g_1_1.done && (_a = g_1.return)) _a.call(g_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.groups_with_members = all_user_groups_with_members;
                console.log("sadsdf", _this.groups_with_members);
            });
        });
    };
    ProductDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _user_group_service__WEBPACK_IMPORTED_MODULE_4__["UserGroupService"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
        })
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");





var ProductService = /** @class */ (function () {
    function ProductService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.BASE_PRODUCT_URL = "http://192.168.1.200:83/products";
    }
    ProductService.prototype.getAllProducts = function () {
        var url = this.BASE_PRODUCT_URL;
        return this.http.get(url);
    };
    ProductService.prototype.addProduct = function (data) {
        //console.log('product--->>>', data)
        var url = this.BASE_PRODUCT_URL;
        //   Object.keys().forEach(key => {
        //   //console.log("form data",data[key])
        //     formData.append(key, data[key]);
        //   });
        //   let imagefile=new File("../assest/bitbucket.png")
        //   formData.set("image",fileReader.readAsText(imagefile))
        //   console.log("form data",data)
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        //console.log('url@@', url);
        return this.http.post(url, data, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
            //console.log('response', resp);
            return resp;
        }));
    };
    ProductService.prototype.getAproduct = function (product_id) {
        var url = this.BASE_PRODUCT_URL + "?product_id=" + product_id;
        return this.http.get(url);
    };
    ProductService.prototype.getProductByGroup = function (group_name) {
        var url = this.BASE_PRODUCT_URL + "/get_product_by_group_name?group_name=" + group_name;
        return this.http.get(url);
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dropdown Button */\n.dropbtn {\n  margin-left: 5px;\n}\n/* Dropdown button on hover & focus */\n.dropbtn:hover, .dropbtn:focus {\n  background-color:#383b38;\n  color: white;\n}\n/* The search field */\n#myInput {\n  box-sizing: border-box;\n  background-position: 14px 12px;\n  background-repeat: no-repeat;\n  font-size: 16px;\n  padding: 14px 20px 12px 45px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n}\n/* The search field when it gets focus/clicked on */\n#myInput:focus {outline: 3px solid #ddd;}\n/* The container <div> - needed to position the dropdown content */\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f6f6f6;\n  min-width: 230px;\n  border: 1px solid #ddd;\n  z-index: 1;\n}\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #f1f1f1}\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {display:block;}\nli {\n  margin-bottom: 5px;\n}\n.table td, .table th {\n    padding: .50rem;\n    vertical-align: middle !important;\n    border-top: 1px solid #dee2e6;\n}\n.product-pagination{\nposition: absolute;\nbottom:0px !important;\nright:5%;\n}\n.pagination-next{\n  -webkit-box-align: right !important;\n          align-items: right !important;\n}\n#myDropdown{\n  height: 40vh;\n  max-height: 50vh;\n  overflow-y:scroll;\n}\n.userlist-row{\n    cursor:pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUVBLG1EQUFtRDtBQUNuRCxnQkFBZ0IsdUJBQXVCLENBQUM7QUFFeEMsa0VBQWtFO0FBR2xFLHlDQUF5QztBQUN6QztFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUVBLDRDQUE0QztBQUM1QywyQkFBMkIseUJBQXlCO0FBRXBELHFJQUFxSTtBQUNySSxPQUFPLGFBQWEsQ0FBQztBQUNyQjtFQUNFLGtCQUFrQjtBQUNwQjtBQUdBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyw2QkFBNkI7QUFDakM7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsUUFBUTtBQUNSO0FBQ0E7RUFDRSxtQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRHJvcGRvd24gQnV0dG9uICovXG4uZHJvcGJ0biB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi8qIERyb3Bkb3duIGJ1dHRvbiBvbiBob3ZlciAmIGZvY3VzICovXG4uZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzODNiMzg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogVGhlIHNlYXJjaCBmaWVsZCAqL1xuI215SW5wdXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTRweCAyMHB4IDEycHggNDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLyogVGhlIHNlYXJjaCBmaWVsZCB3aGVuIGl0IGdldHMgZm9jdXMvY2xpY2tlZCBvbiAqL1xuI215SW5wdXQ6Zm9jdXMge291dGxpbmU6IDNweCBzb2xpZCAjZGRkO31cblxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xuXG5cbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIG1pbi13aWR0aDogMjMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxfVxuXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51ICh1c2UgSlMgdG8gYWRkIHRoaXMgY2xhc3MgdG8gdGhlIC5kcm9wZG93bi1jb250ZW50IGNvbnRhaW5lciB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gYnV0dG9uKSAqL1xuLnNob3cge2Rpc3BsYXk6YmxvY2s7fVxubGkge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cblxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICAgIHBhZGRpbmc6IC41MHJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4ucHJvZHVjdC1wYWdpbmF0aW9ue1xucG9zaXRpb246IGFic29sdXRlO1xuYm90dG9tOjBweCAhaW1wb3J0YW50O1xucmlnaHQ6NSU7XG59XG4ucGFnaW5hdGlvbi1uZXh0e1xuICBhbGlnbi1pdGVtczogcmlnaHQgIWltcG9ydGFudDtcbn1cbiNteURyb3Bkb3due1xuICBoZWlnaHQ6IDQwdmg7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93LXk6c2Nyb2xsO1xufVxuLnVzZXJsaXN0LXJvd3tcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");





var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, spinner, snackbar) {
        this.productService = productService;
        this.spinner = spinner;
        this.snackbar = snackbar;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        this.productService.getAllProducts().subscribe(function (res) {
            _this.products = res;
            //console.log("product res",res)
            _this.spinner.hide();
            return res;
        });
    };
    ProductComponent.ctorParameters = function () { return [
        { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        })
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/setpassword/setpassword.component.css":
/*!*******************************************************!*\
  !*** ./src/app/setpassword/setpassword.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"text\"],input[type=\"password\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid black;\n  border-radius: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0cGFzc3dvcmQvc2V0cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zZXRwYXNzd29yZC9zZXRwYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/setpassword/setpassword.component.ts":
/*!******************************************************!*\
  !*** ./src/app/setpassword/setpassword.component.ts ***!
  \******************************************************/
/*! exports provided: SetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetpasswordComponent", function() { return SetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SetpasswordComponent = /** @class */ (function () {
    function SetpasswordComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
    }
    SetpasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            //console.log(params); // {order: "popular"}
            _this.user_email = params.email;
            //console.log(this.user_email); // popular
        });
    };
    SetpasswordComponent.prototype.setPassword = function (data) {
        var _this = this;
        if (data.password1 === data.password2) {
            this.auth.setUserPassword(this.user_email, data.password1, data.password2).subscribe(function (res) {
                //console.log("server response",res);
                setTimeout(function () {
                    /** spinner ends after 5 seconds */
                    //this.spinner.hide();
                }, 10000);
                //localStorage.setItem("userdata",JSON.stringify(res));
                _this.router.navigate(["/login"]);
            });
        }
        else {
            alert("password does not match");
        }
    };
    SetpasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    SetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setpassword',
            template: __webpack_require__(/*! raw-loader!./setpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/setpassword/setpassword.component.html"),
            styles: [__webpack_require__(/*! ./setpassword.component.css */ "./src/app/setpassword/setpassword.component.css")]
        })
    ], SetpasswordComponent);
    return SetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /*#sidebar-container {\n    position: fixed;\n    width: 220px;\n    height: 100%;\n    left: 0;\n    overflow-x: hidden;\n    overflow-y: auto;\n    background: white;\n    color:#908c8c;\n    box-shadow: 5px 5px 8px 5px #888888;\n}\n\n.sidebar-navigation {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    position: relative;\n\n}\n\n.sidebar-navigation .header {\n    font-size: 12px;\n    text-transform: uppercase;\n    background-color: #151515;\n    padding: 10px 15px 10px 30px;\n}\n\n.sidebar-navigation li {\n    background-color: transparent;\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    line-height: 20px;\n}\n.sidebar-navigation li a {\n    padding: 10px 15px 10px 30px;\n    display: block;\n    color:#908c8c;\n} */\n\n\n\n\n.sidebar-container {\n    /*\n    width: 220px;\n    height: 100%;\n    left: 0;\n    overflow-x: hidden;\n    overflow-y: auto;\n    background: white;\n    color:#908c8c; */\n    height: 90vh;\n    margin: 0px !important;\n    margin-top: 2px !important;\n    box-shadow: 2px 2px 10px 1px #e2e2e2;\n\n}\n\n\n\n\n.fa-fw {\n    width: 1.28571429em !important;\n    line-height: 1.5;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0NFOzs7OztBQUtIO0lBQ0k7Ozs7Ozs7b0JBT2dCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLG9DQUFvQzs7QUFFeEM7Ozs7O0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qI3NpZGViYXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiM5MDhjOGM7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA4cHggNXB4ICM4ODg4ODg7XG59XG5cbi5zaWRlYmFyLW5hdmlnYXRpb24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cblxuLnNpZGViYXItbmF2aWdhdGlvbiAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDMwcHg7XG59XG5cbi5zaWRlYmFyLW5hdmlnYXRpb24gbGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4uc2lkZWJhci1uYXZpZ2F0aW9uIGxpIGEge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IzkwOGM4Yztcbn0gKi9cblxuXG5cblxuLnNpZGViYXItY29udGFpbmVyIHtcbiAgICAvKlxuICAgIHdpZHRoOiAyMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjojOTA4YzhjOyAqL1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAxcHggI2UyZTJlMjtcblxufVxuLmZhLWZ3IHtcbiAgICB3aWR0aDogMS4yODU3MTQyOWVtICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-group.service */ "./src/app/user-group.service.ts");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(route, router, userGroupService) {
        this.route = route;
        this.router = router;
        this.userGroupService = userGroupService;
        this.isAdmin = false;
        this.sidebarOpened = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.user_data = JSON.parse(localStorage.getItem("userdata"));
        //     if(this.user_data.user_group==="admin"){
        //       this.user_type=true;
        //     }
        //     this.isAdmin=this.userGroupService.isAdmin;
        this.checkAdmin();
    };
    SidebarComponent.prototype.logout = function () {
        console.log("logged out");
        this.router.navigate(["/login"]);
    };
    SidebarComponent.prototype.checkAdmin = function () {
        var _this = this;
        var groups;
        this.userGroupService.getUserAppsGroups(this.user_data.email).subscribe(function (res) {
            groups = res;
            //console.log(res)
            if (res.data.indexOf('admin') > -1) {
                _this.isAdmin = true;
                //console.log("this.isAdmin",this.isAdmin)
            }
        });
        return groups;
    };
    SidebarComponent.prototype.sidebarOn = function () {
        this.sidebarOpened = !this.sidebarOpened;
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _user_group_service__WEBPACK_IMPORTED_MODULE_3__["UserGroupService"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"text\"],input[type=\"email\"],input[type=\"password\"] {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid gray;\n  border-radius: 0px;\n}\n\n#body-row{\nheight:100vh;\nbackground-color:black;\nfont-size:12px;\n}\n\n#signup-container{\nbackground-color:white;\n  border-radius: 5px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtBQUNBLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsY0FBYztBQUNkOztBQUNBO0FBQ0Esc0JBQXNCO0VBQ3BCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJlbWFpbFwiXSxpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4jYm9keS1yb3d7XG5oZWlnaHQ6MTAwdmg7XG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuZm9udC1zaXplOjEycHg7XG59XG4jc2lnbnVwLWNvbnRhaW5lcntcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");







var SignupComponent = /** @class */ (function () {
    function SignupComponent(data, auth, route, router, spinner, snackbar) {
        this.data = data;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.spinner = spinner;
        this.snackbar = snackbar;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function (data) {
        var _this = this;
        if (this.agree) {
            //console.log("signing up");
            this.spinner.show();
            //console.log(data);
            this.auth.create_account(data.first_name, data.last_name, data.email).subscribe(function (res) {
                //console.log("server response",res);
                localStorage.setItem("userdata", JSON.stringify(res));
                _this.data.setUserData(res);
                setTimeout(function () {
                    /** spinner ends after 5 seconds */
                    _this.spinner.hide();
                }, 5000);
                _this.router.navigate(["/dashboard"]);
            });
            //console.log(data);
        }
        else {
            this.snackbar.open("You don't agree to our terms.", "ok", { duration: 3000, });
        }
    };
    SignupComponent.prototype.onchangeAgreement = function (val) {
        this.agree = val;
        //console.log("this.agree",this.agree)
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user-group.service.ts":
/*!***************************************!*\
  !*** ./src/app/user-group.service.ts ***!
  \***************************************/
/*! exports provided: UserGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupService", function() { return UserGroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");





var UserGroupService = /** @class */ (function () {
    function UserGroupService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.isAdmin = false;
        this.BASE_USER_GROUP_URL = "http://192.168.1.200:84/api/";
    }
    UserGroupService.prototype.getUserGroups = function (user) {
        var url = this.BASE_USER_GROUP_URL + "usergroups/";
        return this.http.get(url + user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            //console.log('response', resp);
            //localStorage.setItem("usergroups",JSON.stringify(resp));
            return resp;
        }));
    };
    UserGroupService.prototype.getUserAppsGroups = function (email) {
        var url = this.BASE_USER_GROUP_URL + "usergroups/" + email;
        return this.http.get(url);
    };
    UserGroupService.prototype.getAllGroupsWithAllMembers = function () {
        var url = this.BASE_USER_GROUP_URL + "groups";
        return this.http.get(url);
    };
    UserGroupService.prototype.addUserGroup = function (name, data) {
        var url = this.BASE_USER_GROUP_URL + "groups";
        return this.http.post(url, { group_name: name, ass_emps: data });
    };
    UserGroupService.prototype.deleteGroup = function (name) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Accept', 'application/json');
        var url = this.BASE_USER_GROUP_URL + "groups";
        return this.http.request('delete', url, { body: { group_name: name }, headers: headers });
    };
    UserGroupService.prototype.getGroupWithMembers = function (name) {
        var url = this.BASE_USER_GROUP_URL + "groups/" + name;
        return this.http.get(url);
    };
    UserGroupService.prototype.addToGroup = function (group_name, users) {
        var url = this.BASE_USER_GROUP_URL + "groups/" + group_name;
        return this.http.put(url, { ass_emps: users });
    };
    UserGroupService.prototype.removeFromGroup = function (group_name, users) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Accept', 'application/json');
        var url = this.BASE_USER_GROUP_URL + "groups/" + group_name;
        return this.http.request("delete", url, { body: { ass_emps: users }, headers: headers });
    };
    UserGroupService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    UserGroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserGroupService);
    return UserGroupService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pramod/mirafra_devops-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map