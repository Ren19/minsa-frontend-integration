import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MdEstablecDistritoComponent } from '../modals/md-establec-distrito/md-establec-distrito.component';

@Component({
  selector: 'app-tab-establec-otros-datos',
  templateUrl: './tab-establec-otros-datos.component.html',
  styleUrls: ['./tab-establec-otros-datos.component.css']
})
export class TabEstablecOtrosDatosComponent {

  codigoDepartamento: any = null
  textoDepartamento: any = null
  codigoProvincia: any = null
  textoProvincia: any = null
  codigoDistrito: any = null
  textoDistrito: any = null
  
  constructor(
    public dialog: MatDialog,
  ) {}

  openModalDistrito() {
    const dialogRef = this.dialog.open(MdEstablecDistritoComponent, {
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.codigoDepartamento = result.DPTCODIGO;
      this.textoDepartamento = result.DPTDESCRIP;
      this.codigoProvincia = result.PRVCODIGO;
      this.textoProvincia = result.PRVDESCRIP;
      this.codigoDistrito = result.DISCODIGO;
      this.textoDistrito = result.DISDESCRIP;
    });
  }

}
