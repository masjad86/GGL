import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/observable';
import { catchError } from 'rxjs/operators';

import { APP_HEADERS } from './app.constant';
import {HttpStatusCode} from './shared/enums';
import { NotificationService } from './shared/services';

@Injectable({ providedIn: 'root' })
export class AppInterceptor implements HttpInterceptor {
	constructor() { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = sessionStorage.getItem('ggl-token');
		if (token) {
			request.headers.set(APP_HEADERS.AUTHORIZATION, 'Bearer ' + token);
			request.clone({
				headers: request.headers
			});
		}
		return next.handle(request)
			.pipe(catchError(error => {
				if (error instanceof HttpErrorResponse) {
					switch (error.status) {
						case HttpStatusCode.BAD_REQUEST:
							break;

						case HttpStatusCode.UNAUTHORIZED:
							// this.notificationService.show()
							break;

						case HttpStatusCode.NOT_FOUND:
							break;

						case HttpStatusCode.INTERNAL_SERVER_ERROR:
							break;

						default:
							break;
					}
				}

				return throwError(error);
			}));
	}
}
