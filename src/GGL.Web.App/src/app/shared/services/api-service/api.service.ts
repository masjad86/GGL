import { Injectable } from '@angular/core';
import { IApiService } from '../../models/api-service.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService<T> implements IApiService<T> {
	public baseUrl: string;
	constructor(private http: HttpClient) { }

	/**
	 * Http get method.
	 * @param url
	 */
	get(url: string): Observable<T> {
		const header: HttpHeaders = this.createRequestHeader();
		return this.http.get<T>(url, {
			headers: header
		});
	}

	/**
	 * Http post method.
	 * @param url
	 */
	post(url: string, body: any, requestParams: HttpParams): Observable<T> {
		const header: HttpHeaders = this.createRequestHeader();
		return this.http.post<T>(url, body, {
			headers: header,
			params: requestParams
		});
	}

	/**
	 * Http put method.
	 * @param url
	 */
	put(url: string, body: any, requestParams: HttpParams): Observable<T> {
		const header: HttpHeaders = this.createRequestHeader();
		return this.http.put<T>(url, body, {
			headers: header,
			params: requestParams
		});
	}

	/**
	 * Http delete method.
	 * @param url
	 */
	delete(url: string): Observable<T> {
		const header: HttpHeaders = this.createRequestHeader();
		return this.http.delete<T>(url, {
			headers: header
		});
	}

	private createRequestHeader(): HttpHeaders {
		return new HttpHeaders();
	}
}
