import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TOKEN_SESSION_KEY_NAME } from '../constants';
import { TokenHelper } from '../../helpers/token.helper';

@Injectable({
	providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		
        return TokenHelper.isValidToken();
	}

}
