import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn:'root'
})
export class RoleGuard implements CanActivate {


  constructor(private _authService: AuthService, private _router: Router) {
      console.log("route guard const");
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("role guard can activate");
    const user = this._authService.decode();
    console.log(user)
    if (user.role === next.data.role) {
        console.log("role guard role");
      return true;
    }

    // navigate to not found page
    this._router.navigate(['/404']);
    return false;
  }

}