import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OPCIONES_BOTONES } from 'src/app/common/global-constants';
import { obtenerObjetosFaltantes } from 'src/app/common/global-functions';
import { MdEstablecActividadComponent } from 'src/app/pages/establecimiento/modals/md-establec-actividad/md-establec-actividad.component';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';

@Component({
  selector: 'app-tab-inf-actividad',
  templateUrl: './tab-inf-actividad.component.html',
  styleUrls: ['./tab-inf-actividad.component.css']
})
export class TabInfActividadComponent {

  opcionesBoton = OPCIONES_BOTONES
  @Input() opcionBoton: any;

  displayedActividad: string[] = ['select', 'actividad'];
  dataSourceActividad: any = []
  dataSourceCopy: any = []
  selectionRowActividad = new SelectionModel<PeriodicElement>(true, []);

  constructor(
    public dialog: MatDialog,
  ) {}


  openModalActividades() {
    const dialogRef = this.dialog.open(MdEstablecActividadComponent, {
      data: {
        codigoClaseTipo: '01'
      },
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        if(this.dataSourceActividad.length > 0) {
          this.dataSourceActividad = [...this.dataSourceActividad, ...result]
        }else {
          this.dataSourceActividad = result
        }
      }
    });
  }

  onEliminarActividades() {
    let newArray = obtenerObjetosFaltantes(this.dataSourceActividad, this.selectionRowActividad.selected)
    this.dataSourceActividad = [...newArray]
    this.selectionRowActividad = new SelectionModel<PeriodicElement>(true, []);
  }

}
