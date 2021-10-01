import { Component, OnInit } from '@angular/core';
import { MenuItem, Message, MessageService, PrimeNGConfig, SelectItem } from 'primeng/api'
import { DialogService } from 'primeng/dynamicdialog';
import { Resource } from './models/Account';
import { ConfirmPurchaseComponent } from './confirm-purchase/confirm-purchase.component';
import { CreateResourceComponent } from './create-resource/create-resource.component';
import { ResourceService } from './resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, DialogService]
})
export class AppComponent implements OnInit {
  title = '';

  sortOrder: number = 0;

  sortField: string = '';

  sortKey: any;
  sortOptions: SelectItem[] = [];
  currencyOptions: SelectItem[] = [];

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
      items: [
        {
          label: 'Current',
          icon: 'pi pi-fw pi-user'
        },
        {
          label: 'Statistics',
          icon: 'pi pi-fw pi-dollar'
        },
        {
          label: 'Notifications',
          icon: 'pi pi-fw pi-bell'
        },
        {
          label: 'Settings',
          icon: 'pi pi-fw pi-sliders-v'
        },
      ]
    },
    {
      label: 'Logout',
      icon: 'pi pi-fw pi-power-off'
    }
  ];
  resourceMenu: MenuItem[] = [];

  msg: Message[] = [];

  constructor(public dialogService: DialogService, private primengConfig: PrimeNGConfig, private resourceService: ResourceService, private messageService: MessageService) {

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

    this.currencyOptions = [
      { label: 'UAH', value: 'UAH' },
      { label: 'USD', value: 'USD' },
      { label: 'RUB', value: 'RUB' },
    ]

    this.resourceMenu = [
      {
        label: 'Update', icon: 'pi pi-refresh', command: () => {
          console.log();

        },
      },
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {
          console.log();
        },
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
    ];
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

  setCurrency(v = undefined){
    this.messageService.add({ life: 5000, key: "notify-bottom", severity: 'success', summary: `Set ${v} currency`, detail: `Set ${v} currency` })
  }
}
