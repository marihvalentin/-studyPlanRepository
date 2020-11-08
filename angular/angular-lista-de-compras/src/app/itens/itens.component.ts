import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { MensagemService } from '../mensagem.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  itens: Item[];

  constructor(private itemService: ItemService, private mensagemService: MensagemService) { }

  selectedItem: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
    this.mensagemService.add(`ItensComponent: Selecionado item de ID=${item.id}`);
  }

  getItens(): void {
    this.itemService.getItens().subscribe(itens => this.itens = itens);
  }

  ngOnInit(): void {
    this.getItens();
  }

}
