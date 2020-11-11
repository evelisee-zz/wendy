import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate() {
       if(localStorage.getItem('cadastro')) {
           return true;
       } else {
           this.router.navigate(['cadastro']);
           return false;
       }
    }

}