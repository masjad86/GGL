import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

export interface IApiService {
	fetch<T>(url: string, requestParams?: HttpParams): Observable<T>;
	post<T>(url: string, body: any, requestParams?: HttpParams): Observable<T>;
	put<T>(url: string, body: any, requestParams?: HttpParams): Observable<T>;
	delete<T>(url: string, requestParams?: HttpParams): Observable<T>;
}
