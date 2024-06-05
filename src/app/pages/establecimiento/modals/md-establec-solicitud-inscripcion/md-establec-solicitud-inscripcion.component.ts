import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';
import { MdEstablecBusquedaDisaComponent } from '../md-establec-busqueda-disa/md-establec-busqueda-disa.component';

@Component({
  selector: 'app-md-establec-solicitud-inscripcion',
  templateUrl: './md-establec-solicitud-inscripcion.component.html',
  styleUrls: ['./md-establec-solicitud-inscripcion.component.css']
})
export class MdEstablecSolicitudInscripcionComponent implements OnInit {

  listOpcionesBusqueda:any= [
    {
      "codigo": "SOLCODIGO",
      "nombre": "NRO.SOLICITUD"
    },
    {
      "codigo": "EXPCODIGO",
      "nombre": "NRO.EXPEDIENTE/DOCUMENTO"
    },
    {
      "codigo": "SOLNUMEINS",
      "nombre": "COD.ESTABLECIMIENTO"
    },
    {
      "codigo": "SSTDESCRIPENT",
      "nombre": "RAZON SOCIAL ESTABLECIMIENTO"
    },
    {
      "codigo": "ESTRAZONSOC",
      "nombre": "NOMBRE COMERCIAL ESTABLECIMIENTO"
    },
    {
      "codigo": "EVACODIGO",
      "nombre": "NRO. EVALUACION"
    },
  ]

  selectBuscarPor: any = null

  displayedColumns: string[] = ['nSol', 'fecSol', 'nExpDoc', 'tram', 'entOrig', 'codEst', 'razSocEst', 'nomComEst', 'p', 'nroEval', 'direccion'];
  dataSource: any = []
  dataSourceCopy: any = []
  selectionRow = new SelectionModel<PeriodicElement>(true, []);

  codigoDisa: any = null
  textoDisa: any = null

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public establecimientoService: EstablecimientoService
  ) { }

  ngOnInit() {
    this.getSolicitudPendientePantalla2('%')
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
    let campoFiltrar = this.selectBuscarPor ?? "SOLCODIGO"
    let contenido = event.target.value.toUpperCase()
    let copy = structuredClone(this.dataSourceCopy)
    let resultadosFiltrados = copy.filter((item) => item[campoFiltrar].includes(contenido));
    this.dataSource = resultadosFiltrados
  }

  getSolicitudPendientePantalla2(dsacodigo: any) {
    this.establecimientoService.getSolicitudPendientePantalla2('EI', dsacodigo, '%', '%').subscribe(response => {
      this.dataSource = response.data
      this.dataSourceCopy = response.data
    })
  }

  selectRow(row: any) {
    this.dialogRef.close(row);
  }

  onInicializar() {
    this.dataSource = []
    this.dataSourceCopy = []
    this.codigoDisa = null
    this.textoDisa = null
    this.getSolicitudPendientePantalla2('%')
  }

  onRecuperar() {
    if(this.codigoDisa != null && this.codigoDisa != '') {
      this.getSolicitudPendientePantalla2(this.codigoDisa)
    }
  }


  openModalBuscarDisa() {
    const dialogRef = this.dialog.open(MdEstablecBusquedaDisaComponent, {
      width:'990px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.codigoDisa = result.DSACODIGO
        this.textoDisa = result.DSADESCRIP
      }
    });
  }

}
