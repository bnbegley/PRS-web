import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { SortPipe } from './pipe/sort.pipe';
import { MenuComponent } from './core/menu/menu.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { RequestLineCreateComponent } from './feature/request-line/request-line-create/request-line-create.component';
import { RequestLineEditComponent } from './feature/request-line/request-line-edit/request-line-edit.component';
import { RequestLineDetailComponent } from './feature/request-line/request-line-detail/request-line-detail.component';
import { RequestLineListComponent } from './feature/request-line/request-line-list/request-line-list.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { UserAuthenticationComponent } from './feature/user/user-authentication/user-authentication.component';
import { VendorService } from '@svc/vendor.service';



@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    UserListComponent,
    VendorListComponent,
    MenuComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    RequestLineCreateComponent,
    RequestLineEditComponent,
    RequestLineDetailComponent,
    RequestLineListComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestEditComponent,
    UserAuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    VendorService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
