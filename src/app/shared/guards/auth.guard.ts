import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router) {}
  canActivate(): boolean {
    const name = localStorage.getItem('userName');

    if (!name) {
      this.route.navigate(['/sign-in']);
      return false;
    }
    return true;
  }

}
