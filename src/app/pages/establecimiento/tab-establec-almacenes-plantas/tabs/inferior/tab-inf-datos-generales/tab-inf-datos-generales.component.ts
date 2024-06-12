import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComunService } from 'src/app/services/comun.service';

@Component({
  selector: 'app-tab-inf-datos-generales',
  templateUrl: './tab-inf-datos-generales.component.html',
  styleUrls: ['./tab-inf-datos-generales.component.css']
})
export class TabInfDatosGeneralesComponent implements OnInit {

  listaFormaObtencion:any = [];
  selecionarFormaObtencion: any = null

  listaFormSolicitud:any = [];
  selecionarFormSolicitud: any = null

  constructor(
    public dialog: MatDialog,
    public comunService: ComunService
  ) { }

  ngOnInit() {
    this.getAlAlFormaObtencion()
    this.getAlAlFormatoSolicitud()
  }

  onChangeFormaObtencion(event: any) {
    this.selecionarFormaObtencion = null
    if(event) {
      this.selecionarFormaObtencion = event.codigo
    }
  }

  onChangeFormSolicitud(event: any) {
    this.selecionarFormSolicitud = null
    if(event) {
      this.selecionarFormSolicitud = event.codigo
    }
  }

  getAlAlFormaObtencion() {
    this.comunService.getAlAlFormaObtencion().subscribe(response => {
        this.listaFormaObtencion = response.data
    })
  }

  getAlAlFormatoSolicitud() {
    this.comunService.getAlAlFormatoSolicitud().subscribe(response => {
        this.listaFormSolicitud = response.data
    })
  }

}
