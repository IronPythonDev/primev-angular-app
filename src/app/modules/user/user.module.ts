import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SalesStatisticsComponent } from './sales-statistics/sales-statistics.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    ProfileComponent,
    SalesStatisticsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
