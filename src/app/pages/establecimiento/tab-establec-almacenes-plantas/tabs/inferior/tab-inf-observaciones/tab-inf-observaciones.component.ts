import { Component, Input } from '@angular/core';
import { OPCIONES_BOTONES } from 'src/app/common/global-constants';

@Component({
  selector: 'app-tab-inf-observaciones',
  templateUrl: './tab-inf-observaciones.component.html',
  styleUrls: ['./tab-inf-observaciones.component.css']
})
export class TabInfObservacionesComponent {

  opcionesBoton = OPCIONES_BOTONES
  @Input() opcionBoton: any;

}
