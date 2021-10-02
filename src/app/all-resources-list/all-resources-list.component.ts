import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmPurchaseComponent } from '../confirm-purchase/confirm-purchase.component';
import { CreateResourceComponent } from '../create-resource/create-resource.component';
import { Resource } from '../models/Account';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-all-resources-list',
  templateUrl: './all-resources-list.component.html',
  styleUrls: ['./all-resources-list.component.scss']
})
export class AllResourcesListComponent implements OnInit {

  resources: Resource[] = [];

  sortKey: any;
  sortOptions: SelectItem[] = [];

  constructor(
    public dialogService: DialogService,
    private resourceService: ResourceService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.resourceService.getResources().then(r => {
      this.resources = r
    });
  }

  addToCart(resource = undefined) {
    this.messageService.add({ life: 5000, key: "notify-top", severity: 'success', summary: 'Success add resource to cart', detail: 'Success add resource to cart' })
    const ref = this.dialogService.open(ConfirmPurchaseComponent, {
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
