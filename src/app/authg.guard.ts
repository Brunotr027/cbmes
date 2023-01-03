import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthorizationInterceptor } from './interceptors/interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthgGuard implements CanActivate {
  private authorizationInterceptor: AuthorizationInterceptor = new AuthorizationInterceptor();

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      const token = this.authorizationInterceptor.decodedToken //window.localStorage.getItem('token');

      if(token) {
        return true;
      } else {
        this.router.navigate(['home']);
        return false;
      }
  }

}
