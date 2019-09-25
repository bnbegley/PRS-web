import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { UserAuthenticationComponent } from './feature/user/user-authentication/user-authentication.component';
import { RequestLineDetailComponent } from './feature/request-line/request-line-detail/request-line-detail.component';
import { RequestLineCreateComponent } from './feature/request-line/request-line-create/request-line-create.component';
import { RequestLineEditComponent } from './feature/request-line/request-line-edit/request-line-edit.component';
import { RequestLineListComponent } from './feature/request-line/request-line-list/request-line-list.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';
import { RequestReviewListComponent } from './feature/request/request-review-list/request-review-list.component';



const routes: Routes = [
  { path: '', redirectTo : '/user/authentication', pathMatch: 'full' },
  { path: 'user/list', component: UserListComponent},
  { path: 'user/create', component: UserCreateComponent},
  { path: 'user/detail/:id', component: UserDetailComponent},
  { path: 'user/edit/:id', component: UserEditComponent},
  { path: 'user/authentication', component: UserAuthenticationComponent},
  { path: 'vendor/list', component: VendorListComponent},
  { path: 'vendor/create', component: VendorCreateComponent},
  { path: 'vendor/detail/:id', component: VendorDetailComponent},
  { path: 'vendor/edit/:id', component: VendorEditComponent},
  { path: 'product/list', component: ProductListComponent},
  { path: 'product/create', component: ProductCreateComponent},
  { path: 'product/edit/:id', component: ProductEditComponent},
  { path: 'product/detail/:id', component: ProductDetailComponent},
  { path: 'request/list', component: RequestListComponent},
  { path: 'request/create', component: RequestCreateComponent},
  { path: 'request/detail/:id', component: RequestDetailComponent},
  { path: 'request/edit/:id', component: RequestEditComponent},
  { path: 'requestline/list/:id', component: RequestLineListComponent},
  { path: 'requestline/create/:id', component: RequestLineCreateComponent},
  { path: 'requestline/detail/:id', component: RequestLineDetailComponent},
  { path: 'requestline/edit/:id', component: RequestLineEditComponent}, 
  { path: 'requestline/review/:id', component : RequestReviewComponent},
  { path: 'request/review' , component : RequestReviewListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
