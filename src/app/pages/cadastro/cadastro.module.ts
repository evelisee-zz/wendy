import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonagemComponent } from './personagem/personagem.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent
  },
]


@NgModule({
  declarations: [
    CadastroComponent,
    PersonagemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
})
export class CadastroModule { }
