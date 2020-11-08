import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  mensagens: string[];

  add(mensagem: string) {
    this.mensagens.push(mensagem);
  }

  limpar() {
    this.mensagens = [];
  }

  constructor() { }
}
