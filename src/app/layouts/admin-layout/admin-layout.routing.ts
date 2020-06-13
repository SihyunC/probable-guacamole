import { ManagedocsComponent } from '../../pages/managedocs/managedocs.component';
import { AuthGuard } from './../../auth.guard';
import { PlatesComponent } from '../../pages/plates/plates.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { ChefsComponent } from 'src/app/pages/chefs/chefs.component';
import { DriversComponent } from 'src/app/pages/drivers/drivers.component';
import { TransactionsComponent } from 'src/app/pages/transactions/transactions.component';
import { ChefsDetailsComponent } from 'src/app/pages/chefs/chefs-details/chefs-details.component';
import { UserdetailsComponent } from 'src/app/pages/users/userdetails/userdetails.component';
import { DriversDetailsComponent } from 'src/app/pages/drivers/drivers-details/drivers-details.component';
import { PlatesDetailsComponent } from 'src/app/pages/plates/plates-details/plates-details.component';
import { ChefsDocsComponent } from 'src/app/pages/chefs/chefs-docs/chefs-docs.component';
import { DriversDocsComponent } from 'src/app/pages/drivers/drivers-docs/drivers-docs.component';
import { ChefsDocsDetailsComponent } from 'src/app/pages/chefs/chefs-docs-details/chefs-docs-details.component';
import { DriversDocsDetailsComponent } from 'src/app/pages/drivers/drivers-docs-details/drivers-docs-details.component';
import { PlatesCategoryComponent } from 'src/app/pages/plates/plates-category/plates-category.component';
import { PlatesCategoryCreateComponent } from 'src/app/pages/plates/plates-category-create/plates-category-create.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'users',          component: UsersComponent, canActivate: [AuthGuard]},
    { path: 'chefs',          component: ChefsComponent, canActivate: [AuthGuard]},
    { path: 'chefs-docs',     component: ChefsDocsComponent, canActivate: [AuthGuard]},
    { path: 'drivers',        component: DriversComponent, canActivate: [AuthGuard]},
    { path: 'drivers-docs',   component: DriversDocsComponent, canActivate: [AuthGuard]},
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthGuard]},
    { path: 'tables',         component: TablesComponent},
    { path: 'icons',          component: IconsComponent},
    { path: 'maps',           component: MapsComponent},
    { path: 'plates',         component: PlatesComponent, canActivate: [AuthGuard]},
    { path: 'plates-category',component: PlatesCategoryComponent, canActivate: [AuthGuard]},
    { path: 'user-docs',      component: ManagedocsComponent, canActivate: [AuthGuard]},
    { path: 'transactions',   component: TransactionsComponent, canActivate: [AuthGuard]},
    { path: 'chefs/:id',      component: ChefsDetailsComponent},
    { path: 'chefs/docs/:id', component: ChefsDocsDetailsComponent},
    { path: 'users/:id',      component: UserdetailsComponent},
    { path: 'drivers/:id',    component: DriversDetailsComponent},
    { path: 'drivers/docs/:id',component: DriversDocsDetailsComponent},
    { path: 'plates-category/:id',     component: PlatesDetailsComponent},
    { path: 'plates-category-create',     component: PlatesCategoryCreateComponent}
];
