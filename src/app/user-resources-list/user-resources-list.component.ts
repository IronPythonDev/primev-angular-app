import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmPurchaseComponent } from '../confirm-purchase/confirm-purchase.component';
import { Resource } from '../models/Account';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-user-resources-list',
  templateUrl: './user-resources-list.component.html',
  styleUrls: ['./user-resources-list.component.scss']
})
export class UserResourcesListComponent implements OnInit {

  actionMenuItems: MenuItem[] = [];

  resources: Resource[] = [];

  constructor(
    private resourceService: ResourceService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.actionMenuItems = [
      { label: 'Remove', icon: 'pi pi-times' },
      { separator: true },
      { label: 'Hide/Show', icon: 'pi pi-share-alt' }
    ]

    this.resourceService.getResources().then(r => {
      this.resources = r
    });
  }
}
