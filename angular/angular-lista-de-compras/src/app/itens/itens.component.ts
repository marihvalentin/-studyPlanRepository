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

  adicionar(descricao: string): void {
    descricao = descricao.trim();
    if (!descricao) {
      return;
    }
    this.itemService.adicionarItem({descricao} as Item).subscribe(item => this.itens.push(item));
  }

  excluir(item: Item): void {
    this.itens = this.itens.filter(i => i !== item);
    this.itemService.excluirItem(item).subscribe();
  }

  getItens(): void {
    this.itemService.getItens().subscribe(itens => this.itens = itens);
  }

  ngOnInit(): void {
    this.getItens();
  }

}
