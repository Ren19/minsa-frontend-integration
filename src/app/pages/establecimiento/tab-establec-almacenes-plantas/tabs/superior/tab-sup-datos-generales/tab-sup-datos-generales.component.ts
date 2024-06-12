import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OPCIONES_BOTONES } from 'src/app/common/global-constants';
import { MdEstablecDistritoComponent } from 'src/app/pages/establecimiento/modals/md-establec-distrito/md-establec-distrito.component';
import { ComunService } from 'src/app/services/comun.service';

@Component({
  selector: 'app-tab-sup-datos-generales',
  templateUrl: './tab-sup-datos-generales.component.html',
  styleUrls: ['./tab-sup-datos-generales.component.css']
})
export class TabSupDatosGeneralesComponent implements OnInit {

  opcionesBoton = OPCIONES_BOTONES
  @Input() opcionBoton: any;

  listaCondUso:any = [];
  selecionarCondUso: any = null

  listaTipo:any = [];
  selecionarTipo: any = null

  listaSec: any = [
    { codigo:'01', nombre:'01'},
    { codigo:'02', nombre:'02'},
    { codigo:'03', nombre:'03'},
    { codigo:'04', nombre:'04'},
    { codigo:'05', nombre:'05'},
    { codigo:'06', nombre:'06'},
    { codigo:'07', nombre:'07'},
    { codigo:'08', nombre:'08'},
    { codigo:'09', nombre:'09'},
  ];
  selecionarSec: any = null

  codigoDepartamento: any = null
  textoDepartamento: any = null
  codigoProvincia: any = null
  textoProvincia: any = null
  codigoDistrito: any = null
  textoDistrito: any = null
  textoDepProDep: any = null

  constructor(
    public dialog: MatDialog,
    public comunService: ComunService
  ) { }

  ngOnInit() {
    this.getAlAlCondUso()
    this.getAlAlTipo()
  }

  openModalDistrito() {
    const dialogRef = this.dialog.open(MdEstablecDistritoComponent, {
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.codigoDepartamento = result.DPTCODIGO;
        this.textoDepartamento = result.DPTDESCRIP;
        this.codigoProvincia = result.PRVCODIGO;
        this.textoProvincia = result.PRVDESCRIP;
        this.codigoDistrito = result.DISCODIGO;
        this.textoDistrito = result.DISDESCRIP;
        this.textoDepProDep = `${result.DPTDESCRIP} / ${result.PRVDESCRIP} / ${result.DISDESCRIP}`;
      }
    });
  }

  getAlAlCondUso() {
    this.comunService.getAlAlCondUso().subscribe(response => {
        this.listaCondUso = response.data
    })
  }

  onChangeCondUso(event: any) {
    this.selecionarCondUso = null
    if(event) {
      this.selecionarCondUso = event.codigo
    }
  }

  getAlAlTipo() {
    this.comunService.getAlAlTipo().subscribe(response => {
        this.listaTipo = response.data
    })
  }

  onChangeTipo(event: any) {
    this.selecionarTipo = null
    if(event) {
      this.selecionarTipo = event.codigo
    }
  }

  onChangeSec(event: any) {
    this.selecionarSec = null
    if(event) {
      this.selecionarSec = event.codigo
    }
  }

}
