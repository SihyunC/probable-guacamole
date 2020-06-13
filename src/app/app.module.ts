import { ManagedocsService } from './services/managedocs.service';
import { UserService } from './services/user.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { PlateService } from './services/plate.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentsModule } from './components/components.module';
import { PlatesComponent } from './pages/plates/plates.component';
import { ManagedocsComponent } from './pages/managedocs/managedocs.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersService } from './services/users.service';
import { ChefsComponent } from './pages/chefs/chefs.component';
import { ChefsService } from './services/chefs.service';
import { DriversComponent } from './pages/drivers/drivers.component';
import { DriversService } from './services/drivers.service';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransactionsService } from './services/transactions.service';
import { ChefsDetailsComponent } from './pages/chefs/chefs-details/chefs-details.component';
import { UserdetailsComponent } from './pages/users/userdetails/userdetails.component';
import { DriversDetailsComponent } from './pages/drivers/drivers-details/drivers-details.component';
import { PlatesDetailsComponent } from './pages/plates/plates-details/plates-details.component';
import { ChefsDocsComponent } from './pages/chefs/chefs-docs/chefs-docs.component';
import { DriversDocsComponent } from './pages/drivers/drivers-docs/drivers-docs.component';
import { ChefsDocsDetailsComponent } from './pages/chefs/chefs-docs-details/chefs-docs-details.component';
import { DriversDocsDetailsComponent } from './pages/drivers/drivers-docs-details/drivers-docs-details.component';
import { PlatesCategoryComponent } from './pages/plates/plates-category/plates-category.component';
import { PlatesCategoryCreateComponent } from './pages/plates/plates-category-create/plates-category-create.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PlatesComponent,
    ManagedocsComponent,
    UsersComponent,
    ChefsComponent,
    DriversComponent,
    TransactionsComponent,
    ChefsDetailsComponent,
    UserdetailsComponent,
    DriversDetailsComponent,
    PlatesDetailsComponent,
    ChefsDocsComponent,
    DriversDocsComponent,
    ChefsDocsDetailsComponent,
    DriversDocsDetailsComponent,
    PlatesCategoryComponent,
    PlatesCategoryCreateComponent
  ],
  providers: [AuthService, AuthGuard, PlateService, UserService, ManagedocsService, UsersService, ChefsService, DriversService, TransactionsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
