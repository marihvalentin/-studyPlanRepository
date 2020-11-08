import { Injectable } from '@angular/core';
import { Observable, of}  from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from './item';
import { ITENS } from './itens-teste';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itensUrl = 'api/itens'; //url da web api
  
  constructor(private http: HttpClient, private mensagemService: MensagemService) { }

  //Registra uma mensagem de ItemService com o MensageService
  private log(mensagem: string) {
    this.mensagemService.add(`ItemService: ${mensagem}`);
  }

  getItens(): Observable<Item[]> {
    this.mensagemService.add('ItemService: itens buscados');
    return this.http.get<Item[]>(this.itensUrl).pipe(catchError(this.handleError<Item[]>('getItens', [])));
  }

  //busca item por id
  getItem(id: number): Observable<Item> {
    const url = `${this.itensUrl}/${id}`;
    this.mensagemService.add(`ItemService: item buscado com id=${id}`);
    return this.http.get<Item>(url).pipe
    (tap(_ => this.log(`item buscado id=${id}`)), 
    catchError(this.handleError<Item>(`getItem id=${id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} falhou: ${error.message}`);
      return of(result as T);
    }

  }
}
