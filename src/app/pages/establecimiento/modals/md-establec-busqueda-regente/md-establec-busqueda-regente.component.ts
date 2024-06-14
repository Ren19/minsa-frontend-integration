import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RepresentanteLegalService } from 'src/app/services/representante-legal.service';

@Component({
  selector: 'app-md-establec-busqueda-regente',
  templateUrl: './md-establec-busqueda-regente.component.html',
  styleUrls: ['./md-establec-busqueda-regente.component.css']
})
export class MdEstablecBusquedaRegenteComponent implements OnInit {

  listOpcionesBusqueda:any = [
    {
      "codigo": "REPNUMEDOCID",
      "nombre": "NRO.REGISTRO"
    },
    {
      "codigo": "REPNOMBCOMP",
      "nombre": "NOMBRE"
    },
    {
      "codigo": "REPNUMEINS",
      "nombre": "NRO.DOCIDENTIDAD"
    },
    {
      "codigo": "REPNUMEINS",
      "nombre": "NRO.RUC."
    },
    {
      "codigo": "REPNUMEINS",
      "nombre": "NRO. COLEGIATURA"
    },
  ]
  
  selectBuscarPor: any = null

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public representanteLegalService: RepresentanteLegalService
  ) { }

  ngOnInit() {

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

}
