import { Component, OnInit } from '@angular/core';
import { Sales } from '../models/Sales';
import { SalesService } from '../sales-service.service';

@Component({
  selector: 'app-user-sales-list',
  templateUrl: './user-sales-list.component.html',
  styleUrls: ['./user-sales-list.component.scss']
})
export class UserSalesListComponent implements OnInit {

  sales: Sales[] = [];

  constructor(
    private salesService: SalesService
  ) { }

  ngOnInit(): void {
    this.salesService.getSales()
      .then(s => this.sales = s);
  }

}
