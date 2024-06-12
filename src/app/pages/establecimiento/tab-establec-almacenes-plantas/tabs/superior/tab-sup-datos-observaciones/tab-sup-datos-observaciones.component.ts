import { Component, Input } from '@angular/core';
import { OPCIONES_BOTONES } from 'src/app/common/global-constants';

@Component({
  selector: 'app-tab-sup-datos-observaciones',
  templateUrl: './tab-sup-datos-observaciones.component.html',
  styleUrls: ['./tab-sup-datos-observaciones.component.css']
})
export class TabSupDatosObservacionesComponent {

  opcionesBoton = OPCIONES_BOTONES
  @Input() opcionBoton: any;

}
