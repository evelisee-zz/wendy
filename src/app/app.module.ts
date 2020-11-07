import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AtaquesComponent } from './pages/ataques/ataques.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  //components, diretivas, pipes
  declarations: [
    AppComponent,
    HomeComponent,
    AtaquesComponent,
    CadastroComponent,
  ],
  //modules, rotas
  imports: [
    BrowserModule,
    SharedModule
  ],
  //servicos
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
