import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';

@Component({
  selector: 'app-tab-inf-actividad',
  templateUrl: './tab-inf-actividad.component.html',
  styleUrls: ['./tab-inf-actividad.component.css']
})
export class TabInfActividadComponent {

  displayedActividad: string[] = ['actividad'];
  dataSourceActividad: any = []
  dataSourceCopy: any = []
  selectionActividad = new SelectionModel<PeriodicElement>(true, []);

}
