import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.scss']
})
export class CreateResourceComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig , private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onUpload(event: any) {    
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(file);
    }

    this.messageService.add({ key: 'notify-top', severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
