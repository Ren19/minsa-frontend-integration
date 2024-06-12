import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { OPCIONES_BOTONES } from 'src/app/common/global-constants';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';

@Component({
  selector: 'app-tab-inf-cosmetica',
  templateUrl: './tab-inf-cosmetica.component.html',
  styleUrls: ['./tab-inf-cosmetica.component.css']
})
export class TabInfCosmeticaComponent {

  opcionesBoton = OPCIONES_BOTONES
  @Input() opcionBoton: any;

  displayedFormaCosmetica: string[] = ['formaCosmetica'];
  dataSourceFormaCosmetica: any = []
  dataSourceCopy: any = []
  selectionFormaCosmetica = new SelectionModel<PeriodicElement>(true, []);

}
