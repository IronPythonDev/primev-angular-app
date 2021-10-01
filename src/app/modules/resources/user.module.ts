import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { UserOwnedResourcesComponent } from './user-owned-resources/user-owned-resources.component';
import { EditResourceComponent } from './edit-resource/edit-resource.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { TreeModule } from 'primeng/tree';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { GalleriaModule } from 'primeng/galleria';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabMenuModule } from 'primeng/tabmenu';
import { ResourcesListComponent } from './resources-list/list.component';

@NgModule({
  declarations: [
    UserOwnedResourcesComponent,
    EditResourceComponent,
    ResourcesListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    SpeedDialModule,
    TableModule,
    ScrollingModule,
    BadgeModule,
    TreeModule,
    MenuModule,
    CardModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    DynamicDialogModule,
    GalleriaModule,
    SplitButtonModule,
    TooltipModule,
    FileUploadModule,
    InputTextareaModule,
    InputNumberModule,
    TabMenuModule
  ],
  exports: [
    ResourcesListComponent
  ]
})
export class UserModule { }
