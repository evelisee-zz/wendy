import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AtaquesModule } from './pages/ataques/ataques.module';
import { CadastroModule } from './pages/cadastro/cadastro.module';
import { HomeModule } from './pages/home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { AtaquesComponent } from './pages/ataques/ataques.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  {
    path: 'ataques', component: AtaquesComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'lista', component: HomeComponent
  },
  {
    path: '', redirectTo: 'lista',  pathMatch: 'full'
  },
  {
    path: '**', redirectTo: ''
  }
]

@NgModule({
  //components, diretivas, pipes
  declarations: [
    AppComponent,
  ],
  //modules, rotas
  imports: [
    BrowserModule,
    SharedModule,
    AtaquesModule,
    CadastroModule,
    HomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  //servicos
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
