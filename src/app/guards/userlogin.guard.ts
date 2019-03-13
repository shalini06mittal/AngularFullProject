import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserloginGuard implements CanActivate {
  constructor(private _router:Router,private _authService:AuthService){}

  canActivate() {
        console.log("OnlyLoggedInUsers");
      if (this._authService.isAuthenticated()) {
        return true;
    }

    // navigate to login page
    this._router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }
}
