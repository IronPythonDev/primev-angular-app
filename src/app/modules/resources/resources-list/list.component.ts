import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Resource } from 'src/app/models/Account';
import { ResourceService } from 'src/app/resource.service';
import { CreateResourceComponent } from '../create-resource/create-resource.component';

@Component({
  selector: 'app-resources-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ResourcesListComponent implements OnInit {

  resources: Resource[] = [];

  sortKey: any;
  sortOptions: SelectItem[] = [];

  constructor(public dialogService: DialogService, private resourceService: ResourceService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.resourceService.getResources().then(r => {
      this.resources = r
    });
  }

  addToCart(resource = undefined) {
    this.messageService.add({ life: 5000, key: "notify-top", severity: 'success', summary: 'Success add resource to cart', detail: 'Success add resource to cart' })
    const ref = this.dialogService.open(CreateResourceComponent, {
      header: 'Confirm Purchase',
      width: '50%',
      data: resource
    });
  }

  createResource(){
    this.messageService.add({ life: 5000, key: "notify-top", severity: 'success', summary: 'Success add resource to cart', detail: 'Success add resource to cart' })
    const ref = this.dialogService.open(CreateResourceComponent, {
      header: 'Create resource',
      width: '50%'
    });
  }

}
