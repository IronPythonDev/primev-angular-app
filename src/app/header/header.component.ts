import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [{
    label: 'Resources',
    icon: 'pi pi-fw pi-file'
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
  }];

  currencyOptions: SelectItem[] = [
    { label: 'UAH', value: 'UAH' },
    { label: 'USD', value: 'USD' },
    { label: 'RUB', value: 'RUB' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setCurrency(value: string) {
    //set currency in global state
  }
}
