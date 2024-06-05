import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horario1Dto } from '../models/horario1Dto';
import { EstablecimientoDto } from '../models/establecimientoDto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8'
  })
}

@Injectable({
  providedIn: 'root'
})

export class EstablecimientoService {

  private host = 'http://localhost:9292/api';
  private controller = '/establecimiento';
  private url = '';

  constructor(private httpClient: HttpClient) {
    this.url = `${this.host}${this.controller}`
  }

  getPosts() {
    return this.httpClient.get<any>(this.host + this.controller);
  }

  getPorCodigo(codigo: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getPorCodigo/${codigo}`, httpOptions);
  }

  getComboSituacion(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboSituacion`, httpOptions);
  }

  getComboBusquedaEntidadSector(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboBusquedaEntidadSector`, httpOptions);
  }

  getComboEstado(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboEstado`, httpOptions);
  }

  getComboFormatoDDJJ(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboFormatoDDJJ`, httpOptions);
  }

  getDisas(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getDisas`, httpOptions);
  }

  getFiltrar(opcion: number, filtro: string, tipo?: string, disa?: string): Observable<any> {
    let params = new HttpParams().set('opcion', opcion.toString()).set('filtro', filtro);
    if (tipo) params = params.set('tipo', tipo);
    if (disa) params = params.set('disa', disa);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getFiltrar`, options);
  }

  getPersonalPorEstablecimiento(estnumeins?: string, estindipers?: string): Observable<any> {
    let params = new HttpParams();
    if (estnumeins) params = params.set('estnumeins', estnumeins);
    if (estindipers) params = params.set('estindipers', estindipers);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getPersonalPorEstablecimiento`, options);
  }

  getPersonalHoraDetalle(estnumeins?: string): Observable<any> {
    let params = new HttpParams();
    if (estnumeins) params = params.set('estnumeins', estnumeins);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getPersonalHoraDetalle`, options);
  }

  getHoraResumen(tencodigo?: string, hornumeins?: string): Observable<any> {
    let params = new HttpParams();
    if (tencodigo) params = params.set('tencodigo', tencodigo);
    if (hornumeins) params = params.set('hornumeins', hornumeins);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getHoraResumen`, options);
  }

  getHoraDetalle(tencodigo?: string, hornumeins?: string, dsecodigo?: string): Observable<any> {
    let params = new HttpParams();
    if (tencodigo) params = params.set('tencodigo', tencodigo);
    if (hornumeins) params = params.set('hornumeins', hornumeins);
    if (dsecodigo) params = params.set('dsecodigo', dsecodigo);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getHoraDetalle`, options);
  }

  getActividad(estnumeins?: string): Observable<any> {
    let params = new HttpParams();
    if (estnumeins) params = params.set('estnumeins', estnumeins);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getActividad`, options);
  }

  getAlmacen1(estnumeins?: string): Observable<any> {
    let params = new HttpParams();
    if (estnumeins) params = params.set('estnumeins', estnumeins);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getAlmacen1`, options);
  }

  save(establecimientoDto: EstablecimientoDto): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/save`, establecimientoDto, httpOptions);
  }

  update(establecimientoDto: EstablecimientoDto): Observable<any> {
    return this.httpClient.put<any>(`${this.url}/update`, establecimientoDto, httpOptions);
  }

  delete(estnumeins: string, usrcodigo: string): Observable<any> {
    const params = new HttpParams()
      .set('estnumeins', estnumeins)
      .set('usrcodigo', usrcodigo);

    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/delete`, options);
  }

  deleteHorario1(tencodigo1: string, hornumeins2: string): Observable<any> {
    const params = new HttpParams()
      .set('tencodigo1', tencodigo1)
      .set('hornumeins2', hornumeins2);

    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteHorario1`, options);
  }

  deleteActividad1(estnumeins1: string): Observable<any> {
    const params = new HttpParams().set('estnumeins1', estnumeins1);
    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteActividad1`, options);
  }

  deleteGrupoDeProductos1(estnumeins1: string): Observable<any> {
    const params = new HttpParams().set('estnumeins1', estnumeins1);
    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteGrupoDeProductos1`, options);
  }

  deleteTipoProductoControlado1(estnumeins1: string): Observable<any> {
    const params = new HttpParams().set('estnumeins1', estnumeins1);
    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteTipoProductoControlado1`, options);
  }

  deletePersonalAlmacen1(estnumeins1: string): Observable<any> {
    const params = new HttpParams().set('estnumeins1', estnumeins1);
    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deletePersonalAlmacen1`, options);
  }

  deleteProductoArealAlmacen1(estnumeins1: string): Observable<any> {
    const params = new HttpParams().set('estnumeins1', estnumeins1);
    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteProductoArealAlmacen1`, options);
  }

  deleteFormaFamAreaAlmacen1(estnumeins1: string): Observable<any> {
    const params = new HttpParams().set('estnumeins1', estnumeins1);
    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteFormaFamAreaAlmacen1`, options);
  }

  deleteFormaCosmeticaAreaAlmacen1(estnumeins1: string): Observable<any> {
    const params = new HttpParams().set('estnumeins1', estnumeins1);
    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteFormaCosmeticaAreaAlmacen1`, options);
  }

  deleteActividadAreaAlmacen1(estnumeins1: string): Observable<any> {
    const params = new HttpParams().set('estnumeins1', estnumeins1);
    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteActividadAreaAlmacen1`, options);
  }

  saveHorario1(horario1Dto: Horario1Dto): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/saveHorario1`, horario1Dto, httpOptions);
  }

  getPersonalItem(estnumeins: string, estnumesec: number): Observable<any> {
    const params = new HttpParams()
      .set('estnumeins', estnumeins)
      .set('estnumesec', estnumesec.toString());

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getPersonalItem`, options);
  }

  getCboTipo(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getCboTipo`, httpOptions);
  }

  getCboSituacion(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getCboSituacion`, httpOptions);
  }

  getSolicitudPendientePantalla2(ctipo: any, dsacodigo: any, tipobusqueda: any, expbuscar: any): Observable<any> {
    let params = new HttpParams();
    params = params.set('ctipo', ctipo);
    params = params.set('dsacodigo', dsacodigo);
    params = params.set('tipobusqueda', tipobusqueda);
    params = params.set('expbuscar', expbuscar);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getSolicitudPendientePantalla2`, options);
  }

}
