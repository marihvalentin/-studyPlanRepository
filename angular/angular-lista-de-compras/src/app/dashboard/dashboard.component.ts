import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itens: Item[] = [];

  constructor(private itemService: ItemService) { }

  getItens(): void {
    this.itemService.getItens().subscribe(itens => this.itens = itens);
  }

  ngOnInit(): void {
    this.getItens();
  }

}
