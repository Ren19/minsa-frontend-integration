import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { OPCIONES_BOTONES } from 'src/app/common/global-constants';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';

@Component({
  selector: 'app-tab-inf-tp-prd-san',
  templateUrl: './tab-inf-tp-prd-san.component.html',
  styleUrls: ['./tab-inf-tp-prd-san.component.css']
})
export class TabInfTpPrdSanComponent {

  opcionesBoton = OPCIONES_BOTONES
  @Input() opcionBoton: any;

  displayedTipoProducto: string[] = ['tipoProducto'];
  dataSourceTipoProducto: any = []
  dataSourceCopy: any = []
  selectionPersonal = new SelectionModel<PeriodicElement>(true, []);

}
