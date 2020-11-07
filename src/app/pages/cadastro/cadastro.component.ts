import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  dadosCadastro = {
    nome: '',
    raca: '',
    classe: '',
    nivel: '',
    phone: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm)  {
    form.control.markAllAsTouched();
    if(form.valid){
      localStorage.setItem('personagem', JSON.stringify(form.value));
      form.control.reset();
    }
  }

}
