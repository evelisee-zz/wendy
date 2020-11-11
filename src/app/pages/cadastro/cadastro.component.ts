import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TitlePageService } from 'src/app/core/services/title-page.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  valoresPersonagem;
  dadosCadastro = {
    nome: '',
    raca: '',
    classe: '',
    nivel: '',
    phone: ''
  }
  campo = {
    nome: '',
    placeholder: 'Digite o sobrenome',
  }
  
  constructor(private titlePageService: TitlePageService) {
    this.titlePageService.atualizaTitulo('Cadastro');
  }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm)  {
    form.control.markAllAsTouched();
    if(form.valid){
      this.valoresPersonagem = {...this.dadosCadastro};
      localStorage.setItem('cadastro', JSON.stringify(form.value));
      form.control.reset();
    }
  }

  onValuesChange(cardValues){
    this.dadosCadastro = cardValues;
  }

}
