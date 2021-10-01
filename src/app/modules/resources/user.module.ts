import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserOwnedResourcesComponent } from './user-owned-resources/user-owned-resources.component';
import { EditResourceComponent } from './edit-resource/edit-resource.component';


@NgModule({
  declarations: [
    UserOwnedResourcesComponent,
    EditResourceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
