import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {GroupsComponent} from './groups/groups.component';
import {EmployeesComponent} from './employees/employees.component';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent , canActivate : [AuthGuard]},
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'setpassword', component: SetpasswordComponent },
      { path: 'forgotPassword', component: ForgotPasswordComponent },
      { path: 'home', component: HomeComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'group_details', component: GroupsComponent },
      { path: 'add_group', component: AddGroupComponent },
      { path: 'product', component: ProductComponent },
      { path: 'add_product', component: AddProductComponent },
      { path: 'product_details', component: ProductDetailsComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'employeedetails', component: EmployeeDetailsComponent },
      { path: 'configurations', component: ConfigurationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
