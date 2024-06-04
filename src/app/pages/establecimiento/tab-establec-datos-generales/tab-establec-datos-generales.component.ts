import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComunService } from 'src/app/services/comun.service';
import { MdEstablecBusquedaEntidadComponent } from '../modals/md-establec-busqueda-entidad/md-establec-busqueda-entidad.component';
import { MdEstablecSubSectorComponent } from '../modals/md-establec-sub-sector/md-establec-sub-sector.component';

@Component({
  selector: 'app-tab-establec-datos-generales',
  templateUrl: './tab-establec-datos-generales.component.html',
  styleUrls: ['./tab-establec-datos-generales.component.css']
})
export class TabEstablecDatosGeneralesComponent implements OnInit {

  listaSector:any = [];
  selecionarSector: any = null

  codigoSubSector: any = ''
  textoSubSector: string = ''

  codigoEntidad: any = ''
  textoEntidad: string = ''

  constructor(
    public dialog: MatDialog,
    public comunService: ComunService
  ) { }

  ngOnInit() {
    this.getComboSector()
  }

  getComboSector() {
    this.comunService.getComboSector().subscribe(response => {
        this.listaSector = response.data
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

  }
  
}
