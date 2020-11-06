import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service'; 

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  itens: Item[];

  constructor(private itemService: ItemService) { }

  getItens(): void {
    this.itemService.getItens().subscribe(itens => this.itens = itens);
  }

  ngOnInit(): void {
    this.getItens();
  }

}
