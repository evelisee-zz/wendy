import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ataques',
  templateUrl: './ataques.component.html',
  styleUrls: ['./ataques.component.css']
})
export class AtaquesComponent implements OnInit {
  d20 = null;
  dadosCadastro = {
    nome: null,
    raca: null,
    classe: null,
    nivel: null,
    phone: null,
  }

  constructor() { }

  ngOnInit(): void {
  }

  calcD20() {
    this.d20 = Math.floor((Math.random() * 20) + 1);
  }

}
