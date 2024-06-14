import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RepresentanteLegalService } from 'src/app/services/representante-legal.service';

@Component({
  selector: 'app-md-establec-busqueda-cargo',
  templateUrl: './md-establec-busqueda-cargo.component.html',
  styleUrls: ['./md-establec-busqueda-cargo.component.css']
})
export class MdEstablecBusquedaCargoComponent implements OnInit {

  listOpcionesBusqueda:any= [
    {
      "codigo": "CARDESCRIP",
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
    public representanteLegalService: RepresentanteLegalService
  ) { }

  ngOnInit() {
    this.getCargo(this.data.condicionCargoBusqueda)
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
    let campoFiltrar = this.selectBuscarPor ?? "CARDESCRIP"
    let contenido = event.target.value.toUpperCase()
    let copy = structuredClone(this.dataSourceCopy)
    let resultadosFiltrados = copy.filter((item) => item[campoFiltrar].includes(contenido));
    this.dataSource = resultadosFiltrados
  }

  selectRow(row: any) {
    this.dialogRef.close(row);
  }

  getCargo(cParam1: any) {
    this.representanteLegalService.getCargo(cParam1).subscribe(response => {
        this.dataSource = response.data
        this.dataSourceCopy = response.data
    })
  }

}
