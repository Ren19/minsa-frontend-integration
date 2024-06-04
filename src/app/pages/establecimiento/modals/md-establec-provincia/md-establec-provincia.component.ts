import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComunService } from 'src/app/services/comun.service';

@Component({
  selector: 'app-md-establec-provincia',
  templateUrl: './md-establec-provincia.component.html',
  styleUrls: ['./md-establec-provincia.component.css']
})
export class MdEstablecProvinciaComponent implements OnInit {

  listOpcionesBusqueda:any= [
    {
      "codigo": "PRVDESCRIP",
      "nombre": "DESCRIPCION"
    },
  ]
  selectBuscarPor: any = null

  displayedColumns: string[] = ['descripcion', 'departamento'];
  dataSource: any = []
  dataSourceCopy: any = []

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public comunService: ComunService
  ) { }

  ngOnInit() {
    this.getProvincias(this.data.codigoDepartamento)
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
    let campoFiltrar = this.selectBuscarPor ?? "PRVDESCRIP"
    let contenido = event.target.value.toUpperCase()
    let copy = structuredClone(this.dataSourceCopy)
    let resultadosFiltrados = copy.filter((item) => item[campoFiltrar].includes(contenido));
    this.dataSource = resultadosFiltrados
  }

  selectRow(row: any) {
    this.dialogRef.close(row);
  }

  getProvincias(cParam1: any) {
    this.comunService.getProvincias(cParam1).subscribe(response => {
        this.dataSource = response.data
        this.dataSourceCopy = response.data
    })
  }

}
