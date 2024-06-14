import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RepresentanteLegalService } from 'src/app/services/representante-legal.service';
import { MdEstablecBusquedaCargoComponent } from '../md-establec-busqueda-cargo/md-establec-busqueda-cargo.component';
import { MdEstablecBusquedaRepresentanteLegalComponent } from '../md-establec-busqueda-representante-legal/md-establec-busqueda-representante-legal.component';
import { ComunService } from 'src/app/services/comun.service';

@Component({
  selector: 'app-md-establec-representante-legal',
  templateUrl: './md-establec-representante-legal.component.html',
  styleUrls: ['./md-establec-representante-legal.component.css']
})
export class MdEstablecRepresentanteLegalComponent implements OnInit {

  nroDocumentoInicioActividad: any = null
  fechaInicioActividad: any = null
  listaInicioActTipoDocumento:any = [];
  selecionarInicioActTipoDocumento: any = null

  nroDocumentoFinActividad: any = null
  fechaFinActividad: any = null
  listaFinActTipoDocumento:any = [];
  selecionarFinActTipoDocumento: any = null

  listaSituacion:any = [];
  selecionarSituacion: any = null
  codigoSelecionarSituacion: any = null

  listaCargo: any = null;
  codigoCargo: any = null
  textocargo: any = null

  listaRepresentanteLegal: any = null
  textoNombrRepresentanteLegal: any = null
  textoCodigoRepresentanteLegal: any = null

  mapRepresentanteLegal = new Map<string, any>();

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public representanteLegalService: RepresentanteLegalService,
    public comunService: ComunService,
  ) { }

  ngOnInit() {
    this.getSituacion()
    this.getComboTipoDocumentoReferencia()
    if(this.data.representanteLegal != null) {
      let datosRepresentanteLegal = this.data.representanteLegal

      this.textoCodigoRepresentanteLegal = datosRepresentanteLegal?.representanteLegal?.REPNUMEINS
      this.textoNombrRepresentanteLegal = datosRepresentanteLegal?.representanteLegal?.REPNOMBCOMP

      this.listaRepresentanteLegal = datosRepresentanteLegal?.representanteLegal
      this.listaCargo = datosRepresentanteLegal?.cargo
      this.textocargo = datosRepresentanteLegal?.cargo?.CARDESCRIP

      this.selecionarSituacion = datosRepresentanteLegal?.situacion
      this.codigoSelecionarSituacion = datosRepresentanteLegal?.situacion?.codigo

      this.selecionarInicioActTipoDocumento = datosRepresentanteLegal?.inicioActividad?.tipoDocumento
      this.nroDocumentoInicioActividad = datosRepresentanteLegal?.inicioActividad?.nroDocumento
      this.fechaInicioActividad = datosRepresentanteLegal?.inicioActividad?.fechaDocumento

      this.selecionarFinActTipoDocumento = datosRepresentanteLegal?.finActividad?.tipoDocumento
      this.nroDocumentoFinActividad = datosRepresentanteLegal?.finActividad?.nroDocumento
      this.fechaFinActividad =  datosRepresentanteLegal?.finActividad?.fechaDocumento
    }
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
      this.selecionarSituacion = event
    }
  }


  getComboTipoDocumentoReferencia() {
    this.comunService.getComboTipoDocumento().subscribe(response => {
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
      data: {
        condicionCargoBusqueda: '%'
      },
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.listaCargo = result
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
        this.listaRepresentanteLegal = result
        this.textoNombrRepresentanteLegal = result.REPNOMBCOMP
        this.textoCodigoRepresentanteLegal = result.REPNUMEINS
      }
    });
  }

  onAceptar() {
    if(!this.mapRepresentanteLegal.has(this.textoCodigoRepresentanteLegal)) {
      let newData = {
        codigoRepresentanteLegal: this.textoCodigoRepresentanteLegal,
        representanteLegal: this.listaRepresentanteLegal,
        cargo: this.listaCargo,
        situacion: this.selecionarSituacion,
        inicioActividad: {
          tipoDocumento: this.selecionarInicioActTipoDocumento,
          nroDocumento: this.nroDocumentoInicioActividad,
          fechaDocumento: this.fechaInicioActividad
        },
        finActividad: {
          tipoDocumento: this.selecionarFinActTipoDocumento,
          nroDocumento: this.nroDocumentoFinActividad,
          fechaDocumento: this.fechaFinActividad
        },
      };
      this.mapRepresentanteLegal.set(this.textoCodigoRepresentanteLegal, newData);
    }

    this.dialogRef.close(this.mapRepresentanteLegal);
  }

  onSalir() {
    this.dialogRef.close(null);
  }

}
