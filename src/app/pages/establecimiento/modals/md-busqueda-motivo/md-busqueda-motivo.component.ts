import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComunService } from 'src/app/services/comun.service';

@Component({
  selector: 'app-md-busqueda-motivo',
  templateUrl: './md-busqueda-motivo.component.html',
  styleUrls: ['./md-busqueda-motivo.component.css']
})
export class MdBusquedaMotivoComponent implements OnInit {

  listOpcionesBusqueda:any= [
    {
      "codigo": "TDTDESCRIP",
      "nombre": "DESCRIPCION"
    },
  ]
  selectBuscarPor: any = null

  displayedColumns: string[] = ['descripcion'];
  dataSource: any = []
  dataSourceCopy: any = []

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public comunService: ComunService
  ) { }

  ngOnInit() {
    this.getMotivo()
  }

  public onNoClick(){
    this.dialogRef.close(null);
  }


  onChangeBuscarPor(event: any) {
    this.selectBuscarPor = null
    if(event) {
      this.selectBuscarPor = event.codigo
    }
  }

  onExpresion(event: any) {
    let campoFiltrar = this.selectBuscarPor ?? "TDTDESCRIP"
    let contenido = event.target.value.toUpperCase()
    let copy = structuredClone(this.dataSourceCopy)
    let resultadosFiltrados = copy.filter((item) => item[campoFiltrar].includes(contenido));
    this.dataSource = resultadosFiltrados
  }

  selectRow(row: any) {
    this.dialogRef.close(row);
  }

  getMotivo() {
    this.comunService.getMotivo().subscribe(response => {
        this.dataSource = response.data
        this.dataSourceCopy = response.data
    })
  }


}
