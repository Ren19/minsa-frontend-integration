import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MdEstablecDistritoComponent } from 'src/app/pages/establecimiento/modals/md-establec-distrito/md-establec-distrito.component';
import { ComunService } from 'src/app/services/comun.service';

@Component({
  selector: 'app-tab-sup-datos-generales',
  templateUrl: './tab-sup-datos-generales.component.html',
  styleUrls: ['./tab-sup-datos-generales.component.css']
})
export class TabSupDatosGeneralesComponent {

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

}
