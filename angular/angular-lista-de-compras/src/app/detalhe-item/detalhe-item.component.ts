import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-detalhe-item',
  templateUrl: './detalhe-item.component.html',
  styleUrls: ['./detalhe-item.component.css']
})
export class DetalheItemComponent implements OnInit {

  item: Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService, private lotation: Location) { }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id).subscribe(item => this.item = item);
  }

  salvar(): void{
    this.itemService.alterarItem(this.item).subscribe(() => this.voltar);
  }

  voltar(): void {
    this.lotation.back();
  }

  ngOnInit(): void {
    this.getItem();
  }

}
