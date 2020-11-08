import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-detalhe-item',
  templateUrl: './detalhe-item.component.html',
  styleUrls: ['./detalhe-item.component.css']
})
export class DetalheItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
