import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

// const appRoutes: Routes = [
//   {
//     path: 'ataques', component: AtaquesComponent
//   },
//   {
//     path: 'cadastro', component: CadastroComponent
//   },
//   {
//     path: 'lista', component: HomeComponent
//   },
//   {
//     path: '', redirectTo: 'lista',  pathMatch: 'full'
//   },
//   {
//     path: '**', redirectTo: ''
//   }
// ]

const appRoutes: Routes = [
  {
    path: 'lista',
    loadChildren: () => import('./pages/home/home.module').then(modulo => modulo.HomeModule)
  },
  {
    path: 'ataques',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/ataques/ataques.module').then(modulo => modulo.AtaquesModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then(modulo => modulo.CadastroModule)
  },
  {
    path: '', redirectTo: 'lista',  pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'lista'
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
    RouterModule.forRoot(appRoutes)
  ],
  //servicos
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
