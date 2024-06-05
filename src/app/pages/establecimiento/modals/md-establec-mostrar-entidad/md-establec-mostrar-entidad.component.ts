import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComunService } from 'src/app/services/comun.service';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-md-establec-mostrar-entidad',
  templateUrl: './md-establec-mostrar-entidad.component.html',
  styleUrls: ['./md-establec-mostrar-entidad.component.css']
})
export class MdEstablecMostrarEntidadComponent implements OnInit {

  datoEntidad: any = []

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public establecimientoService: EstablecimientoService,
    public comunService: ComunService,
  ) { }


  ngOnInit() {
    this.getCargarEntidad(this.data.codigoEntidad)
  }

  onNoClick(){
    this.dialogRef.close(null);
  }

  getCargarEntidad(codigo: any) {
    this.comunService.getCargarEntidad(codigo).subscribe(response => {
        this.datoEntidad = response.data
    })
  }

}
