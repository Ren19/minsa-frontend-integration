import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';
import { ComunService } from 'src/app/services/comun.service';

@Component({
  selector: 'app-md-establec-actividad',
  templateUrl: './md-establec-actividad.component.html',
  styleUrls: ['./md-establec-actividad.component.css']
})
export class MdEstablecActividadComponent implements OnInit {

  listOpcionesBusqueda:any= [
    {
      "codigo": "ACTDESCRIP",
      "nombre": "DESCRIPCION"
    },
  ]
  selectBuscarPor: any = null

  displayedColumns: string[] = ['select', 'descripcion'];
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
    this.getActividadPorClaseTipo(this.data.codigoClaseTipo)
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
    let campoFiltrar = this.selectBuscarPor ?? "ACTDESCRIP"
    let contenido = event.target.value.toUpperCase()
    let copy = structuredClone(this.dataSourceCopy)
    let resultadosFiltrados = copy.filter((item) => item[campoFiltrar].includes(contenido));
    this.dataSource = resultadosFiltrados
  }

  getActividadPorClaseTipo(claseTipo: any) {
    this.comunService.getActividadPorClaseTipo(claseTipo).subscribe(response => {
        this.dataSource = response.data
        this.dataSourceCopy = response.data
    })
  }

  onAgregarSeleccionados() {
    this.dialogRef.close(this.selectionRow.selected);
  }

}
