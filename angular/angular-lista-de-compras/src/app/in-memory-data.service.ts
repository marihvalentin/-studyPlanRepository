import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const itens = [
      {id: 6, descricao: '5kg de Arroz'},
      {id: 7, descricao: '500g de Farofa'},
      {id: 8, descricao: '4L de Leite'},
      {id: 9, descricao: '700g de Bacon'},
      {id: 10, descricao: '3kg de Açúcar'}
    ];
    return {itens};
  }

  //incremento de novos itens com id gerado automaticamente
  genId(itens: Item[]): number {
    return itens.length > 0 ? Math.max(...itens.map(item => item.id)) + 1 : 6;
  }
}
