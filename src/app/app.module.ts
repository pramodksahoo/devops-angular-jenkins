import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';


//user components
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';

// product components
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';



//Groups Components
import { GroupsComponent } from './groups/groups.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddGroupModel,AddGroupMemberModal } from './groups/groups.component';

//employee components
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

//common components
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';


//services
import {AuthService} from './auth.service';
import { ConfigsService } from './configs.service';
import { UserGroupService } from './user-group.service';
import { CookieService } from 'ngx-cookie-service';

//configuration components
import { ConfigurationsComponent } from './configurations/configurations.component';


//auth guard
import { AuthGuard } from './auth.guard';






@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailsComponent,
    DashboardComponent,
    EmployeesComponent,
    GroupsComponent,
    NavComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ConfigurationsComponent,
    EmployeeDetailsComponent,
    SetpasswordComponent,
    ForgotPasswordComponent,
    AddGroupComponent,
    AddGroupModel,
    AddGroupMemberModal,
    GroupDetailsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgbModule
  ],
  providers: [AuthService,Title,ConfigsService,CookieService,AuthGuard,UserGroupService],
  bootstrap: [AppComponent],
entryComponents: [AddGroupModel,AddGroupMemberModal]
})
export class AppModule { }
