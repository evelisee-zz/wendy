import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
