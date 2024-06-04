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

export class SolicitudEstablecimientoService {

  private host = 'http://localhost:9292/api';
  private controller = '/representante-legal';
  private url = '';

  constructor(private httpClient: HttpClient) {
    this.url = `${this.host}${this.controller}`
  }

  getPosts() {
    return this.httpClient.get<any>(this.url + this.controller);
  }

  getPorCodigo(dsacodigo: string, solcodigo: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getPorCodigo/${dsacodigo}/${solcodigo}`, httpOptions);
  }

  getHoraDetalle(dsacodigo?: string, solcodigo?: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo', dsacodigo || '')
      .set('solcodigo', solcodigo || '');

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getHoraDetalle`, options);
  }

  getPersonalHoraDetalle(dsacodigo?: string, solcodigo?: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo', dsacodigo || '')
      .set('solcodigo', solcodigo || '');

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getPersonalHoraDetalle`, options);
  }

  getPersonal(dsacodigo?: string, solcodigo?: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo', dsacodigo || '')
      .set('solcodigo', solcodigo || '');

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getPersonal`, options);
  }

  getBuscarEstablecimiento3(opetipo: string, dsacodigo: string,
    solnumeins: string, tipobusqueda: string, expbuscar: string): Observable<any> {
    const params = new HttpParams()
      .set('opetipo', opetipo)
      .set('dsacodigo', dsacodigo)
      .set('solnumeins', solnumeins)
      .set('tipobusqueda', tipobusqueda)
      .set('expbuscar', expbuscar);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getBuscarEstablecimiento3`, options);
  }

  getFichaEvaluacionPorCodigo(dsacodigo?: string, evacodigo?: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo', dsacodigo || '')
      .set('evacodigo', evacodigo || '');

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getFichaEvaluacionPorCodigo`, options);
  }

  getTipoInformacionEvaluacion(dsacodigo?: string, solcodigo?: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo', dsacodigo || '')
      .set('solcodigo', solcodigo || '');

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getTipoInformacionEvaluacion`, options);
  }

  getDocumentosEvaluacion(dsacodigo: string, idexpediente: string,
    evacodigo: string, expcodigo: string, expnumesec: string, eddcodigo: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo', dsacodigo)
      .set('idexpediente', idexpediente)
      .set('evacodigo', evacodigo)
      .set('expcodigo', expcodigo)
      .set('expnumesec', expnumesec)
      .set('eddcodigo', eddcodigo);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getDocumentosEvaluacion`, options);
  }

  getFichaEvaluacionEstablecimiento(dsacodigo: string, solnumeins: string,
    tipobusqueda: string, expbuscar: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo', dsacodigo)
      .set('solnumeins', solnumeins)
      .set('tipobusqueda', tipobusqueda)
      .set('expbuscar', expbuscar);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getFichaEvaluacionEstablecimiento`, options);
  }

  getRgmTipoDoc(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getRgmTipoDoc`, httpOptions);
  }

  getComboTipoTramite(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboTipoTramite`, httpOptions);
  }

  getComboEstado(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboEstado`, httpOptions);
  }

  getComboCM05116(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboCM05116`, httpOptions);
  }

  getComboCM05237(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboCM05237`, httpOptions);
  }

  getComboCM05225(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getComboCM05225`, httpOptions);
  }

  getBuscarExpediente4(dsacodigo: string = '', expcodigo: string = '', tipobusqueda: string = '', opetipo: string = ''): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo', dsacodigo)
      .set('expcodigo', expcodigo)
      .set('tipobusqueda', tipobusqueda)
      .set('opetipo', opetipo);

    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getBuscarExpediente4`, options);
  }

  getActividadPorCategoria(cParam1: string = ''): Observable<any> {
    const params = new HttpParams().set('cParam1', cParam1);
    const options = { httpOptions, params };

    return this.httpClient.get<any>(`${this.url}/getActividadPorCategoria`, options);
  }

  getTipoProductoControlado(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/getTipoProductoControlado`, httpOptions);
  }

  save(solicitudDto: SolicitudDto): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/save`, solicitudDto, httpOptions);
  }

  update(solicitudDto: SolicitudDto): Observable<any> {
    return this.httpClient.put<any>(`${this.url}/update`, solicitudDto, httpOptions);
  }

  deleteHorario1(dsacodigo1: string, solcodigo2: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo1', dsacodigo1)
      .set('solcodigo2', solcodigo2);

    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteHorario1`, options);
  }

  deleteActividad1(dsacodigo1: string, solcodigo2: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo1', dsacodigo1)
      .set('solcodigo2', solcodigo2);

    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteActividad1`, options);
  }

  deleteTipoProductoControlado1(dsacodigo1: string, solcodigo2: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo1', dsacodigo1)
      .set('solcodigo2', solcodigo2);

    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteTipoProductoControlado1`, options);
  }

  deleteGrupoDeProductos1(dsacodigo1: string, solcodigo2: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo1', dsacodigo1)
      .set('solcodigo2', solcodigo2);

    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteGrupoDeProductos1`, options);
  }

  deleteFormaFamAreaAlmacen1(dsacodigo1: string, solcodigo2: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo1', dsacodigo1)
      .set('solcodigo2', solcodigo2);

    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteFormaFamAreaAlmacen1`, options);
  }

  deleteFormaCosmeticaAreaAlmacen1(dsacodigo1: string, solcodigo2: string): Observable<any> {
    const params = new HttpParams()
      .set('dsacodigo1', dsacodigo1)
      .set('solcodigo2', solcodigo2);

    const options = { httpOptions, params };

    return this.httpClient.delete<any>(`${this.url}/deleteFormaCosmeticaAreaAlmacen1`, options);
  }
}
