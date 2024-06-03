import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
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

export class TramiteEstablecimientoFarmaceuticoService {

    private host = 'http://localhost:9292/api';
    private controller = '/tramite-establecimiento-farmaceutico';
    private url = '';

    constructor(private httpClient: HttpClient) {
        this.url = `${this.host}${this.controller}`
    }

    getPosts() {
        return this.httpClient.get<any>(this.host + this.controller);
    }

    getCargarEstablecimientoExp(estnumeins?: string): Observable<any> {
        let params = new HttpParams();
        if (estnumeins) {
            params = params.set('estnumeins', estnumeins);
        }
        const options = { httpOptions, params };

        return this.httpClient.get<any>(`${this.url}/getCargarEstablecimientoExp`, options);
    }

    getTramiteEstablecerRespuesta(): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/getTramiteEstablecerRespuesta`, httpOptions);
    }

    getComboTipoDocumento(): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/getComboTipoDocumento`, httpOptions);
    }
}
