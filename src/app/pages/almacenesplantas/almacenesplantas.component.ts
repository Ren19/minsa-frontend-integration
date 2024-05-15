import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialog,MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ValidacionComponent } from '../Validaciones/validacion.component';


export interface DialogData {
  animal: string;
  name: string;
}

export interface AlmacenPlantas{
  tipo: string;
  condUso: String;
  talCodigoSec: String;
  item:String;
  propietario:string;
  fecIniAct:string;
  nombre:string;
  TxtALALFecFinAct:string;
  TxtALALDireccion:string;
  TxtALALDirNro:string;
  TxtALALDirUrbanizacion:string;
  TxtALALDirIntMzLote:string;
  TxtALALUbigeo:string;
  TxtALALLongitud:string;
  TxtALALLatitud:string;
  TxtALALHorario:string;
  TxtALALTelef1:string;
}

export interface DialogData {
  animal: string;
  name: string;
}


export interface area {
  numero: string;
  clasificacion: string;
  subclasificacion: string;
  grupo: string;
  subgrupo: string;
  tipoproducto: string;
  areanivelriesgo: string;
  esterilidad: string;
}

const ELEMENT_DATA2: area[] = [];


export interface almacen {
  numero: any;
  nombre: any;
  tipo: any;
  constancia: any;
}

const ELEMENT_DATA1: almacen[] = [

];

export interface Personal {
  nombre: string;
  cargo: string;
}

const ELEMENT_DATA_PERSONAL: Personal[] = [
  {nombre: '1', cargo: 'nom1'},
  {nombre: '2', cargo: 'nom2'},
  {nombre: '3', cargo: 'nom3'},
  {nombre: '4', cargo: 'nom4'},
  {nombre: '5', cargo: 'nom5'},
  {nombre: '6', cargo: 'nom6'},
  {nombre: '7', cargo: 'nom7'},
];

export interface Horario {
  dia: string;
  horario: string;
}

const ELEMENT_DATA_HORARIO: Horario[] = [
  {dia: '1', horario: 'nom1'},
  {dia: '2', horario: 'nom2'},
  {dia: '3', horario: 'nom3'},
  {dia: '4', horario: 'nom4'},
  {dia: '5', horario: 'nom5'},
  {dia: '6', horario: 'nom6'},
  {dia: '7', horario: 'nom7'},
];

export interface Horariodetalle {
  detalle: string;
}

const ELEMENT_DATA_HORARIO_DETALLE: Horariodetalle[] = [
  {detalle: '1'},
  {detalle: '2'},
  {detalle: '3'},
  {detalle: '4'},
  {detalle: '5'},
  {detalle: '6'},
  {detalle: '7'},
];


export interface Activiades {
  detalle: string;
}

const ELEMENT_DATA_ACTIVIADES: Activiades[] = [
  {detalle: 'Activiasdes 1'},
  {detalle: 'Activiasdes 2'},
  {detalle: 'Activiasdes 3'},
  {detalle: 'Activiasdes 4'},
  {detalle: 'Activiasdes 5'},
  {detalle: 'Activiasdes 6'},
  {detalle: 'Activiasdes 7'},
];

export interface FormaFarmaceutica {
  detalle: string;
}

const ELEMENT_DATA_FORMA_FARMACEUTICA: FormaFarmaceutica[] = [
  {detalle: 'Forma Farmaceutica 1'},
  {detalle: 'Forma Farmaceutica 2'},
  {detalle: 'Forma Farmaceutica 3'},
  {detalle: 'Forma Farmaceutica 4'},
  {detalle: 'Forma Farmaceutica 5'},
  {detalle: 'Forma Farmaceutica 6'},
  {detalle: 'Forma Farmaceutica  7'},
];

export interface FormaCosmetica {
  detalle: string;
}

const ELEMENT_DATA_FORMA_COSMETICA: FormaCosmetica[] = [
  {detalle: 'Forma Cosmetica 1'},
  {detalle: 'Forma Cosmetica 2'},
  {detalle: 'Forma Cosmetica 3'},
  {detalle: 'Forma Cosmetica 4'},
  {detalle: 'Forma Cosmetica 5'},
  {detalle: 'Forma Cosmetica 6'},
  {detalle: 'Forma Cosmetica 7'},
];

export interface TipoProducto {
  detalle: string;
}

const ELEMENT_DATA_TIPO_PRODUCTO: TipoProducto[] = [
  {detalle: 'Tipo producto 1'},
  {detalle: 'Tipo producto 2'},
  {detalle: 'Tipo producto 3'},
  {detalle: 'Tipo producto 4'},
  {detalle: 'Tipo producto 5'},
  {detalle: 'Tipo producto 6'},
  {detalle: 'Tipo producto 7'},
];


@Component({
  selector: 'app-almacenesplantas',
  templateUrl: './almacenesplantas.component.html',
  styleUrls: ['./almacenesplantas.component.css'],
  standalone: true,
  imports: [MatTabsModule,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatButtonModule,
            MatTableModule,
            MatSortModule,
            MatDatepickerModule,
            MatPaginatorModule],
})


export class AlmacenesplantasComponent implements AfterViewInit {

  isAddAlmacenesPlantas:boolean=false;
  isEditAlmacenesPlantas:boolean=true;
  isDeleteAlmacenesPlantas:boolean=true;
  isSaveAlmacenesPlantas:boolean=true;

  datosEdit:any;
  selectedNumero: string | null = null;
  selectedNumero2: string | null = null;
  CboALALTipo!: any;
  CboALALCondUso!: String;
  CboALALTalCodigoSec!: String;
  TxtALALItem!:number;
  TxtALPropietario!:string;
  TxtALALFecIniAct!:string;
  TxtALALNombre!:string;
  TxtALALFecFinAct!:string;
  TxtALALDireccion!:string;
  TxtALALDirNro!:number;
  TxtALALDirUrbanizacion!:string;
  TxtALALDirIntMzLote!:string;
  TxtALALUbigeo!:number;
  TxtALALLongitud!:string;
  TxtALALLatitud!:string;
  TxtALALHorario!:string;
  TxtALALTelef1!:number;

  isCboALALTipo:boolean=true;
  isCboALALCondUso:boolean=true;
  isCboALALTalCodigoSec:boolean=true;
  isTxtALALItem:boolean=true;
  isTxtALPropietario:boolean=true;
  isTxtALALFecIniAct:boolean=true;
  isTxtALALNombre:boolean=true;
  isTxtALALFecFinAct:boolean=true;
  isTxtALALDireccion:boolean=true;
  isTxtALALDirNro:boolean=true;
  isTxtALALDirUrbanizacion:boolean=true;
  isTxtALALDirIntMzLote:boolean=true;
  isTxtALALUbigeo:boolean=true;
  isTxtALALLongitud:boolean=true;
  isTxtALALLatitud:boolean=true;
  isTxtALALHorario:boolean=true;
  isTxtALALTelef1:boolean=true;

  isEdit = false
  isNew = false
  pageSizeOptions = [3, 6, 9];
  pageSize = 3
  TxtALARItem:any = 0;
  TxtALARLiteral!:any;
  TxtALARDescrip!:any;
  TxtALARSubtipo!:any;
  TxtALARGrupo!:any;
  TxtALARSubgrupo!:any;
  TxtALARTipoprod!:any;
  TxtALAREstFisFab!:any;
  TxtALAREsterilidad!:any;
  CboALALFormaObt!:any;

  isAddArea:boolean=false;
  isEditArea:boolean=true;
  isDeleteArea:boolean=true;
  isSaveArea:boolean=true;

  isTxtALARItem:boolean=true;
  isTxtALARLiteral:boolean=true;
  isTxtALARDescrip:boolean=true;
  isTxtALARSubtipo:boolean=true;
  isTxtALARGrupo:boolean=true;
  isTxtALARSubgrupo:boolean=true;
  isTxtALARTipoprod:boolean=true;
  isTxtALAREstFisFab:boolean=true;
  isTxtALAREsterilidad:boolean=true;
  isCboALALFormaObt:boolean=true;

  botonAddAlmacenesPlantasStyle:string="bnt01";
  botonEditAlmacenesPlantasStyle:string="";
  botonDeleteAlmacenesPlantasStyle:string="";
  botonSaveAlmacenesPlantasStyle:string="";
  botonAreaStyle:string="";//bnt01
  constructor(private router: Router,public dialog: MatDialog) {

  }
  selectedItemIdxAlmacen!:almacen;
  selectedItemIdxAreas!:area;
  displayedColumns: string[] = ['numero','nombre','tipo','constancia'];
  dataSource = new MatTableDataSource<almacen>(ELEMENT_DATA1);
  displayedColumns2: string[] = ['numero', 'clasificacion', 'subclasificacion', 'grupo','subgrupo', 'tipoproducto', 'areanivelriesgo', 'esterilidad'];
  dataSource2 = new MatTableDataSource<area>(ELEMENT_DATA2);
  displayedColumnsPersonal: string[] = ['nombre', 'cargo'];
  dataSourcePersonal = new MatTableDataSource<Personal>(ELEMENT_DATA_PERSONAL);
  displayedColumnsHorario: string[] = ['dia', 'horario'];
  dataSourceHorario = new MatTableDataSource<Horario>(ELEMENT_DATA_HORARIO);
  displayedColumnsDetalle: string[] = ['detalle'];
  dataSourceDetalle = new MatTableDataSource<Horariodetalle>(ELEMENT_DATA_HORARIO_DETALLE);
  displayedColumnsActiviades: string[] = ['detalle'];
  dataSourceActiviades = new MatTableDataSource<Activiades>(ELEMENT_DATA_ACTIVIADES);
  displayedColumnsFormaFarmaceutica: string[] = ['detalle'];
  dataSourceFormaFarmaceutica = new MatTableDataSource<FormaFarmaceutica>(ELEMENT_DATA_FORMA_FARMACEUTICA);
  displayedColumnsFormaCosmetica: string[] = ['detalle'];
  dataSourceFormaCosmetica = new MatTableDataSource<FormaCosmetica>(ELEMENT_DATA_FORMA_COSMETICA);
  displayedColumnsTipoProducto: string[] = ['detalle'];
  dataSourceTipoProducto = new MatTableDataSource<TipoProducto>(ELEMENT_DATA_TIPO_PRODUCTO);
  @ViewChild('paginator1') paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('paginator2') paginator2!: MatPaginator; 
  @ViewChild(MatSort) sort2!: MatSort; 



  ngOnInit(): void {
    const datosGuardadosString = localStorage.getItem('AreasDatosGenerales');
    if (datosGuardadosString !== null) {
      const datosGuardados = JSON.parse(datosGuardadosString);
    
      const datosMapeados: area[] = datosGuardados.map((item: any) => ({
        numero: item.TxtALARItem || '',
        clasificacion: item.TxtALARDescrip || '',
        subclasificacion: item.TxtALARSubtipo || '',
        grupo: item.TxtALARGrupo || '',
        subgrupo: item.TxtALARSubgrupo || '',
        tipoproducto: item.TxtALARTipoprod || '',
        areanivelriesgo: item.TxtALAREstFisFab || '',
        esterilidad: item.TxtALAREsterilidad || ''
      }));
      this.dataSource2.data = datosMapeados;
    }

    const datosGuardadosString2 = localStorage.getItem('AlmacenesDatosGenerales');
    if (datosGuardadosString2 !== null) {
      const datosGuardados2 = JSON.parse(datosGuardadosString2);
    
      const datosMapeados2: almacen[] = datosGuardados2.map((item: any) => ({
        numero: item.TxtALALItem || '',
          nombre: item.TxtALALNombre || '',
          tipo: item.CboALALTipo || '',
          constancia: item.TxtALALNombre || ''
      }));
      this.dataSource.data = datosMapeados2;
    }
  }

  ngAfterViewInit() {  
    if (this.dataSource != undefined) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    if (this.dataSource2 != undefined) {
      this.dataSource2.paginator = this.paginator2;
      this.dataSource2.sort = this.sort2; 
    }
  }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(ValidacionComponent, {
      width: '350px',
      data: { message: message }
    });
  }
  

  selectItem(numero: string, dato: any, evento: any): void { 
    this.botonAddAlmacenesPlantasStyle="";
    this.botonEditAlmacenesPlantasStyle="bnt01";
    this.botonDeleteAlmacenesPlantasStyle="bnt01";
    this.botonSaveAlmacenesPlantasStyle="bnt01";
    
    if (evento.target.checked) {
      this.selectedNumero = numero;
      this.datosEdit = dato;
      this.isEditAlmacenesPlantas = false;
      this.isDeleteAlmacenesPlantas = false
      this.clear();
    }else{
      this.isEditAlmacenesPlantas = true;
      this.clear();
      this.isSaveAlmacenesPlantas = true
      this.isEdit = true
      this.isDeleteAlmacenesPlantas = true
      
    }
  }

  
  selectItem2(numero: string, dato: any, evento: any): void {  
    this.botonAreaStyle="";
    this.botonAreaStyle="bnt01";
    this.botonAreaStyle="bnt01";
    this.botonAreaStyle="bnt01";
    if (evento.target.checked) {
      this.selectedNumero2 = numero;
      this.datosEdit = dato;
      this.isEditArea = false
      this.isDeleteArea = false
      this.clear();
    }else{
      this.clear();
      this.isSaveAlmacenesPlantas = true
      this.isEditArea = true
      this.isDeleteArea = true
    }
  }
  
  singlePayment(row:almacen) {
    this.selectedItemIdxAlmacen = row;
    console.log('selectedItemIdxAlmacen:', this.selectedItemIdxAlmacen);

  }

  singlePayment2(row:area) {
    this.selectedItemIdxAreas = row;
    console.log('selectedItemIdxAreas:', this.selectedItemIdxAreas);

  }

  add() {

    this.isAddAlmacenesPlantas=true;
    this.isEditAlmacenesPlantas=false;
    this.isDeleteAlmacenesPlantas=false;
    this.isSaveAlmacenesPlantas=false;

    this.botonAddAlmacenesPlantasStyle="";
    this.botonEditAlmacenesPlantasStyle="bnt01";
    this.botonDeleteAlmacenesPlantasStyle="bnt01";
    this.botonSaveAlmacenesPlantasStyle="bnt01";

    this.clear()
    this.desahabilitar(false)
  }


  addArea() {
    this.isAddArea=true;
    this.isEditArea=false;
    this.isDeleteArea=false;
    this.isSaveArea=false;

    this.botonAreaStyle="";
    this.botonAreaStyle="bnt01";
    this.botonAreaStyle="bnt01";
    this.botonAreaStyle="bnt01";

    this.isAddArea=true;
    this.isEditArea=false;
    this.isDeleteArea=false;
    this.isSaveArea=false;

    
    this.clearArea()
    this.desahabilitarArea(false)
  }

  desahabilitarArea(boleano: boolean){
    this.isTxtALARItem=boleano;
    this.isTxtALARLiteral=boleano;
    this.isTxtALARDescrip=boleano;
    this.isTxtALARSubtipo=boleano;
    this.isTxtALARGrupo=boleano;
    this.isTxtALARSubgrupo=boleano;
    this.isTxtALARTipoprod=boleano;
    this.isTxtALAREstFisFab=boleano;
    this.isCboALALFormaObt=boleano;
   
  }
  
  desahabilitar(boleano: boolean){
  this.isCboALALTipo=boleano;
  this.isCboALALCondUso=boleano;
  this.isCboALALTalCodigoSec=boleano;
  this.isTxtALALItem=boleano;
  this.isTxtALPropietario=boleano;
  this.isTxtALALFecIniAct=boleano;
  this.isTxtALALNombre=boleano;
  this.isTxtALALFecFinAct=boleano;
  this.isTxtALALDireccion=boleano;
  this.isTxtALALDirNro=boleano;
  this.isTxtALALDirUrbanizacion=boleano;
  this.isTxtALALDirIntMzLote=boleano;
  this.isTxtALALUbigeo=boleano;
  this.isTxtALALLongitud=boleano;
  this.isTxtALALLatitud=boleano;
  this.isTxtALALHorario=boleano;
  this.isTxtALALTelef1=boleano;
}

  edit(){ 
    this.botonAddAlmacenesPlantasStyle="bnt01";
    this.botonEditAlmacenesPlantasStyle="";
    this.botonDeleteAlmacenesPlantasStyle="";
    this.botonSaveAlmacenesPlantasStyle="bnt01";

    this.isAddAlmacenesPlantas=false;
    this.isEditAlmacenesPlantas=true;
    this.isDeleteAlmacenesPlantas=true;
    this.isSaveAlmacenesPlantas=false;

    this.desahabilitar(false)

    this.isNew = false
    this.isEdit = true

    const datosGuardadosString = localStorage.getItem('AlmacenesDatosGenerales');
    if (datosGuardadosString !== null) {
      const datosGuardados = JSON.parse(datosGuardadosString);
      
      const elementoEncontrado = datosGuardados.find((item: any) => item.TxtALALItem === this.selectedNumero);
      this.CboALALTipo = elementoEncontrado.CboALALTipo
      this.CboALALCondUso = elementoEncontrado.CboALALCondUso
      this.CboALALTalCodigoSec = elementoEncontrado.CboALALTalCodigoSec
     this.TxtALALItem = elementoEncontrado.TxtALALItem
     this.TxtALPropietario = elementoEncontrado.TxtALPropietario
     this.TxtALALFecIniAct = elementoEncontrado.TxtALALFecIniAct
     this.TxtALALNombre = elementoEncontrado.TxtALALNombre
     this.TxtALALFecFinAct = elementoEncontrado.TxtALALFecFinAct
     this.TxtALALDireccion = elementoEncontrado.TxtALALDireccion
     this.TxtALALDirNro = elementoEncontrado.TxtALALDirNro
     this.TxtALALDirUrbanizacion = elementoEncontrado.TxtALALDirUrbanizacion
     this.TxtALALDirIntMzLote= elementoEncontrado.TxtALALDirIntMzLote 
     this.TxtALALUbigeo = elementoEncontrado.TxtALALUbigeo
     this.TxtALALLongitud = elementoEncontrado.TxtALALLongitud
     this.TxtALALLatitud = elementoEncontrado.TxtALALLatitud
     this.TxtALALHorario = elementoEncontrado.TxtALALHorario
     this.TxtALALTelef1 = elementoEncontrado.TxtALALTelef1
       
    } 
  }

  editArea(){ 
    this.botonAreaStyle="";
    this.botonAreaStyle="bnt01";
    this.botonAreaStyle="bnt01";
    this.botonAreaStyle="bnt01";

    this.isAddArea=false;
    this.isEditArea=true;
    this.isDeleteArea=true;
    this.isSaveArea=false;


    this.isNew = false
    this.isEdit = true

    this.desahabilitarArea(false)

    const datosGuardadosString = localStorage.getItem('AreasDatosGenerales');
    if (datosGuardadosString !== null) {
      const datosGuardados = JSON.parse(datosGuardadosString);
      
      const elementoEncontrado = datosGuardados.find((item: any) => item.TxtALARItem === this.selectedNumero2);
      if (elementoEncontrado != undefined) {
        this.TxtALARItem=elementoEncontrado.TxtALARItem;
        this.TxtALARLiteral=elementoEncontrado.TxtALARLiteral;
        this.TxtALARDescrip=elementoEncontrado.TxtALARDescrip;
        this.TxtALARSubtipo=elementoEncontrado.TxtALARSubtipo;
        this.TxtALARGrupo=elementoEncontrado.TxtALARGrupo;
        this.TxtALARSubgrupo=elementoEncontrado.TxtALARSubgrupo;
        this.TxtALARTipoprod=elementoEncontrado.TxtALARTipoprod;
        this.TxtALAREstFisFab=elementoEncontrado.TxtALAREstFisFab;
        this.TxtALAREsterilidad=elementoEncontrado.TxtALAREsterilidad;
        this.CboALALFormaObt=elementoEncontrado.CboALALFormaObt;
         
      }
    
    } 
  }

  delete(){ 

    const datosGuardadosString = localStorage.getItem('AlmacenesDatosGenerales');
    if (datosGuardadosString !== null) {
      let datosGuardados = JSON.parse(datosGuardadosString);
      const elementoGuardadoIndex = datosGuardados.findIndex((item: any) => item.TxtALALItem === this.selectedNumero);
      if (elementoGuardadoIndex !== -1) {
        datosGuardados.splice(elementoGuardadoIndex, 1);
        localStorage.setItem('AlmacenesDatosGenerales', JSON.stringify(datosGuardados));
        const datosMapeados: almacen[] = datosGuardados.map((item: any) => ({
          numero: item.TxtALALItem || '',
          nombre: item.TxtALALNombre || '',
          tipo: item.CboALALTipo || '',
          constancia: item.TxtALALNombre || ''
        
        }));
        this.dataSource.data = datosMapeados;
      }
    }
  }

  deleteArea() {  
    const datosGuardadosString = localStorage.getItem('AreasDatosGenerales');
    if (datosGuardadosString !== null) {
      let datosGuardados = JSON.parse(datosGuardadosString);
      const elementoGuardadoIndex = datosGuardados.findIndex((item: any) => item.TxtALARItem === this.selectedNumero2);
      if (elementoGuardadoIndex !== -1) {
        datosGuardados.splice(elementoGuardadoIndex, 1);
        localStorage.setItem('AreasDatosGenerales', JSON.stringify(datosGuardados));
        const datosMapeados: area[] = datosGuardados.map((item: any) => ({
          numero: item.TxtALARItem || '',
          clasificacion: item.TxtALARDescrip || '',
          subclasificacion: item.TxtALARSubtipo || '',
          grupo: item.TxtALARGrupo || '',
          subgrupo: item.TxtALARSubgrupo || '',
          tipoproducto: item.TxtALARTipoprod || '',
          areanivelriesgo: item.TxtALAREstFisFab || '',
          esterilidad: item.TxtALAREsterilidad || ''
        }));
        this.dataSource2.data = datosMapeados;
      }
    }
  }
  

  clearArea(){
    this.TxtALARItem="";
    this.TxtALARLiteral="";
    this.TxtALARDescrip="";
    this.TxtALARSubtipo="";
    this.TxtALARGrupo="";
    this.TxtALARSubgrupo="";
    this.TxtALARTipoprod="";
    this.TxtALAREstFisFab="";
    this.TxtALAREsterilidad="";
    this.CboALALFormaObt="";
  }

  clear(){
    this.CboALALTipo="";
    this.CboALALCondUso="";
    this.CboALALTalCodigoSec="";
    this.TxtALALItem=0;
    this.TxtALPropietario="";
    this.TxtALALFecIniAct="";
    this.TxtALALNombre="";
    this.TxtALALFecFinAct="";
    this.TxtALALDireccion="";
    this.TxtALALDirNro=0;
    this.TxtALALDirUrbanizacion="";
    this.TxtALALDirIntMzLote="";
    this.TxtALALUbigeo=0;
    this.TxtALALLongitud="";
    this.TxtALALLatitud="";
    this.TxtALALHorario="";
    this.TxtALALTelef1=0;
  }

  save(){ 


    if ( this.CboALALTipo ==""||
    this.CboALALCondUso == ""||
    this.CboALALTalCodigoSec==""||
    this.TxtALALItem==0||
    this.TxtALPropietario==""||
    this.TxtALALFecIniAct==""||
    this.TxtALALNombre==""||
    this.TxtALALFecFinAct==""||
    this.TxtALALDireccion==""||
    this.TxtALALDirNro==0||
    this.TxtALALDirUrbanizacion==""||
    this.TxtALALDirIntMzLote==""||
    this.TxtALALUbigeo==0||
    this.TxtALALLongitud==""||
    this.TxtALALLatitud==""||
    this.TxtALALHorario==""||
    this.TxtALALTelef1==0) 
    
    {
this.openDialog('Ingresar todos los campos')
      return;
    } 



    this.botonAddAlmacenesPlantasStyle="bnt01";
    this.botonEditAlmacenesPlantasStyle="";
    this.botonDeleteAlmacenesPlantasStyle="";
    this.botonSaveAlmacenesPlantasStyle="";


    this.isCboALALTipo=true;
    this.isCboALALCondUso=true;
    this.isCboALALTalCodigoSec=true;
    this.isTxtALALItem=true;
    this.isTxtALPropietario=true;
    this.isTxtALALFecIniAct=true;
    this.isTxtALALNombre=true;
    this.isTxtALALFecFinAct=true;
    this.isTxtALALDireccion=true;
    this.isTxtALALDirNro=true;
    this.isTxtALALDirUrbanizacion=true;
    this.isTxtALALDirIntMzLote=true;
    this.isTxtALALUbigeo=true;
    this.isTxtALALLongitud=true;
    this.isTxtALALLatitud=true;
    this.isTxtALALHorario=true;
    this.isTxtALALTelef1=true;

    if (this.isAddAlmacenesPlantas) {
        const newData = this.dataSource.data.slice(); 
        newData.push({numero: this.TxtALALItem, nombre: this.TxtALALNombre, tipo: this.CboALALTipo, constancia:  this.CboALALCondUso});
        this.dataSource.data = newData;


        let existingData: any[] = [];
        const storedData = localStorage.getItem('AlmacenesDatosGenerales');
        if (storedData !== null) {
          existingData = JSON.parse(storedData);
        }
        const newDatas = {
          CboALALTipo: this.CboALALTipo,
          CboALALCondUso: this.CboALALCondUso,
          CboALALTalCodigoSec: this.CboALALTalCodigoSec,
          TxtALALItem: this.TxtALALItem,
          TxtALPropietario: this.TxtALPropietario,
          TxtALALFecIniAct: this.TxtALALFecIniAct,
          TxtALALNombre: this.TxtALALNombre,
          TxtALALFecFinAct: this.TxtALALFecFinAct,
          TxtALALDireccion: this.TxtALALDireccion,
          TxtALALDirNro: this.TxtALALDirNro,
          TxtALALDirUrbanizacion: this.TxtALALDirUrbanizacion,
          TxtALALDirIntMzLote: this.TxtALALDirIntMzLote,
          TxtALALUbigeo: this.TxtALALUbigeo,
          TxtALALLongitud: this.TxtALALLongitud,
          TxtALALLatitud: this.TxtALALLatitud,
          TxtALALHorario: this.TxtALALHorario,
          TxtALALTelef1: this.TxtALALTelef1
        };

        existingData.push(newDatas);
        localStorage.setItem('AlmacenesDatosGenerales', JSON.stringify(existingData));
    } 
    else {

        const datosGuardadosString = localStorage.getItem('AlmacenesDatosGenerales');
        if (datosGuardadosString !== null) {
          const datosGuardados = JSON.parse(datosGuardadosString);
          const elementoGuardadoIndex = datosGuardados.findIndex((item: any) => item.TxtALALItem === this.TxtALALItem);
          if (elementoGuardadoIndex !== -1) {
            datosGuardados[elementoGuardadoIndex] = {
              CboALALTipo: this.CboALALTipo,
              CboALALCondUso: this.CboALALCondUso,
              CboALALTalCodigoSec: this.CboALALTalCodigoSec,
              TxtALALItem: this.TxtALALItem,
              TxtALPropietario: this.TxtALPropietario,
              TxtALALFecIniAct: this.TxtALALFecIniAct,
              TxtALALNombre: this.TxtALALNombre,
              TxtALALFecFinAct: this.TxtALALFecFinAct,
              TxtALALDireccion: this.TxtALALDireccion,
              TxtALALDirNro: this.TxtALALDirNro,
              TxtALALDirUrbanizacion: this.TxtALALDirUrbanizacion,
              TxtALALDirIntMzLote: this.TxtALALDirIntMzLote,
              TxtALALUbigeo: this.TxtALALUbigeo,
              TxtALALLongitud: this.TxtALALLongitud,
              TxtALALLatitud: this.TxtALALLatitud,
              TxtALALHorario: this.TxtALALHorario,
              TxtALALTelef1: this.TxtALALTelef1
            };
            localStorage.setItem('AlmacenesDatosGenerales', JSON.stringify(datosGuardados));

            const datosGuardadosString2 = localStorage.getItem('AlmacenesDatosGenerales');
            if (datosGuardadosString2 !== null) {
              const datosGuardados2 = JSON.parse(datosGuardadosString2);
            
              const datosMapeados2: almacen[] = datosGuardados2.map((item: any) => ({
                numero: item.TxtALALItem || '',
                  nombre: item.TxtALALNombre || '',
                  tipo: item.CboALALTipo || '',
                  constancia: item.TxtALALNombre || ''
              }));
              this.dataSource.data = datosMapeados2;
            }
          }
        }
      }
      this.selectedNumero = null;
      this.clear();

      this.isAddAlmacenesPlantas=false;
      this.isEditAlmacenesPlantas=true;
      this.isDeleteAlmacenesPlantas=true;
      this.isSaveAlmacenesPlantas=true;
    }
    


    saveArea(){
      
    if ( this.TxtALARItem == 0||
    this.TxtALARLiteral == ""||
    this.TxtALARDescrip==""||
    this.TxtALARSubtipo==""||
    this.TxtALARGrupo==""||
    this.TxtALARSubgrupo==""||
    this.TxtALARTipoprod==""||
    this.TxtALAREstFisFab==""||
    this.CboALALFormaObt==""
    ) 
    
    {
      this.openDialog('Ingresar todos los campos')
      return;
    } 



      this.botonAreaStyle="";
      this.botonAreaStyle="bnt01";
      this.botonAreaStyle="bnt01";
      this.botonAreaStyle="bnt01";
  

      this.desahabilitarArea(false)
  
      if (this.isAddArea) {
          const newData = this.dataSource2.data.slice(); 
          newData.push( {numero: this.TxtALARItem, clasificacion: this.TxtALARDescrip,subclasificacion: this.TxtALARSubtipo, grupo: this.TxtALARGrupo ,subgrupo: this.TxtALARSubgrupo, tipoproducto: this.TxtALARTipoprod,areanivelriesgo: this.TxtALAREstFisFab, esterilidad: this.CboALALFormaObt},);

          this.dataSource2.data = newData;
  
  
          let existingData: any[] = [];
          const storedData = localStorage.getItem('AreasDatosGenerales');
          if (storedData !== null) {
            existingData = JSON.parse(storedData);
          }
          const newDatas = {
            TxtALARItem:this.TxtALARItem,
            TxtALARLiteral:this.TxtALARLiteral,
            TxtALARDescrip:this.TxtALARDescrip,
            TxtALARSubtipo:this.TxtALARSubtipo,
            TxtALARGrupo:this.TxtALARGrupo,
            TxtALARSubgrupo:this.TxtALARSubgrupo,
            TxtALARTipoprod:this.TxtALARTipoprod,
            TxtALAREstFisFab:this.TxtALAREstFisFab,
            TxtALAREsterilidad:this.TxtALAREsterilidad,
            CboALALFormaObt:this.CboALALFormaObt,
          };
  
          existingData.push(newDatas);
          localStorage.setItem('AreasDatosGenerales', JSON.stringify(existingData));
      } 
      else {
  
          const datosGuardadosString = localStorage.getItem('AreasDatosGenerales');
          if (datosGuardadosString !== null) {
            const datosGuardados = JSON.parse(datosGuardadosString);
            const elementoGuardadoIndex = datosGuardados.findIndex((item: any) => item.TxtALARItem === this.TxtALARItem);
            if (elementoGuardadoIndex !== -1) {
              datosGuardados[elementoGuardadoIndex] = {
                TxtALARItem:this.TxtALARItem,
                TxtALARLiteral:this.TxtALARLiteral,
                TxtALARDescrip:this.TxtALARDescrip,
                TxtALARSubtipo:this.TxtALARSubtipo,
                TxtALARGrupo:this.TxtALARGrupo,
                TxtALARSubgrupo:this.TxtALARSubgrupo,
                TxtALARTipoprod:this.TxtALARTipoprod,
                TxtALAREstFisFab:this.TxtALAREstFisFab,
                TxtALAREsterilidad:this.TxtALAREsterilidad,
                CboALALFormaObt:this.CboALALFormaObt,
                  };
              localStorage.setItem('AreasDatosGenerales', JSON.stringify(datosGuardados));

              const datosMapeados: area[] = datosGuardados.map((item: any) => ({
                numero: item.TxtALARItem || '',
                clasificacion: item.TxtALARDescrip || '',
                subclasificacion: item.TxtALARSubtipo || '',
                grupo: item.TxtALARGrupo || '',
                subgrupo: item.TxtALARSubgrupo || '',
                tipoproducto: item.TxtALARTipoprod || '',
                areanivelriesgo: item.TxtALAREstFisFab || '',
                esterilidad: item.TxtALAREsterilidad || ''
              }));
              this.dataSource2.data = datosMapeados;
            }
          }
        }
        this.selectedNumero2 = null;
        this.clearArea();
        this.isAddArea=false;
        this.isEditArea=true;
        this.isDeleteArea=true;
        this.isSaveArea=true;
      }

  

  public confirmDialog(): void {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('The dialog was closed111:'+result);

    });
}
onKeyPress(event: KeyboardEvent) {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    event.preventDefault();
  }
}

onKeyPressString(event: KeyboardEvent) {
  const charCode = event.which ? event.which : event.keyCode;
  if (
    (charCode < 65 || charCode > 90) && 
    (charCode < 97 || charCode > 122) &&
    charCode !== 32 && 
    charCode !== 8 && 
    charCode !== 9 && 
    charCode !== 46 
  ) {
    event.preventDefault();
  }
}



}




@Component({
  selector: 'almacenesplantas.component-dialog',
  templateUrl: 'almacenesplantas.component-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class AlmacenesplantasComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<AlmacenesplantasComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  onNoClick2(value:any): void {
    this.data.animal=value;
    console.log('The dialog was closed222:'+value);
    this.dialogRef.close();
  }


  
}
