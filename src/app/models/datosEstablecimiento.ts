export class DatosEstablecimiento {
    LugarRegistro: string;
    Sector: number;
    SubSector: string;
    Entidad: string;
    Jurisdiccion: string;
    ExpInicActividad: string;
    FechaExp: Date;
    NROAut: string;
    FechaAut: Date;
    Direccion: string;
    Nro: string;
    intMzLote: string;
    UrbAaHhPpJj: string;
    Dpto: string;
    Provincia: string;
    Distrito: string;
    GrLatitud: string;
    GrLong: string;
    NroTelefono1: string;
    nroTelefono2: string;
    NroFax: string;
  
    constructor() {
      this.LugarRegistro = '';
      this.Sector = 0;
      this.SubSector = '';
      this.Entidad = '';
      this.Jurisdiccion = '';
      this.ExpInicActividad = '';
      this.FechaExp = new Date();
      this.NROAut = '';
      this.FechaAut = new Date();
      this.Direccion = '';
      this.Nro = '';
      this.intMzLote = '';
      this.UrbAaHhPpJj = '';
      this.Dpto = '';
      this.Provincia = '';
      this.Distrito = '';
      this.GrLatitud = '';
      this.GrLong = '';
      this.NroTelefono1 = '';
      this.nroTelefono2 = '';
      this.NroFax = '';
    }
  }
  