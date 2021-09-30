import { Component, OnInit } from '@angular/core';
import { MenuItem, Message, MessageService, PrimeNGConfig, SelectItem } from 'primeng/api'
import { DialogService } from 'primeng/dynamicdialog';
import { Resource } from './Account';
import { ConfirmPurchaseComponent } from './confirm-purchase/confirm-purchase.component';
import { ResourceService } from './resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService , DialogService]
})
export class AppComponent implements OnInit {
  title = '';

  sortOrder: number = 0;

  sortField: string = '';

  sortKey: any;
  sortOptions: SelectItem[] = [];

  resources: Resource[] = [];

  menu: MenuItem[] = [
    {
      label: 'Resources',
      icon: 'pi pi-fw pi-file',
      command: (e) => console.log('Resources'),
    },
    {
      label: 'User',
      icon: 'pi pi-fw pi-user',
    },
    {
      label: 'Logout',
      icon: 'pi pi-fw pi-power-off'
    }
  ];

  msg: Message[] = [];

  constructor(public dialogService: DialogService , private primengConfig: PrimeNGConfig, private resourceService: ResourceService, private messageService: MessageService) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.resourceService.getResources().then(r => {
      this.resources = r
    });

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }


  addToCart(resource = undefined) {
    this.messageService.add({ life: 5000, key: "notify", severity: 'success', summary: 'Success add resource to cart', detail: 'Success add resource to cart' })
    const ref =  this.dialogService.open(ConfirmPurchaseComponent , {
      header: 'Confirm Purchase',
      width: '50%',
      data: resource
    });
  }
}
