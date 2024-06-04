import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-establec-actividades',
  templateUrl: './tab-establec-actividades.component.html',
  styleUrls: ['./tab-establec-actividades.component.css']
})
export class TabEstablecActividadesComponent {

  displayedColumnsActividades: string[] = ['actividad'];
  dataSourceActividades: any = []


  displayedColumnsProductosControlados: string[] = ['tipoProductoControlado'];
  dataSourceProductosControlados: any = []

  displayedColumnsGrupoProductos: string[] = ['clasificacion', 'subClasificacion', 'grupoDeProducto', 'subGrupo'];
  dataSourceGrupoProductos: any = []

  opcionSeleccionadaProductControlados: any = "2"

  onSeleccionarProductControlados(event) {
    this.opcionSeleccionadaProductControlados = event.value
  }
}
