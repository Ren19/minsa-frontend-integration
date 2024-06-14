import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComunService } from 'src/app/services/comun.service';
import { RepresentanteLegalService } from 'src/app/services/representante-legal.service';
import { MdEstablecBusquedaCargoComponent } from '../md-establec-busqueda-cargo/md-establec-busqueda-cargo.component';
import { MdEstablecBusquedaRegenteComponent } from '../md-establec-busqueda-regente/md-establec-busqueda-regente.component';

@Component({
  selector: 'app-md-establec-registro-personal',
  templateUrl: './md-establec-registro-personal.component.html',
  styleUrls: ['./md-establec-registro-personal.component.css']
})
export class MdEstablecRegistroPersonalComponent {

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

  listaPersonal: any = null
  textoNombrPersonal: any = null
  textoCodigoPersonal: any = null

  mapPersonal = new Map<string, any>();

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public representanteLegalService: RepresentanteLegalService,
    public comunService: ComunService,
  ) { }

  onNoClick(){
    this.dialogRef.close(null);
  }

  onChangeSituacion(event: any) {
    this.selecionarSituacion = null
    if(event) {
      this.selecionarSituacion = event
    }
  }

  openModalBuscarRegente() {
    const dialogRef = this.dialog.open(MdEstablecBusquedaRegenteComponent, {
      width:'60%',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.listaPersonal = result
        this.textoNombrPersonal = result.REPNOMBCOMP
        this.textoCodigoPersonal = result.REPNUMEINS
      }
    });
  }

  openModalBuscarCargo() {
    const dialogRef = this.dialog.open(MdEstablecBusquedaCargoComponent, {
      data: {
        condicionCargoBusqueda: 'S'
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

}
