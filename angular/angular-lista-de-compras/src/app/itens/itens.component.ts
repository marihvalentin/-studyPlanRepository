import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  itens: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
