import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllResourcesListComponent } from './all-resources-list/all-resources-list.component';
import { UserNotificationsListComponent } from './user-notifications-list/user-notifications-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPurchasesListComponent } from './user-purchases-list/user-purchases-list.component';
import { UserResourcesListComponent } from './user-resources-list/user-resources-list.component';
import { UserSalesListComponent } from './user-sales-list/user-sales-list.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
  { path: '', component: AllResourcesListComponent },
  {
    path: 'user', component: UserProfileComponent, children: [
      { path: 'resources', component: UserResourcesListComponent },
      { path: 'sales', component: UserSalesListComponent },
      { path: 'purchases' , component: UserPurchasesListComponent},
      { path: 'notifications' , component: UserNotificationsListComponent},
      { path: 'settings' , component: UserSettingsComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
