import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-busca-item',
  templateUrl: './busca-item.component.html',
  styleUrls: ['./busca-item.component.css']
})
export class BuscaItemComponent implements OnInit {
  itens$: Observable<Item[]>;

  private buscaTermos = new Subject<string>();

  constructor(private itemService: ItemService) { }

  busca(termo: string): void {
    this.buscaTermos.next(termo);
  }

  ngOnInit(): void {
    this.itens$ = this.buscaTermos.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((termo: string) => this.itemService.getItemBuscaTermo(termo))
    );
  }

}
