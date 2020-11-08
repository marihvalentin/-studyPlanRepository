import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from './item';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itensUrl = 'api/itens'; //url da web api

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  constructor(private http: HttpClient, private mensagemService: MensagemService) { }

  //Registra uma mensagem de ItemService com o MensageService
  private log(mensagem: string) {
    this.mensagemService.add(`ItemService: ${mensagem}`);
  }

  //busca itens no servidor
  getItens(): Observable<Item[]> {
    this.mensagemService.add('ItemService: itens buscados');
    return this.http.get<Item[]>(this.itensUrl).pipe(
      catchError(this.handleError<Item[]>('getItens', [])));
  }

  //busca item por id
  getItem(id: number): Observable<Item> {
    const url = `${this.itensUrl}/${id}`;
    this.mensagemService.add(`ItemService: item buscado com id=${id}`);
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`item buscado id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`)));
  }

  //busca item por termo de pesquisa == GET
  getItemBuscaTermo(termoBusca: string): Observable<Item[]> {
  if (!termoBusca.trim()) {
    // se o termo de busca não for encontrado, retorna array vazio de item
    return of([]);
  }
  return this.http.get<Item[]>(`${this.itensUrl}/?descricao=${termoBusca}`).pipe(
    tap(x => x.length ?
       this.log(`encontrados itens correspondentes "${termoBusca}"`) :
       this.log(`nenhum item encontrado "${termoBusca}"`)),
    catchError(this.handleError<Item[]>('getItemBuscaTermo', []))
  );
}

  //adicionar novo item == POST
  adicionarItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itensUrl, item, this.httpOptions).pipe(
      tap((newItem: Item) => this.log(`adicionado novo item com id=${newItem.id}`)),
      catchError(this.handleError<Item>(`adicionarItem`))
    );
  }

  //alterar item == PUT
  alterarItem(item: Item): Observable<any> {
    return this.http.put(this.itensUrl, item, this.httpOptions).pipe(
      tap(_ => this.log(`alterado item de id=${item.id}`)),
      catchError(this.handleError<any>('alterarItem'))
    );
   }

  //excluir item == DELETE
  excluirItem(item: Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.itensUrl}/${id}`;

    return this.http.delete<Item>(url, this.httpOptions).pipe(
      tap(_ => this.log(`excluído item de id=${id}`)),
      catchError(this.handleError<Item>('excluirItem'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} falhou: ${error.message}`);
      return of(result as T);
    }
  }
}
