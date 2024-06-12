import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MdEstablecDistritoComponent } from '../modals/md-establec-distrito/md-establec-distrito.component';
import { ComunService } from 'src/app/services/comun.service';

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

  listaRenaes: any = []
  categoriaRenaes: any = ""
  definicionRenaes: any = ""

  constructor(
    public dialog: MatDialog,
    public comunService: ComunService
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

  onBuscarRenaes(event) {
    this.categoriaRenaes = "";
    this.categoriaRenaes = "";
    let contenido = event.target.value
    if(contenido.length === parseInt(event.target.getAttribute('maxlength'))) {
      this.comunService.getBuscarRenaes1(contenido).subscribe((response: any) => {
        if(response.codigo === "11") {
          alert(response.mensaje)
          event.target.value = ""
        }else if(response.codigo === "00") {
          this.listaRenaes = response.data
          this.categoriaRenaes = response.data[0].RECCATEGORIA;
          this.categoriaRenaes = response.data[0].RECDEFINICION;
        }
      });
    }
  }

}
