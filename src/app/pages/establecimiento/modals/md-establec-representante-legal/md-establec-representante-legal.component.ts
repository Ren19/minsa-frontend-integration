import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RepresentanteLegalService } from 'src/app/services/representante-legal.service';
import { MdEstablecBusquedaCargoComponent } from '../md-establec-busqueda-cargo/md-establec-busqueda-cargo.component';
import { MdEstablecBusquedaRepresentanteLegalComponent } from '../md-establec-busqueda-representante-legal/md-establec-busqueda-representante-legal.component';

@Component({
  selector: 'app-md-establec-representante-legal',
  templateUrl: './md-establec-representante-legal.component.html',
  styleUrls: ['./md-establec-representante-legal.component.css']
})
export class MdEstablecRepresentanteLegalComponent implements OnInit {

  listaInicioActTipoDocumento:any = [];
  selecionarInicioActTipoDocumento: any = null

  listaFinActTipoDocumento:any = [];
  selecionarFinActTipoDocumento: any = null

  listaSituacion:any = [];
  selecionarSituacion: any = null

  codigoCargo: any = null
  textocargo: any = null

  textoNombrRepresentanteLegal: any = null

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public representanteLegalService: RepresentanteLegalService
  ) { }

  ngOnInit() {
    this.getSituacion()
    this.getComboTipoDocumentoReferencia()
  }

  onNoClick(){
    this.dialogRef.close(null);
  }


  onChangeInicioActTipoDocumento(event: any) {
    this.selecionarInicioActTipoDocumento = null
    if(event) {
      this.selecionarInicioActTipoDocumento = event.codigo
    }
  }

  onChangeFinActTipoDocumento(event: any) {
    this.selecionarFinActTipoDocumento = null
    if(event) {
      this.selecionarFinActTipoDocumento = event.codigo
    }
  }

  onChangeSituacion(event: any) {
    this.selecionarSituacion = null
    if(event) {
      this.selecionarSituacion = event.codigo
    }
  }


  getComboTipoDocumentoReferencia() {
    this.representanteLegalService.getComboTipoDocumentoReferencia().subscribe(response => {
        this.listaInicioActTipoDocumento = response.data
        this.listaFinActTipoDocumento = response.data
    })
  }

  getSituacion() {
    this.representanteLegalService.getSituacion().subscribe(response => {
        this.listaSituacion = response.data
    })
  }

  openModalBuscarCargo() {
    const dialogRef = this.dialog.open(MdEstablecBusquedaCargoComponent, {
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.codigoCargo = result.CARCODIGO
        this.textocargo = result.CARDESCRIP
      }
    });
  }

  openModalBuscarRepresentanteLegal() {
    const dialogRef = this.dialog.open(MdEstablecBusquedaRepresentanteLegalComponent, {
      width:'60%',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.textoNombrRepresentanteLegal = result.REPNOMBCOMP
      }
    });
  }

}
