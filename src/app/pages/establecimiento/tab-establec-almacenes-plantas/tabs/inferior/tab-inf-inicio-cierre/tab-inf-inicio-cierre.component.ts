import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MdBusquedaMotivoComponent } from 'src/app/pages/establecimiento/modals/md-busqueda-motivo/md-busqueda-motivo.component';
import { ComunService } from 'src/app/services/comun.service';

@Component({
  selector: 'app-tab-inf-inicio-cierre',
  templateUrl: './tab-inf-inicio-cierre.component.html',
  styleUrls: ['./tab-inf-inicio-cierre.component.css']
})
export class TabInfInicioCierreComponent implements OnInit {

  listaTipoDocInicio:any = [];
  selecionarTipoDocInicio: any = null

  listaTipoDocFin:any = [];
  selecionarTipoDocFin: any = null

  codigoMotivo: any = ''
  textoMotivo: string = ''

  constructor(
    public dialog: MatDialog,
    public comunService: ComunService,
  ) { }

  ngOnInit() {
    this.getComboTipoDocumento()
  }

  onChangeTipoDocInicio(event: any) {
    this.selecionarTipoDocInicio = null
    if(event) {
      this.selecionarTipoDocInicio = event.codigo
    }
  }

  onChangeTipoDocFin(event: any) {
    this.selecionarTipoDocFin = null
    if(event) {
      this.selecionarTipoDocFin = event.codigo
    }
  }

  getComboTipoDocumento() {
    this.comunService.getComboTipoDocumento().subscribe(response => {
        this.listaTipoDocInicio = response.data
        this.listaTipoDocFin = response.data
    })
  }

  openModalBuscarMotivo() {
    const dialogRef = this.dialog.open(MdBusquedaMotivoComponent, {
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.codigoMotivo = result.TDTCODIARG
      this.textoMotivo = result.TDTDESCRIP
    });
  }

}
