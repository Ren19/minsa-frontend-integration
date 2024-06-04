import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';
import { ComunService } from 'src/app/services/comun.service';

@Component({
  selector: 'app-md-establec-grupo-producto',
  templateUrl: './md-establec-grupo-producto.component.html',
  styleUrls: ['./md-establec-grupo-producto.component.css']
})
export class MdEstablecGrupoProductoComponent implements OnInit {

  listOpcionesBusqueda:any= [
    {
      "codigo": "TCPDESCRIP",
      "nombre": "CLASIFICACION"
    },
    {
      "codigo": "GRPDESCRIP",
      "nombre": "GRUPO"
    },
    {
      "codigo": "SGPDESCRIP",
      "nombre": "SUBGRUPO"
    },
  ]
  selectBuscarPor: any = null

  displayedColumns: string[] = ['select', 'clasificacion', 'subClasificacion', 'grupoDeProducto', 'subGrupo'];
  dataSource: any = []
  dataSourceCopy: any = []
  selectionRow = new SelectionModel<PeriodicElement>(true, []);

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public comunService: ComunService
  ) { }

  ngOnInit() {
    this.getGrupoProducto()
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
    let campoFiltrar = this.selectBuscarPor ?? "TCPDESCRIP"
    let contenido = event.target.value.toUpperCase()
    let copy = structuredClone(this.dataSourceCopy)
    let resultadosFiltrados = copy.filter((item) => item[campoFiltrar].includes(contenido));
    this.dataSource = resultadosFiltrados
  }

  getGrupoProducto() {
    this.comunService.getGrupoProducto().subscribe(response => {
        this.dataSource = response.data
        this.dataSourceCopy = response.data
    })
  }

  onAgregarSeleccionados() {
    this.dialogRef.close(this.selectionRow.selected);
  }

}
