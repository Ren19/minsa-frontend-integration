import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';
import { ComunService } from 'src/app/services/comun.service';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';
import { MdEstablecSubSectorComponent } from '../md-establec-sub-sector/md-establec-sub-sector.component';

@Component({
  selector: 'app-md-establec-busqueda-entidad',
  templateUrl: './md-establec-busqueda-entidad.component.html',
  styleUrls: ['./md-establec-busqueda-entidad.component.css']
})
export class MdEstablecBusquedaEntidadComponent implements OnInit {

  listaSector:any = [];
  selecionarSector: any = '%'

  codigoSubSector: any = '%'
  textoSubSector: string = ''

  listOpcionesBusqueda:any= [
    {
      "codigo": "ENTCODIGO",
      "nombre": "CODIGO ENTIDAD"
    },
    {
      "codigo": "ENTRAZONSOC",
      "nombre": "RAZON SOCIAL"
    },
    {
      "codigo": "ENTNUMEDOCID",
      "nombre": "NRO. DOC. IDENTIDAD"
    },
  ]
  selectBuscarPor: any = null

  displayedColumns: string[] = ['codEntidad', 'reazonSocial', 'tipoDocId', 'nroDocId', 'sector', 'subSector'];
  dataSource: any = []
  dataSourceCopy: any = []
  selectionRow = new SelectionModel<PeriodicElement>(true, []);

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public establecimientoService: EstablecimientoService,
    public comunService: ComunService,
  ) { }

  ngOnInit() {
    this.getComboBusquedaEntidadSector()
    this.getBuscarEntidadET(this.selecionarSector, this.codigoSubSector)
  }

  onNoClick(){
    this.dialogRef.close(null);
  }

  onChangeBuscarPor(event: any) {
    this.selectBuscarPor = null
    if(event) {
      this.selectBuscarPor = event.codigo
    }
  }

  onExpresion(event: any) {
    let campoFiltrar = this.selectBuscarPor ?? "ENTRAZONSOC"
    let contenido = event.target.value.toUpperCase()
    let copy = structuredClone(this.dataSourceCopy)
    let resultadosFiltrados = copy.filter((item) => item[campoFiltrar].includes(contenido));
    this.dataSource = resultadosFiltrados
  }

  selectRow(row: any) {
    this.dialogRef.close(row);
  }

  onChangeSector(event: any) {
    this.codigoSubSector = null
    this.textoSubSector = ''
    this.selecionarSector = null
    if(event) {
      if(event.codigo == '%') {
        this.codigoSubSector = event.codigo
        this.textoSubSector = 'TODOS'
      }else {
        this.selecionarSector = event.codigo
      }
    }
  }

  getComboBusquedaEntidadSector() {
    this.establecimientoService.getComboBusquedaEntidadSector().subscribe(response => {
        this.listaSector = response.data
    })
  }

  getBuscarEntidadET(sector: any, subsector: any) {
    this.comunService.getBuscarEntidadET(sector, subsector).subscribe(response => {
        this.dataSource = response.data
        this.dataSourceCopy = response.data
    })
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
      if(result != null) {
        this.codigoSubSector = result.SSTCODIGO
        this.textoSubSector = result.SSTDESCRIP
      }
    });
  }

  onInicializar() {
    this.codigoSubSector = '%'
    this.textoSubSector = 'TODOS'
    this.selecionarSector = '%'
    this.getBuscarEntidadET(this.selecionarSector, this.codigoSubSector)
  }

  onRecuperar() {
    this.getBuscarEntidadET(this.selecionarSector, this.codigoSubSector)
  }


}
