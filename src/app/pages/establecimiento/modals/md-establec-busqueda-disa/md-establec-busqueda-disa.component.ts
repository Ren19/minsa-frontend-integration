import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-md-establec-busqueda-disa',
  templateUrl: './md-establec-busqueda-disa.component.html',
  styleUrls: ['./md-establec-busqueda-disa.component.css']
})
export class MdEstablecBusquedaDisaComponent implements OnInit {

  listOpcionesBusqueda:any= [
    {
      "codigo": "DSADESCRIP",
      "nombre": "DESCRIPCION"
    },
    {
      "codigo": "DPTDESCRIP",
      "nombre": "DEPARTAMENTO"
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
    public establecimientoService: EstablecimientoService
  ) { }

  ngOnInit() {
    this.getDisas()
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
    let campoFiltrar = this.selectBuscarPor ?? "DSADESCRIP"
    let contenido = event.target.value.toUpperCase()
    let copy = structuredClone(this.dataSourceCopy)
    let resultadosFiltrados = copy.filter((item) => item[campoFiltrar].toUpperCase().includes(contenido));
    this.dataSource = resultadosFiltrados
  }

  selectRow(row: any) {
    this.dialogRef.close(row);
  }

  getDisas() {
    this.establecimientoService.getDisas().subscribe(response => {
        this.dataSource = response.data
        this.dataSourceCopy = response.data
    })
  }

}
