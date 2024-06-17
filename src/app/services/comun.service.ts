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

export class ComunService {

  private host = 'http://localhost:9292/api';
  private controller = '/comun';
  private url = '';

  constructor(private httpClient: HttpClient) {
      this.url = `${this.host}${this.controller}`
  }

  getPosts() {
      return this.httpClient.get<any>(this.url + this.controller);
  }

  getComboClaseTipo(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboClaseTipo`, httpOptions);
  }

  getComboTipoPersona(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboTipoPersona`, httpOptions);
  }

  getComboSector(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboSector`, httpOptions);
  }

  getComboFormaObtencionDeGases(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboFormaObtencionDeGases`, httpOptions);
  }

  getComboCondicionUsoAlmacenEstablecimiento(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboCondicionUsoAlmacenEstablecimiento`, httpOptions);
  }

  getComboSituacion(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboSituacion`, httpOptions);
  }

  getRegenteValidacionHorario(rgdcodigo?: string, dsecodigo?: string, horhoraini?: string, horhorafin?: string): Observable<any> {
    let params = new HttpParams();
    if (rgdcodigo) params = params.set('rgdcodigo', rgdcodigo);
    if (dsecodigo) params = params.set('dsecodigo', dsecodigo);
    if (horhoraini) params = params.set('horhoraini', horhoraini);
    if (horhorafin) params = params.set('horhorafin', horhorafin);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getRegenteValidacionHorario`, options);
  }

  getCargarEstablecimiento(estnumeins?: string): Observable<any> {
    let params = new HttpParams();
    if (estnumeins) params = params.set('estnumeins', estnumeins);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getCargarEstablecimiento`, options);
  }

  getMenu(usrcodigo?: string, codmodulo?: string, mnusub?: string): Observable<any> {
    let params = new HttpParams();
    if (usrcodigo) params = params.set('usrcodigo', usrcodigo);
    if (codmodulo) params = params.set('codmodulo', codmodulo);
    if (mnusub) params = params.set('mnusub', mnusub);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getMenu`, options);
  }

  getDistritos(cParam1?: string, cParam2?: string): Observable<any> {
    let params = new HttpParams();
    if (cParam1) params = params.set('cParam1', cParam1);
    if (cParam2) params = params.set('cParam2', cParam2);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getDistritos`, options);
  }

  getDepartamentos(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getDepartamentos`, httpOptions);
  }

  getProvincias(cParam1: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('cParam1', cParam1);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getProvincias`, options);
  }

  getBuscarEntidadET(setcodigo?: string, sstcodigo?: string): Observable<any> {
    let params = new HttpParams();
    if (setcodigo) params = params.set('setcodigo', setcodigo);
    if (sstcodigo) params = params.set('sstcodigo', sstcodigo);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getBuscarEntidadET`, options);
  }

  getValidacionRuc(estnumeruc: string, estnumeins?: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('estnumeruc', estnumeruc);
    if (estnumeins) params = params.set('estnumeins', estnumeins);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getValidacionRuc`, options);
  }

  getSubSector(cParam1: string = ''): Observable<any> {
    let params = new HttpParams().set('cParam1', cParam1);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getSubSector`, options);
  }

  getCargarEntidad(entcodigo: string): Observable<any> {
    let params = new HttpParams().set('entcodigo', entcodigo);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getCargarEntidad`, options);
  }

  getCargarEntidadValidacionAnulacion(entcodigo: string): Observable<any> {
    let params = new HttpParams().set('entcodigo', entcodigo);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getCargarEntidadValidacionAnulacion`, options);
  }

  getGrupoProducto(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getGrupoProducto`, httpOptions);
  }

  getActividadPorClaseTipo(cParam1: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('cParam1', cParam1);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getActividadPorClaseTipo`, options);
  }

  getTipoProductoControlado(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getTipoProductoControlado`, httpOptions);
  }

  getComboTipoDocumento(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboTipoDocumento`, httpOptions);
  }

  getMotivo(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getMotivo`, httpOptions);
  }

  getAlAlCondUso(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getAlAlCondUso`, httpOptions);
  }

  getAlAlTipo(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getAlAlTipo`, httpOptions);
  }

  getAlAlFormaObtencion(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getAlAlFormaObtencion`, httpOptions);
  }

  getAlAlFormatoSolicitud(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getAlAlFormatoSolicitud`, httpOptions);
  }

  getBuscarRenaes1(rencodigo: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('rencodigo', rencodigo);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getBuscarRenaes1`, options);
  }

  getSituacion(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getSituacion`, httpOptions);
  }

  getProfesion(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getProfesion`, httpOptions);
  }

}
