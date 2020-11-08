import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(){
    const itens = [
      {id: 1, qtd: '5kg', descricao: 'Arroz'},
      {id: 2, qtd: '500g', descricao: 'Farofa'},
      {id: 3, qtd: '4L', descricao: 'Leite'},
      {id: 4, qtd: '700g', descricao: 'Bacon'},
      {id: 5, qtd: '3kg', descricao: 'Açúcar'}
    ];
    return {itens};
  }

  //incremento de novos itens com id gerado automaticamente
  genId(itens: Item[]): number {
    return itens.length > 0 ? Math.max(...itens.map(item => item.id)) + 1 : 1;
  }
  

  constructor() { }
}
