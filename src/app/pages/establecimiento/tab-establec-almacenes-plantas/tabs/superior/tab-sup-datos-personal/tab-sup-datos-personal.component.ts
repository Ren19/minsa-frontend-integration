import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { OPCIONES_BOTONES } from 'src/app/common/global-constants';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';

@Component({
  selector: 'app-tab-sup-datos-personal',
  templateUrl: './tab-sup-datos-personal.component.html',
  styleUrls: ['./tab-sup-datos-personal.component.css']
})
export class TabSupDatosPersonalComponent {

  opcionesBoton = OPCIONES_BOTONES
  @Input() opcionBoton: any;

  displayedPersonal: string[] = ['nombre', 'cargo'];
  dataSourcePersonal: any = []
  dataSourceCopy: any = []
  selectionPersonal = new SelectionModel<PeriodicElement>(true, []);

}
