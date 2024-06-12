import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { OPCIONES_BOTONES } from 'src/app/common/global-constants';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';

@Component({
  selector: 'app-tab-inf-forma-far',
  templateUrl: './tab-inf-forma-far.component.html',
  styleUrls: ['./tab-inf-forma-far.component.css']
})
export class TabInfFormaFarComponent {

  opcionesBoton = OPCIONES_BOTONES
  @Input() opcionBoton: any;

  displayedForma: string[] = ['forma'];
  dataSourceForma: any = []
  dataSourceCopy: any = []
  selectionForma = new SelectionModel<PeriodicElement>(true, []);

}
