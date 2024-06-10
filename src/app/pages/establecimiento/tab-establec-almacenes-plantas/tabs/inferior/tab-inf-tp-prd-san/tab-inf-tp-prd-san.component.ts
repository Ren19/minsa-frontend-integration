import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { PeriodicElement } from 'src/app/pages/representantebusqueda01/representantebusqueda01.component';

@Component({
  selector: 'app-tab-inf-tp-prd-san',
  templateUrl: './tab-inf-tp-prd-san.component.html',
  styleUrls: ['./tab-inf-tp-prd-san.component.css']
})
export class TabInfTpPrdSanComponent {

  displayedTipoProducto: string[] = ['tipoProducto'];
  dataSourceTipoProducto: any = []
  dataSourceCopy: any = []
  selectionPersonal = new SelectionModel<PeriodicElement>(true, []);

}
