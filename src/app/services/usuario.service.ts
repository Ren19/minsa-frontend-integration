import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8'
    })
}

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {

    private host = 'http://localhost:9292/api';
    private controller = '/usuario';
    private url = '';

    constructor(private httpClient: HttpClient) { 
        this.url = `${this.host}${this.controller}`
    }

    getPosts() {
        return this.httpClient.get<any>(this.host + this.controller);
    }

    getMenu(id: number): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/getMenu/${id}`, httpOptions);
    }
}
