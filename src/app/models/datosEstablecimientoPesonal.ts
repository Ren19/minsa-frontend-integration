export class FormularioDatosEstablecimientoPersonal {
    codPersonal: number;
    tipoCambio: string;
    situacion: string;
    nombreApellido: string;
    nroColegiatura: number;
    cargo: string;
    nroResponsableDrogas: number;
    tipoDocomentoActividad: string;
    codPersonalActividad1: number;
    codPersonalActividad2: number;
    tipoDocSegundoActividad1: string;
    codPersonalSegundoActividad1: number;
    codPersonalSegundoActividad2: number;
   
  
    constructor() {
      this.codPersonal = 0;
      this.tipoCambio = '';
      this.situacion = '';
      this.nombreApellido = '';
      this.nroColegiatura = 0;
      this.cargo = '';
      this.nroResponsableDrogas = 0;
      this.tipoDocomentoActividad = '';
      this.codPersonalActividad1 = 0;
      this.codPersonalActividad2 = 0;
      this.tipoDocSegundoActividad1 = '';
      this.codPersonalSegundoActividad1 = 0;
      this.codPersonalSegundoActividad2 = 0;
    }
  }