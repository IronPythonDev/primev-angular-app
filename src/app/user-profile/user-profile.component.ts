import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Resources',
      icon: 'pi pi-fw pi-file',
      routerLink: ['resources']
    },
    {
      label: 'Sales',
      icon: 'pi pi-fw pi-euro',
      routerLink: ['sales']
    },
    {
      label: 'Purchases',
      icon: 'pi pi-fw pi-bookmark',
      routerLink: ['purchases']
    },
    {
      label: 'Notifications',
      icon: 'pi pi-fw pi-bell',
      routerLink: ['notifications']
    },
    {
      label: 'Settings',
      icon: 'pi pi-fw pi-sliders-v',
      routerLink: ['settings']
    }
  ];
  currentMenuItem: MenuItem = {};

  constructor(
    private router: Router
  ) {
    router.events.subscribe(v => {
      const routeUrlTree = router.parseUrl(router.url);

      const currentSection = routeUrlTree.root.children.primary.segments[1];

      const menuItem = this.menuItems.find(v => v.label?.toLowerCase() === currentSection.path.toLowerCase());

      this.currentMenuItem = menuItem === undefined ? this.menuItems[0] : menuItem;
    })
  }

  ngOnInit(): void {

  }
}
