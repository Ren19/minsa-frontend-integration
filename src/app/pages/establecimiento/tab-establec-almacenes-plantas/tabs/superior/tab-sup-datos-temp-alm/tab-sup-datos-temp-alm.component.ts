import { Component, Input } from '@angular/core';
import { OPCIONES_BOTONES } from 'src/app/common/global-constants';

@Component({
  selector: 'app-tab-sup-datos-temp-alm',
  templateUrl: './tab-sup-datos-temp-alm.component.html',
  styleUrls: ['./tab-sup-datos-temp-alm.component.css']
})
export class TabSupDatosTempAlmComponent {

  opcionesBoton = OPCIONES_BOTONES
  @Input() opcionBoton: any;

}
