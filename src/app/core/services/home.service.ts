import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getCEP(cep: string) {
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

  getDragonData() {
    return this.httpClient.get('http://www.dnd5eapi.co/api/monsters/adult-black-dragon/')
  }
}
