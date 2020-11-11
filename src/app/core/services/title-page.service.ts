import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitlePageService {
  titulo = new Subject<string>();

  constructor() { }

  atualizaTitulo(novoTitulo: string) {
    document.title = `${novoTitulo} - Wendy`;
    this.titulo.next(novoTitulo);
  }
}
