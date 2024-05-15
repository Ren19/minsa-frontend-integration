import { Component, ViewChild } from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { DatosgeneralesComponent } from "../datosgenerales/datosgenerales.component";
import { DatosestablecimientosComponent } from "../datosestablecimientos/datosestablecimientos.component";
import { ActividadesComponent } from "../actividades/actividades.component";
import { AlmacenesplantasComponent } from "../almacenesplantas/almacenesplantas.component";
import { OtrosComponent } from "../otros/otros.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-registroestablecimiento',
    templateUrl: './registroestablecimiento.component.html',
    styleUrls: ['./registroestablecimiento.component.css'],
    standalone: true,
    imports: [MatTabsModule,MatIconModule, DatosgeneralesComponent, DatosestablecimientosComponent, ActividadesComponent, AlmacenesplantasComponent, OtrosComponent]
})



export class RegistroestablecimientoComponent {
  @ViewChild(DatosestablecimientosComponent) datosEstablecimientosComponent: DatosestablecimientosComponent | undefined;

  constructor() {}

  onTabChange(event: MatTabChangeEvent): void {
      if (event.index === 1 && this.datosEstablecimientosComponent) {
          // Verifica si la pestaña seleccionada es "Datos Establecimientos"
          // Guarda los datos del formulario en el localStorage
          const formDatosEstablecimiento = this.datosEstablecimientosComponent.formDatosEstablecimiento;
          localStorage.setItem('formDatosEstablecimiento', JSON.stringify(formDatosEstablecimiento));
      }
  }
}