import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { obtenerObjetosFaltantes } from 'src/app/common/global-functions';
import { PeriodicElement } from '../../representantebusqueda01/representantebusqueda01.component';
import { MdEstablecGrupoProductoComponent } from '../modals/md-establec-grupo-producto/md-establec-grupo-producto.component';

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

  displayedColumnsGrupoProductos: string[] = ['select', 'clasificacion', 'subClasificacion', 'grupoDeProducto', 'subGrupo'];
  dataSourceGrupoProductos: any = []
  selectionRowGrupoProductos = new SelectionModel<PeriodicElement>(true, []);

  opcionSeleccionadaProductControlados: any = "2"

  constructor(
    public dialog: MatDialog,
  ) {}

  onSeleccionarProductControlados(event) {
    this.opcionSeleccionadaProductControlados = event.value
  }

  openModalGrupoProducto() {
    const dialogRef = this.dialog.open(MdEstablecGrupoProductoComponent, {
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        if(this.dataSourceGrupoProductos.length > 0) {
          this.dataSourceGrupoProductos = [...this.dataSourceGrupoProductos, ...result]
        }else {
          this.dataSourceGrupoProductos = result
        }
      }
    });
  }

  onEliminar() {
    let newArray = obtenerObjetosFaltantes(this.dataSourceGrupoProductos, this.selectionRowGrupoProductos.selected)
    this.dataSourceGrupoProductos = [...newArray]
    this.selectionRowGrupoProductos = new SelectionModel<PeriodicElement>(true, []);
  }

}
