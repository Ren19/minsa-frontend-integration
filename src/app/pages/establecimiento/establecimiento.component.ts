import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';
import { MdEstablecSolicitudInscripcionComponent } from './modals/md-establec-solicitud-inscripcion/md-establec-solicitud-inscripcion.component';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {

  listaClaseTipo:any = [];
  selecionarClaseTipo: any = null

  listaSituacion: any = []

  codigoSolicitud: any = null

  constructor(
    public dialog: MatDialog,
    private establecimientoService: EstablecimientoService
  ) {}

  ngOnInit() {
    this.getComboClaseTipo();
    this.getComboSituacion()
  }

  public getComboClaseTipo()
  {
    this.establecimientoService.getCboTipo().subscribe(response => {
        this.listaClaseTipo = response.data;
    })
  }

  public getComboSituacion()
  {
    this.establecimientoService.getCboSituacion().subscribe(response => {
        this.listaSituacion = response.data;
    })
  }

  onChangeClaseTipo(event: any) {
    this.selecionarClaseTipo = null
    if(event) {
      this.selecionarClaseTipo = event.codigo
    }
  }

  openModalSolicitudInscripcion() {
    const dialogRef = this.dialog.open(MdEstablecSolicitudInscripcionComponent, {
      width:'100%',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.codigoSolicitud = result.SOLCODIGO
      }
    });
  }

}
