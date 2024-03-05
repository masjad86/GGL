import { Injectable } from '@angular/core';
import { IApiService } from '../../models/api-service.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService implements IApiService {
	public baseUrl: string = '';
	constructor(private http: HttpClient) { }

	/**
	 * Http get method.
	 * @param url
	 */
	fetch<T>(url: string): Observable<T> {
		const header: HttpHeaders = this.createRequestHeaders();
        const apiUrl = this.createUrl(url);
		return this.http.get<T>(apiUrl, {
			headers: header
		});
	}

	/**
	 * Http post method.
	 * @param url
	 */
	post<T>(url: string, body: any, requestParams?: HttpParams): Observable<T> {
		const header: HttpHeaders = this.createRequestHeaders();
        const apiUrl = this.createUrl(url);
		return this.http.post<T>(apiUrl, body, {
			headers: header,
			params: requestParams
		});
	}

	/**
	 * Http put method.
	 * @param url
	 */
	put<T>(url: string, body: any, requestParams?: HttpParams): Observable<T> {
		const header: HttpHeaders = this.createRequestHeaders();
        const apiUrl = this.createUrl(url);
		return this.http.put<T>(apiUrl, body, {
			headers: header,
			params: requestParams
		});
	}

	/**
	 * Http delete method.
	 * @param url
	 */
	delete<T>(url: string): Observable<T> {
		const header: HttpHeaders = this.createRequestHeaders();
        const apiUrl = this.createUrl(url);
		return this.http.delete<T>(apiUrl, {
			headers: header
		});
	}

    /**
     * Create request header parameters.
     */
    private createRequestHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        const token = sessionStorage.getItem("ggl-token");
        if (!token) {
            throw new Error("");
        }

        headers.append("Authorization", "Bearer " + token);

        return headers;
    }

    /**
     * Create the complete api url using baseUrl + url.   
     */
    private createUrl(url: string): string {
        return `${this.baseUrl}${url}`; 
    }
}
