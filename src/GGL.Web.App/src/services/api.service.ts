import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public baseUrl: string = "";
    /**
     * Api service constructor.
     * @param http The http client to send request to http api or endpoint.
     */
    constructor(private http: HttpClient) {
        this.baseUrl = "";
    }

    /**
     * Peform all the post operation using this method.
     * @param url The api for this action.
     * @param params It's an optional parameter to pass the query string with url.
     */
    fetch<T>(url: string, params?: HttpParams): Observable<T> {
        const apiUrl = this.createUrl(url);
        return this.http.get<T>(apiUrl, {
            headers: this.createRequestHeaders(),
            params: params
        });
    }

    /**
     * Peform all the post operation using this method.
     * @param url The api for this action.
     * @param data<T> Pass the entity or model as a request body.
     * @param params It's an optional parameter to pass the query string with url.
     */
    post<T>(url: string, data:T, params?: HttpParams): Observable<T> {
        const apiUrl = this.createUrl(url);
        return this.http.post<T>(apiUrl, data, {
            headers: this.createRequestHeaders(),
            params: params
        });
    }

    /**
     * Peform all the delete operation using this method.
     * @param url Pass request url for this action.
     * @param params It's an optional parameter to pass the query string with url.
     */
    delete<T>(url: string, params?: HttpParams): Observable<T> {
        const apiUrl = this.createUrl(url);
        return this.http.delete<T>(apiUrl, {
            headers: this.createRequestHeaders(),
            params: params
        });
    }

    /**
     * Peform all the update operation using this method.
     * @param url Pass request url for this action.
     * @param data<T> Pass the entity or model as a request body.
     * @param params It's an optional parameter to pass the query string with url.
     */
    update<T>(url: string, data: T, params?: HttpParams) : Observable<T> {
        const apiUrl = this.createUrl(url);
        return this.http.patch<T>(apiUrl, data, {
            headers: this.createRequestHeaders(),
            params: params,
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