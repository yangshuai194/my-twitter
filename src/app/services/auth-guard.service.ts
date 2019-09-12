import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    return this.verifyLogin(url);
  }
  verifyLogin(url) : boolean{
        if(!this.isLoggedIn()){
            this.router.navigate(['/auth']);
            return false;
        }
        else if(this.isLoggedIn()){
            return true;
        }
    }
  public isLoggedIn(): boolean{
    let status = false;
    if(localStorage.getItem('isLoggedIn') == "true"){
      status = true;
    }
    else{
      status = false;
    }
    return status;
  }
}
