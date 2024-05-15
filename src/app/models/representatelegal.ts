export class RepresentanteLegal {
    codPersonal: number;
    tipoCambio: string;
    situacion: string;
    nombreApellido: string;
    cargo: string;
    tipoDocActividad: string;
    codPersonalActividad1: number;
    codPersonalActividad2: number;
    tipoDocFinActividad: string;
    codPersonalFinActividad1: number;
    codPersonalFinActividad2: number;
  
    constructor() {
      this.codPersonal = 0;
      this.tipoCambio = '';
      this.situacion = '';
      this.nombreApellido = '';
      this.cargo = '';
      this.tipoDocActividad = '';
      this.codPersonalActividad1 = 0;
      this.codPersonalActividad2 = 0;
      this.tipoDocFinActividad = '';
      this.codPersonalFinActividad1 = 0;
      this.codPersonalFinActividad2 = 0;
    }
  }
  