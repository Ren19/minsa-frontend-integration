import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';
import { RepresentanteLegalService } from 'src/app/services/representante-legal.service';
import { MdEstablecBusquedaDisaComponent } from '../md-establec-busqueda-disa/md-establec-busqueda-disa.component';

@Component({
  selector: 'app-md-establec-busqueda-representante-legal',
  templateUrl: './md-establec-busqueda-representante-legal.component.html',
  styleUrls: ['./md-establec-busqueda-representante-legal.component.css']
})
export class MdEstablecBusquedaRepresentanteLegalComponent implements OnInit {

  listaEstado:any = [];
  selecionarEstado: any = '01'

  listOpcionesBusqueda:any= [
    {
      "codigo": "REPNUMEDOCID",
      "nombre": "NRO. DOC. IDENTIDAD"
    },
    {
      "codigo": "REPNOMBCOMP",
      "nombre": "NOMBRE"
    },
    {
      "codigo": "REPNUMEINS",
      "nombre": "NRO. REGISTRO"
    },
  ]

  selectBuscarPor: any = null

  displayedColumns: string[] = ['n_rep', 'fecha_insc', 'nombre', 'tipo_doc_id', 'n_doc_id', 'sit'];
  dataSource: any = []
  dataSourceCopy: any = []
  selectionRow = new SelectionModel<PeriodicElement>(true, []);

  codigoDisa: any = null
  textoDisa: any = null

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public representanteLegalService: RepresentanteLegalService
  ) { }

  ngOnInit() {
    this.getComboEstado()
  }

  onNoClick(){
    this.dialogRef.close(null);
  }

  onChangeEstado(event: any) {
    this.selecionarEstado = null
    if(event) {
      this.selecionarEstado = event.codigo
    }
  }

  onChangeBuscarPor(event: any) {
    this.selectBuscarPor = null
    if(event) {
      this.selectBuscarPor = event.codigo
    }
  }

  onExpresion(event: any) {
    let campoFiltrar = this.selectBuscarPor ?? "REPNOMBCOMP"
    let contenido = event.target.value.toUpperCase()
    let copy = structuredClone(this.dataSourceCopy)
    let resultadosFiltrados = copy.filter((item) => item[campoFiltrar].includes(contenido));
    this.dataSource = resultadosFiltrados
  }

  onRecuperar() {
    this.representanteLegalService.getBuscarRepresentante1(this.codigoDisa, this.selecionarEstado).subscribe(response => {
      this.dataSource = response.data
      this.dataSourceCopy = response.data
    })
  }

  selectRow(row: any) {
    this.dialogRef.close(row);
  }

  getComboEstado() {
    this.representanteLegalService.getComboEstado().subscribe(response => {
        this.listaEstado = response.data
    })
  }

  openModalBuscarDisa() {
    const dialogRef = this.dialog.open(MdEstablecBusquedaDisaComponent, {
      data: {
        filtroDisa: "%"
      },
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
