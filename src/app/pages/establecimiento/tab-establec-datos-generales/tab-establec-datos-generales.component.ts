import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ComunService } from 'src/app/services/comun.service';
import { PeriodicElement } from '../../representantebusqueda01/representantebusqueda01.component';
import { MdEstablecBusquedaEntidadComponent } from '../modals/md-establec-busqueda-entidad/md-establec-busqueda-entidad.component';
import { MdEstablecDistritoComponent } from '../modals/md-establec-distrito/md-establec-distrito.component';
import { MdEstablecMostrarEntidadComponent } from '../modals/md-establec-mostrar-entidad/md-establec-mostrar-entidad.component';
import { MdEstablecRepresentanteLegalComponent } from '../modals/md-establec-representante-legal/md-establec-representante-legal.component';
import { MdEstablecSubSectorComponent } from '../modals/md-establec-sub-sector/md-establec-sub-sector.component';
import { OPCIONES_BOTONES } from 'src/app/common/global-constants';

@Component({
  selector: 'app-tab-establec-datos-generales',
  templateUrl: './tab-establec-datos-generales.component.html',
  styleUrls: ['./tab-establec-datos-generales.component.css']
})
export class TabEstablecDatosGeneralesComponent implements OnInit {

  listaSector:any = [];
  selecionarSector: any = null

  listaTipoPersona:any = [];
  selecionarTipoPersona: any = null

  listaDias:any = [
    { codigo: "1", nombre: "LUNES" },
    { codigo: "2", nombre: "MARTES" },
    { codigo: "3", nombre: "MIERCOLES" },
    { codigo: "4", nombre: "JUEVES" },
    { codigo: "5", nombre: "VIERNES" },
    { codigo: "6", nombre: "SABADO" },
    { codigo: "7", nombre: "DOMINGO" },

  ];
  selecionarDiasIni: any = null
  selecionarDiasFin: any = null
  selecionarHoraIni: any = null
  selecionarHoraFin: any = null
  listadoHorarioDetalle: any = []

  codigoSubSector: any = ''
  textoSubSector: string = ''

  codigoEntidad: any = ''
  textoEntidad: string = ''

  codigoDepartamento: any = null
  textoDepartamento: any = null
  codigoProvincia: any = null
  textoProvincia: any = null
  codigoDistrito: any = null
  textoDistrito: any = null

  displayedColumnsRepresentanteLegal: string[] = ['nombreCompleto', 'cargo', 'sit'];
  dataSourceRepresentanteLegal: any[] = []
  selectionRowRepresentanteLegal: boolean = false
  mapRepresentanteLegal = new Map<string, any>();
  representanteLegal: any = null

  displayedColumnsPersonal: string[] = ['nombreCompleto', 'cargo', 'sit'];
  dataSourcePersonal: any = []
  selectionPersonal: boolean = false

  displayedColumnsHorario: string[] = ['dia', 'horario'];
  dataSourceHorario: any = []
  selectionHorario = new SelectionModel<PeriodicElement>(true, []);

  displayedColumnsHorarioDetalle: string[] = ['horario_detalle'];
  dataSourceHorarioDetalle: any = []
  selectionHorarioDetalle = new SelectionModel<PeriodicElement>(true, []);

  mostrarCamposRegistro: boolean = false

  mapHorarioCompleto = new Map<string, Array<string>>();

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public comunService: ComunService
  ) { }

  ngOnInit() {
    this.getComboSector()
    this.getComboTipoPersona()
  }

  getComboSector() {
    this.comunService.getComboSector().subscribe(response => {
        this.listaSector = response.data
    })
  }

  getComboTipoPersona() {
    this.comunService.getComboTipoPersona().subscribe(response => {
        this.listaTipoPersona = response.data
    })
  }

  onChangeSector(event: any) {
    this.codigoSubSector = null
    this.textoSubSector = ''
    this.selecionarSector = null
    if(event) {
      this.selecionarSector = event.codigo
    }
  }

  openModalSubSector() {
    const dialogRef = this.dialog.open(MdEstablecSubSectorComponent, {
      data: {
        codigoSector: this.selecionarSector
      },
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.codigoSubSector = result.SSTCODIGO
      this.textoSubSector = result.SSTDESCRIP
    });
  }

  openModalBuquedaEntidad() {
    const dialogRef = this.dialog.open(MdEstablecBusquedaEntidadComponent, {
      width:'990px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.codigoEntidad = result.ENTCODIGO
        this.textoEntidad = result.ENTRAZONSOC
      }
    });
  }

  openModalVisualizacionEntidad() {
    const dialogRef = this.dialog.open(MdEstablecMostrarEntidadComponent, {
      data: {
        codigoEntidad: this.codigoEntidad
      },
      width:'990px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  onChangeTipoPersona(event: any) {
    this.selecionarTipoPersona = null
    if(event) {
      this.selecionarTipoPersona = event.codigo
    }
  }

  openModalDistrito() {
    const dialogRef = this.dialog.open(MdEstablecDistritoComponent, {
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.codigoDepartamento = result.DPTCODIGO;
        this.textoDepartamento = result.DPTDESCRIP;
        this.codigoProvincia = result.PRVCODIGO;
        this.textoProvincia = result.PRVDESCRIP;
        this.codigoDistrito = result.DISCODIGO;
        this.textoDistrito = result.DISDESCRIP;
      }
    });
  }

  openModalRepresentanteLegal() {
    const dialogRef = this.dialog.open(MdEstablecRepresentanteLegalComponent, {
      data: { representanteLegal: this.representanteLegal },
      width:'990px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.dataSourceRepresentanteLegal = []

        let primeraClave = result?.keys()?.next()?.value;
        let primerValor = result?.get(primeraClave);

        if(this.mapRepresentanteLegal.has(primeraClave)) {
          let currentValue: any = this.mapHorarioCompleto.get(primeraClave);
          this.mapRepresentanteLegal.set(primeraClave, {...structuredClone(currentValue), ...structuredClone(primerValor)});
        } else {
          this.mapRepresentanteLegal.set(primeraClave, primerValor);
        }

        for (let [key, value] of this.mapRepresentanteLegal.entries()) {
          this.dataSourceRepresentanteLegal.push({
            codigoRepresentanteLegal: value?.codigoRepresentanteLegal,
            nombreCompleto: value?.representanteLegal?.REPNOMBCOMP,
            cargo: value?.cargo?.CARDESCRIP,
            situacion: value?.situacion?.nombre
          })
        }
      }
    });
  }

  onChangeDiaIni(event: any) {
    this.selecionarDiasIni = null
    if(event) {
      this.selecionarDiasIni = event
    }
  }

  onChangeDiaFin(event: any) {
    this.selecionarDiasFin = null
    if(event) {
      this.selecionarDiasFin = event
    }
  }

  onMostarCampos() {
    this.selecionarDiasIni = null
    this.selecionarDiasFin = null
    this.selecionarHoraIni = null
    this.selecionarHoraFin = null
    this.mostrarCamposRegistro = true
  }

  onOcultarCampos() {
    this.selecionarDiasIni = null
    this.selecionarDiasFin = null
    this.selecionarHoraIni = null
    this.selecionarHoraFin = null
    this.mostrarCamposRegistro = false
  }

  onGuardarHorario() {
    this.dataSourceHorario = []
    let valueDiaIni = parseInt(this.selecionarDiasIni.codigo)
    let valueDiaFin = parseInt(this.selecionarDiasFin.codigo)
    if(valueDiaIni > valueDiaFin) {
      alert('Dia Inicial debe ser menor o igual a Dia Final')
      return;
    }

    for(let i = valueDiaIni; i <= valueDiaFin; i++) {
      let valor = this.listaDias.filter((item) => parseInt(item.codigo) == i)[0]

      if(this.mapHorarioCompleto.has(valor.nombre)) {
        let currentValue: any = this.mapHorarioCompleto.get(valor.nombre);
        currentValue.push(`${this.selecionarHoraIni}-${this.selecionarHoraFin}`);
        this.mapHorarioCompleto.set(valor.nombre, currentValue);
      } else {
        let newArray = [`${this.selecionarHoraIni}-${this.selecionarHoraFin}`];
        this.mapHorarioCompleto.set(valor.nombre, newArray);
      }
    }

    for (let [key, value] of this.mapHorarioCompleto.entries()) {
      this.dataSourceHorario.push({dia: key, horario: value[value.length - 1]})
    }

    this.selecionarDiasIni = null
    this.selecionarDiasFin = null
    this.selecionarHoraIni = null
    this.selecionarHoraFin = null

  }

  selectRowHorario(row: any, i: any) {
    this.dataSourceHorarioDetalle = []
    let horariosDetalle: any = this.mapHorarioCompleto.get(row.dia)
    horariosDetalle.forEach(det => {
      this.dataSourceHorarioDetalle.push({ detalle: det})
    });
  }

  selectRowDetalleHorario(row: any, i: any) {

  }

  selectRowRepresentanteLegal(row: any, i: any) {
    this.selectionRowRepresentanteLegal = true
    this.representanteLegal = this.mapRepresentanteLegal.get(this.dataSourceRepresentanteLegal[i].codigoRepresentanteLegal)
  }

  onEliminarRepresentanteLegal() {
    this.mapRepresentanteLegal.delete(this.representanteLegal.codigoRepresentanteLegal)
    this.dataSourceRepresentanteLegal = []
    this.selectionRowRepresentanteLegal = false
    for (let [key, value] of this.mapRepresentanteLegal.entries()) {
      this.dataSourceRepresentanteLegal.push({
        codigoRepresentanteLegal: value?.codigoRepresentanteLegal,
        nombreCompleto: value?.representanteLegal?.REPNOMBCOMP,
        cargo: value?.cargo?.CARDESCRIP,
        situacion: value?.situacion?.nombre
      })
    }
  }

  onNuevoRepresentanteLegal() {
    this.representanteLegal = null
    this.openModalRepresentanteLegal()
  }

}
