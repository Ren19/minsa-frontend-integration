import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8'
  })
}

@Injectable({
  providedIn: 'root'
})

export class RepresentanteLegalService {

  private host = 'http://localhost:9292/api';
  private controller = '/representante-legal';
  private url = '';

  constructor(private httpClient: HttpClient) {
    this.url = `${this.host}${this.controller}`
  }

  getPosts() {
    return this.httpClient.get<any>(this.url + this.controller);
  }

  getSituacion(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getSituacion`, httpOptions);
  }

  getCargo(cParam1: string): Observable<any> {
    const params = new HttpParams().set('cParam1', cParam1);
    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getCargo`, options);
  }

  getComboTipoDocumentoReferencia(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboTipoDocumentoReferencia`, httpOptions);
  }
}
