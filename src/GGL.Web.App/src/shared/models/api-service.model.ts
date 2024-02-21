import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

export interface IApiService<T> {
	get(url: string): Observable<T>;
	post(url: string, body: any, requestParams: HttpParams): Observable<T>;
	put(url: string, body: any, requestParams: HttpParams): Observable<T>;
	delete(url: string): Observable<T>;
}
