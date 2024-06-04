import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { obtenerObjetosFaltantes } from 'src/app/common/global-functions';
import { PeriodicElement } from '../../representantebusqueda01/representantebusqueda01.component';
import { MdEstablecActividadComponent } from '../modals/md-establec-actividad/md-establec-actividad.component';
import { MdEstablecGrupoProductoComponent } from '../modals/md-establec-grupo-producto/md-establec-grupo-producto.component';

@Component({
  selector: 'app-tab-establec-actividades',
  templateUrl: './tab-establec-actividades.component.html',
  styleUrls: ['./tab-establec-actividades.component.css']
})
export class TabEstablecActividadesComponent {

  @Input() selecionadoClaseTipo : any = null

  displayedColumnsActividades: string[] = ['select', 'descripcion'];
  dataSourceActividades: any = []
  selectionRowActividades = new SelectionModel<PeriodicElement>(true, []);

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

  onEliminarGrupoProductos() {
    let newArray = obtenerObjetosFaltantes(this.dataSourceGrupoProductos, this.selectionRowGrupoProductos.selected)
    this.dataSourceGrupoProductos = [...newArray]
    this.selectionRowGrupoProductos = new SelectionModel<PeriodicElement>(true, []);
  }

  openModalActividades() {
    const dialogRef = this.dialog.open(MdEstablecActividadComponent, {
      data: {
        codigoClaseTipo: this.selecionadoClaseTipo
      },
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        if(this.dataSourceActividades.length > 0) {
          this.dataSourceActividades = [...this.dataSourceActividades, ...result]
        }else {
          this.dataSourceActividades = result
        }
      }
    });
  }

  onEliminarActividades() {
    let newArray = obtenerObjetosFaltantes(this.dataSourceActividades, this.selectionRowActividades.selected)
    this.dataSourceActividades = [...newArray]
    this.selectionRowActividades = new SelectionModel<PeriodicElement>(true, []);
  }

}
