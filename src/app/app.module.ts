import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
import { ConfirmPurchaseComponent } from './confirm-purchase/confirm-purchase.component';
import { GalleriaModule } from 'primeng/galleria';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';
import { CreateResourceComponent } from './create-resource/create-resource.component';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabMenuModule } from 'primeng/tabmenu';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyCardComponent } from './body-card/body-card.component';
import { NotifyContainerComponent } from './notify-container/notify-container.component';
import { UserModule } from './modules/resources/user.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmPurchaseComponent,
    CreateResourceComponent,
    HeaderComponent,
    FooterComponent,
    BodyCardComponent,
    NotifyContainerComponent
  ],
  imports: [
    UserModule,
    BrowserModule,
    AppRoutingModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
