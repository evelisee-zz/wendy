import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeService } from 'src/app/core/services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { XablauPipe } from './xablau.pipe';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
]

@NgModule({
  declarations: [
    HomeComponent,
    XablauPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    HomeService,
  ]
})
export class HomeModule { }
