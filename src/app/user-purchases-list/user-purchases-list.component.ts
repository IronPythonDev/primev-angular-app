import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Purchase } from '../models/Purchase';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-user-purchases-list',
  templateUrl: './user-purchases-list.component.html',
  styleUrls: ['./user-purchases-list.component.scss']
})
export class UserPurchasesListComponent implements OnInit {

  purchases: Purchase[] = [];

  actionMenuItems: MenuItem[] = [];

  constructor(
    private purchaseService: PurchaseService
  ) {
    this.actionMenuItems = [
      { label: 'Remove', icon: 'pi pi-times' },
      { separator: true },
      { label: 'Hide/Show', icon: 'pi pi-share-alt' }
    ]
  }

  ngOnInit(): void {
    this.purchaseService.getPurchases()
      .then(s => this.purchases = s);
  }
}
