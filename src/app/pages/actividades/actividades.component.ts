import { Component,OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {ViewChild} from '@angular/core';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {Buscarseleccionarvarios01aComponent} from '../buscarseleccionarvarios01a/buscarseleccionarvarios01a.component';
import {Buscarseleccionarvarios01a2Component} from '../buscarseleccionarvarios01a2/buscarseleccionarvarios01a2.component';
import {Buscarseleccionarvarios01bComponent} from '../buscarseleccionarvarios01b/buscarseleccionarvarios01b.component';
import {MatDialog} from '@angular/material/dialog';
import {PostService} from '../../services/post.service';


export interface Actividad{
  name: string;
}

const ELEMENT_DATA_ACTIVIDAD: Actividad[] = [
  {name: 'Exportacion 1'},
  {name: 'Exportacion 2'},
  {name: 'Exportacion 3'},
  {name: 'Exportacion 4'},
  {name: 'Exportacion 5'},
];

export interface TipoProd{
  name: string;
}

const ELEMENT_DATA_TIPOPROD: TipoProd[] = [
  {name: 'Producto 1'},
  {name: 'Producto 2'},
  {name: 'Producto 3'},
  {name: 'Producto 4'},
  {name: 'Producto 5'},
];


export interface GrupoProducto {
  clasificacion: string;
  subclasificacion: string;
  grupoproducto: string;
  subgrupo: string;
}

const ELEMENT_DATA: GrupoProducto[] = [
  {clasificacion: "Clasificacion1", subclasificacion: 'SubClasificacion1',grupoproducto:'Grupo1',subgrupo:'SubGrupo1'},
  {clasificacion: "Clasificacion2", subclasificacion: 'SubClasificacion2',grupoproducto:'Grupo2',subgrupo:'SubGrupo2'},
  {clasificacion: "Clasificacion3", subclasificacion: 'SubClasificacion3',grupoproducto:'Grupo3',subgrupo:'SubGrupo3'},
  {clasificacion: "Clasificacion4", subclasificacion: 'SubClasificacion4',grupoproducto:'Grupo4',subgrupo:'SubGrupo4'},
  {clasificacion: "Clasificacion5", subclasificacion: 'SubClasificacion5',grupoproducto:'Grupo5',subgrupo:'SubGrupo5'},
];



@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  standalone: true,
  imports: [CommonModule,
            MatTabsModule,
            MatTableModule,
            MatSortModule,
            MatButtonModule,
            MatPaginatorModule,],
})
export class ActividadesComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  pageSizeOptions = [3, 6, 9];
  pageSize = 3
  dataEliminar1: any[] = []; 
  dataEliminar2: any[] = []; 
  dataEliminar3: any[] = []; 
  constructor(private service:PostService,
              public dialogBs01a: MatDialog,
              public dialogBs01a2: MatDialog,
              public dialogBs01b: MatDialog,) {}


  displayedColumnsGrupoProducto: string[] = ['clasificacion','subclasificacion','grupoproducto','subgrupo'];
  dataSourceGrupoProducto = new MatTableDataSource<GrupoProducto>(ELEMENT_DATA);
  displayedColumnsActividad: string[] = ['name'];
  dataSourceActividad = new MatTableDataSource<Actividad>(ELEMENT_DATA_ACTIVIDAD);
  displayedColumnsTipoProd: string[] = ['name'];
  dataSourceTipoProd :any
  selectedRowIndex: number | null = null;
  eliminarTipoProductoContrato = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    const datosActividades: TipoProd[] = JSON.parse(localStorage.getItem('formActividades') || '[]');
    this.dataSourceTipoProd = new MatTableDataSource<TipoProd>(datosActividades);

    const datosActividades1: TipoProd[] = JSON.parse(localStorage.getItem('ActividadGrilla1') || '[]');
    this.dataSourceActividad = new MatTableDataSource<TipoProd>(datosActividades1);

    const datosActividades3: GrupoProducto[] = JSON.parse(localStorage.getItem('ActividadGrilla3') || '[]');
    this.dataSourceGrupoProducto = new MatTableDataSource<GrupoProducto>(datosActividades3);

    this.dataSource = this.dataSourceTipoProd
  }

  selectRowActiviad(row:Actividad) {
   // this.selectedItemIdx = row;
   // console.log('selectedItemIdx:', this.selectedItemIdx);
  }



   singleRowGrupoProd(row:GrupoProducto) {
    // this.selectedItemIdx = row;
    // console.log('selectedItemIdx:', this.selectedItemIdx);
   }

   clickBuscarActiviadades(dato:any){

    console.log('BUSCAR>>>');

    let datos: any
    if (dato == 1) {
      datos = true
    }else datos = false


    const dialogRef = this.dialogBs01a.open(Buscarseleccionarvarios01aComponent, {
 
      panelClass: 'full-screen-modal',
      data:datos,
      maxWidth: '100vw',
      width: '70%',

    });

    dialogRef.afterClosed().subscribe(result => { 

      if (result !== undefined && result.guardar) { 
        const datosExistentes: TipoProd[] = this.dataSourceActividad.data;
        const nuevosDatos: TipoProd[] = JSON.parse(localStorage.getItem('ActividadGrilla1') || '[]');
        const datosCombinados: TipoProd[] = [...datosExistentes, ...nuevosDatos];
        const datosUnicos: TipoProd[] = Array.from(new Set(datosCombinados)); 
        this.dataSourceActividad.data = datosUnicos;
        localStorage.setItem('ActividadGrilla1', JSON.stringify(this.dataSourceActividad.data));
        
      } else if (result !== undefined && !result.guardar) {
          const nuevosDatos: TipoProd[] = JSON.parse(localStorage.getItem('ActividadGrilla1') || '[]');
          this.dataSourceActividad.data = nuevosDatos
          localStorage.setItem('ActividadGrilla1', JSON.stringify(this.dataSourceActividad.data));
      }

      let req={
        "lcCodDisa":"000",
        "lcNroSolicitud":1
      }

       this.service.getCargaSolicitud(req).subscribe(response => {

        //this.cargarSolicitudEstablecimiento = response;

         //this.numeroexpediente=response.expcodigo.substring(2);
         //this.anioexpediente=response.expcodigo.substring(0,2);

         //let tempFechaRegistro = new Date(this.cargarSolicitudEstablecimiento.expfechreg);
         //let tempFechaExpediente= new Date(this.cargarSolicitudEstablecimiento.expfechreg);

         //this.fechaRegistro = new DatePipe("en-US").transform(tempFechaRegistro, "yyyy-MM-dd")+"";
         //this.fechaExpediente = new DatePipe("en-US").transform(tempFechaExpediente, "yyyy-MM-dd")+"";

         //console.log('this.cargarSolicitudEstablecimiento:',this.cargarSolicitudEstablecimiento );

        });



    });

   }

   clickBuscarTipoProducto(dato:any){

    let datos: any
    if (dato == 1) {
      datos = true
    }else datos = false

    const dialogRef = this.dialogBs01a2.open(Buscarseleccionarvarios01a2Component, {
      maxWidth: '100vw',
      width: '70%',
      panelClass: 'full-screen-modal',
      data: datos,

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result.guardar) { 
        const datosExistentes: TipoProd[] = this.dataSourceTipoProd.data;
        const nuevosDatos: TipoProd[] = JSON.parse(localStorage.getItem('formActividades') || '[]');
        const datosCombinados: TipoProd[] = [...datosExistentes, ...nuevosDatos];
        const datosUnicos: TipoProd[] = Array.from(new Set(datosCombinados)); 
        this.dataSourceTipoProd.data = datosUnicos;
        localStorage.setItem('formActividades', JSON.stringify(this.dataSourceTipoProd.data));

      } else if (result !== undefined && !result.guardar) {
          const nuevosDatos: TipoProd[] = JSON.parse(localStorage.getItem('formActividades') || '[]');
          this.dataSourceTipoProd.data = nuevosDatos
          localStorage.setItem('formActividades', JSON.stringify(this.dataSourceTipoProd.data));
      }

      let req={
        "lcCodDisa":"000",
        "lcNroSolicitud":1
      }

       this.service.getCargaSolicitud(req).subscribe(response => {

        //this.cargarSolicitudEstablecimiento = response;

         //this.numeroexpediente=response.expcodigo.substring(2);
         //this.anioexpediente=response.expcodigo.substring(0,2);

         //let tempFechaRegistro = new Date(this.cargarSolicitudEstablecimiento.expfechreg);
         //let tempFechaExpediente= new Date(this.cargarSolicitudEstablecimiento.expfechreg);

         //this.fechaRegistro = new DatePipe("en-US").transform(tempFechaRegistro, "yyyy-MM-dd")+"";
         //this.fechaExpediente = new DatePipe("en-US").transform(tempFechaExpediente, "yyyy-MM-dd")+"";

         //console.log('this.cargarSolicitudEstablecimiento:',this.cargarSolicitudEstablecimiento );

        });

    });

   }

   clickBuscarGruposProductos(dato:any){

    let datos: any
    if (dato == 1) {
      datos = true
    }else datos = false


    const dialogRef = this.dialogBs01b.open(Buscarseleccionarvarios01bComponent, {
      data:datos,
      maxWidth: '100vw',
      width: '70%',
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result !== undefined && result.guardar) { 
        const datosExistentes: GrupoProducto[] = this.dataSourceGrupoProducto.data;
        const nuevosDatos: GrupoProducto[] = JSON.parse(localStorage.getItem('ActividadGrilla3') || '[]');
        const datosCombinados: GrupoProducto[] = [...datosExistentes, ...nuevosDatos];
        const datosUnicos: GrupoProducto[] = Array.from(new Set(datosCombinados)); 
        this.dataSourceGrupoProducto.data = datosUnicos;
        localStorage.setItem('ActividadGrilla3', JSON.stringify(this.dataSourceGrupoProducto.data));

      } else if (result !== undefined && !result.guardar) {
          const nuevosDatos: GrupoProducto[] = JSON.parse(localStorage.getItem('ActividadGrilla3') || '[]');
          this.dataSourceGrupoProducto.data = nuevosDatos
          localStorage.setItem('ActividadGrilla3', JSON.stringify(this.dataSourceGrupoProducto.data));
      }
  

      let req={
        "lcCodDisa":"000",
        "lcNroSolicitud":1
      }



       this.service.getCargaSolicitud(req).subscribe(response => {

        //this.cargarSolicitudEstablecimiento = response;

         //this.numeroexpediente=response.expcodigo.substring(2);
         //this.anioexpediente=response.expcodigo.substring(0,2);

         //let tempFechaRegistro = new Date(this.cargarSolicitudEstablecimiento.expfechreg);
         //let tempFechaExpediente= new Date(this.cargarSolicitudEstablecimiento.expfechreg);

         //this.fechaRegistro = new DatePipe("en-US").transform(tempFechaRegistro, "yyyy-MM-dd")+"";
         //this.fechaExpediente = new DatePipe("en-US").transform(tempFechaExpediente, "yyyy-MM-dd")+"";

         //console.log('this.cargarSolicitudEstablecimiento:',this.cargarSolicitudEstablecimiento );

        });



    });

   }

   onPageChange(event: any) {
  }
  selectRowActividad(row: any, index:any) {
  }

  EliminarActiviadades1() {
    const Datos: any[] = JSON.parse(localStorage.getItem('ActividadGrilla1') || '[]');
    const datosFiltrados = Datos.filter(element => !this.dataEliminar1.some(el => el.actcodigo === element.actcodigo));
    localStorage.setItem('ActividadGrilla1', JSON.stringify(datosFiltrados));

    const datosActividades: TipoProd[] = JSON.parse(localStorage.getItem('ActividadGrilla1') || '[]');
    this.dataSourceActividad = new MatTableDataSource<TipoProd>(datosActividades);
  }

  EliminarActiviadades2() { 
    const Datos: any[] = JSON.parse(localStorage.getItem('formActividades') || '[]');
    const datosFiltrados = Datos.filter(element => !this.dataEliminar2.some(el => el.tpccodigo === element.tpccodigo));
    localStorage.setItem('formActividades', JSON.stringify(datosFiltrados));

    const datosActividades: TipoProd[] = JSON.parse(localStorage.getItem('formActividades') || '[]');
    this.dataSourceTipoProd = new MatTableDataSource<TipoProd>(datosActividades);
  }
  

  EliminarActiviadades3() {
    const Datos: any[] = JSON.parse(localStorage.getItem('ActividadGrilla3') || '[]');
    const datosFiltrados = Datos.filter(element => !this.dataEliminar3.some(el => el.idclasificador === element.idclasificador));
    localStorage.setItem('ActividadGrilla3', JSON.stringify(datosFiltrados));

    const datosActividades: GrupoProducto[] = JSON.parse(localStorage.getItem('ActividadGrilla3') || '[]');
    this.dataSourceGrupoProducto = new MatTableDataSource<GrupoProducto>(datosActividades);
  }
  

  toggleChecked1(index: any, event: any) {
    this.selectedRowIndex = index;
    const isChecked = event.target.checked;
  
    if (isChecked) {
      this.dataEliminar1.push(index);
    } else {
      const indexToRemove = this.dataEliminar1.indexOf(index);
      if (indexToRemove !== -1) {
        this.dataEliminar1.splice(indexToRemove, 1);
      }
    }
   
  }

  toggleChecked2(index: any, event: any) {
    this.selectedRowIndex = index;
    const isChecked = event.target.checked;
  
    if (isChecked) {
      this.dataEliminar2.push(index);
    } else {
      const indexToRemove = this.dataEliminar2.indexOf(index);
      if (indexToRemove !== -1) {
        this.dataEliminar2.splice(indexToRemove, 1);
      }
    }
   
  }

  toggleChecked3(index: any, event: any) {
    this.selectedRowIndex = index;
    const isChecked = event.target.checked;
  
    if (isChecked) {
      this.dataEliminar3.push(index);
    } else {
      const indexToRemove = this.dataEliminar3.indexOf(index);
      if (indexToRemove !== -1) {
        this.dataEliminar3.splice(indexToRemove, 1);
      }
    }
   
  }
  

}
