import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [];

  currencyOptions: SelectItem[] = [
    { label: 'UAH', value: 'UAH' },
    { label: 'USD', value: 'USD' },
    { label: 'RUB', value: 'RUB' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [{
      label: 'Resources',
      icon: 'pi pi-fw pi-file',
      routerLink: ['']
    }];

    if (localStorage.getItem('accessToken') === null) {
      this.menuItems.push({
        label: 'Login',
        icon: 'pi pi-fw pi-user',
        routerLink: ['login']
      })
    } else {
      this.menuItems.push(
        {
          label: 'User',
          icon: 'pi pi-fw pi-user',
          routerLink: ['user', 'resources']
        },
        {
          label: 'Logout',
          icon: 'pi pi-fw pi-power-off',
          command: () => localStorage.removeItem('accessToken')
          // command: eval('() => console.log(localStorage.getItem("accessToken"))')
        });
    }
  }

  setCurrency(value: string) {
    //set currency in global state
  }
}
