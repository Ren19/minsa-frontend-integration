import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComunService } from 'src/app/services/comun.service';
import { MdEstablecBusquedaEntidadComponent } from '../modals/md-establec-busqueda-entidad/md-establec-busqueda-entidad.component';
import { MdEstablecSubSectorComponent } from '../modals/md-establec-sub-sector/md-establec-sub-sector.component';
import { MdEstablecMostrarEntidadComponent } from '../modals/md-establec-mostrar-entidad/md-establec-mostrar-entidad.component';
import { MdEstablecDistritoComponent } from '../modals/md-establec-distrito/md-establec-distrito.component';
import { PeriodicElement } from '../../representantebusqueda01/representantebusqueda01.component';
import { SelectionModel } from '@angular/cdk/collections';

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

  displayedColumnsRepresentanteLegal: string[] = ['apellidos_nombres', 'cargo', 'sit'];
  dataSourceRepresentanteLegal: any = []
  selectionRowRepresentanteLegal = new SelectionModel<PeriodicElement>(true, []);

  displayedColumnsPersonal: string[] = ['apellidos_nombres', 'cargo', 'sit'];
  dataSourcePersonal: any = []
  selectionPersonal = new SelectionModel<PeriodicElement>(true, []);

  displayedColumnsHorario: string[] = ['dia', 'horario'];
  dataSourceHorario: any = []
  selectionHorario = new SelectionModel<PeriodicElement>(true, []);

  displayedColumnsHorarioDetalle: string[] = ['horario_detalle'];
  dataSourceHorarioDetalle: any = []
  selectionHorarioDetalle = new SelectionModel<PeriodicElement>(true, []);

  constructor(
    public dialog: MatDialog,
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

}
