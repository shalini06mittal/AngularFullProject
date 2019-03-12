import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { JokeformComponent } from '../jokeform/jokeform.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<JokeformComponent> {
  canDeactivate(component:JokeformComponent,
    route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
      console.log("can deactivate guard")
        return component.canDeactivate() || window.confirm("Are you sure");
    }
}
