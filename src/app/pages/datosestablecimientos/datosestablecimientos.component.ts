import { Component,ViewChild,OnInit, OnDestroy } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule,MatTable} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RegistroPersonalComponent } from '../registropersonal/registropersonal.component';
import { RegistrorepresentantelegalComponent } from '../registrorepresentantelegal/registrorepresentantelegal.component';
import { BuscarubigeoComponent } from '../buscarubigeo/buscarubigeo.component';
import {FormsModule} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {PostService} from '../../services/post.service';
import { HttpClient } from '@angular/common/http';
import { ValidacionComponent } from '../Validaciones/validacion.component';
import { DatosEstablecimiento } from 'src/app/models/datosEstablecimiento';


export interface Persona {
  apellidos: string;
  cargo: string;
}

const representanteLegal: Persona[] = [
];
const personal: Persona[] = [
  {apellidos: 'CASTILLA MORAN LUIS MIGUEL', cargo: 'DIRECTOR TECNICO'}
];



export interface Dia {
  id: number;
  descripcion: string;
}

export interface DiaHorario {
  dia: string;
  horario: string;
}

const ELEMENT_DATAHORARIO: DiaHorario[] = [];


@Component({
  selector: 'app-datosestablecimientos',
  templateUrl: './datosestablecimientos.component.html',
  styleUrls: ['./datosestablecimientos.component.css'],
  standalone: true,
  imports: [
            CommonModule,
            MatFormFieldModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatTabsModule,
            MatIconModule,
            MatTableModule,
            MatSortModule,
            MatButtonModule,
            MatPaginatorModule,
            MatSelectModule,
            MatInputModule,
            FormsModule],
})




export class DatosestablecimientosComponent implements OnInit, OnDestroy {

  dataSourceHorario: MatTableDataSource<DiaHorario>;
  formDatosEstablecimiento: any = {}; 
  constructor(private service:PostService,
              public dialogRp: MatDialog,
              public dialogRrl: MatDialog,
              public dialogBu: MatDialog,
              public dialog: MatDialog,
              private httpClient: HttpClient) {
    this.dataSourceHorario = new MatTableDataSource<DiaHorario>(ELEMENT_DATAHORARIO);
  }
  listDia:Dia[]=[{id:1,descripcion:"Lunes"},
                 {id:2,descripcion:"Martes"},
                 {id:3,descripcion:"Miercoles"},
                 {id:4,descripcion:"Jueves"},
                 {id:5,descripcion:"Viernes"},
                 {id:6,descripcion:"Sabado"},
                 {id:7,descripcion:"Domingo"}];
  clickedRowsPersonal = new Set<Persona>();
  displayedColumnsPersonal: string[] = ['apellidos', 'cargo'];
  dataSourcePersonal = new MatTableDataSource<Persona>(personal);
  clickedRowsRepresentanteLegal = new Set<Persona>();
  displayedColumnsRepresentanteLegal: string[] = ['apellidos', 'cargo'];
  dataSourceRepresentanteLegal = new MatTableDataSource<Persona>(representanteLegal);
  dataEliminar1: any[] = [];
  dataEliminar2: any[] = [];
  dataEliminar3: any[] = [];
  diaIni:number=1;
  diaFin:number=1;
  horaIni!:Date;
  horaFin!:Date;
  FormDatosEstablecimiento: DatosEstablecimiento | undefined;
  clickedRowsDH = new Set<DiaHorario>();
  displayedColumnsHorario: string[] = ['dia', 'horario'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  date: Date[] | undefined;
  index=0;
  selectedItemIdx!:Persona;
  selectedItemHorario!:DiaHorario;
  selectedRowIndex: number | null = null;

  ngOnInit(): void {
    const nuevosDatos: Persona[] = JSON.parse(localStorage.getItem('frmRepresentateLegal') || '[]');
    this.dataSourceRepresentanteLegal.data = nuevosDatos
    localStorage.setItem('frmRepresentateLegal', JSON.stringify(this.dataSourceRepresentanteLegal.data));

    const hora: DiaHorario[] = JSON.parse(localStorage.getItem('dataSourceHorario') || '[]');
    this.dataSourceHorario.data = hora
    localStorage.setItem('dataSourceHorario', JSON.stringify(this.dataSourceHorario.data));
  }

  onTabChange(event: any): void {
    localStorage.setItem('formDatosEstablecimiento', JSON.stringify(this.formDatosEstablecimiento));
  }

  clickPersonal(row:Persona) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
  }
  clickRepresentanteLegal(row:Persona) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
  }
  clickDiaHorario(row:DiaHorario) {
    this.selectedItemHorario = row;
    console.log('selectedItemHorario:', this.selectedItemHorario);
  }



  guardarHora(): void { 
    if (this.diaIni > this.diaFin) {
      this.openDialog('Dia inicio no puede ser mayor al dia fin');
      return;
    }

    if (this.horaIni == undefined) {
      this.openDialog('Hora inicio requerido');
      return;
    }

    if (this.horaFin == undefined) {
      this.openDialog('Hora fin requerido');
      return;
    }

    if (this.horaIni > this.horaFin) {
      this.openDialog('Hora inicio no puede ser mayor a la hora fin');
      return;
    }


    this.dataSourceHorario = new MatTableDataSource<DiaHorario>(ELEMENT_DATAHORARIO);
   


    if (this.diaIni == this.diaFin) {
      if (this.dataSourceHorario.data.length === 0) {
          this.dataSourceHorario.data.push({ dia: this.listDia[this.diaIni - 1].descripcion, horario: this.horaIni + "-" + this.horaFin });
      } else {
          const index = this.dataSourceHorario.data.findIndex(item => item.dia === this.listDia[this.diaIni - 1].descripcion);
          if (index !== -1) {
              this.dataSourceHorario.data[index].horario = this.horaIni + "-" + this.horaFin;
          } else {
              this.dataSourceHorario.data.push({ dia: this.listDia[this.diaIni - 1].descripcion, horario: this.horaIni + "-" + this.horaFin });
          }
      }
      this.dataSourceHorario.filter = "";
  }
  else{
      ELEMENT_DATAHORARIO.splice(0,this.dataSourceHorario.data.length);
      for (let i = this.diaIni; i <= this.diaFin; ++i){
        this.dataSourceHorario.data.push({dia: this.listDia[i-1].descripcion, horario: this.horaIni+"-"+this.horaFin});
        this.dataSourceHorario.filter = "";
      }
    }
    localStorage.setItem('dataSourceHorario', JSON.stringify(this.dataSourceHorario.data));
  }

  eliminarHora(): void {

    ELEMENT_DATAHORARIO.splice(0,this.dataSourceHorario.data.length);
    for (let i = 0; i <= 6; ++i){
      this.dataSourceHorario.data.push({dia: "", horario: ""});
      this.dataSourceHorario.filter = "";
    }

  }
  openDialog(message: string): void {
    const dialogRef = this.dialog.open(ValidacionComponent, {
      width: '350px',
      data: { message: message }
    });
  }

  clickBuscarPersonal(): void {
    const dialogRef = this.dialogRp.open(RegistroPersonalComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '95%',
      panelClass: 'full-screen-modal',
      data:{solcodigo: "",solindipro: ""},
    });

    dialogRef.afterClosed().subscribe(result => {

      const nuevosDatos: Persona[] = JSON.parse(localStorage.getItem('DatosEstablecimientoPersonal') || '[]');
      const datosCombinados: Persona[] = nuevosDatos;
      const datosUnicos: Persona[] = Array.from(new Set(datosCombinados)); 
      this.dataSourcePersonal.data = datosUnicos;
    
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

  clickBuscarRepresentanteLegall(dato:any): void {

    let datos: any
    if (dato == 1) {
      datos = true
    }else datos = false
    let edit = this.selectedRowIndex
    const dialogRef = this.dialogRp.open(RegistrorepresentantelegalComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '70%',
      panelClass: 'full-screen-modal',
      data:{datos, edit },

    });

    dialogRef.afterClosed().subscribe(result => {


      if (result !== undefined && result.guardar) { 
        const nuevosDatos: Persona[] = JSON.parse(localStorage.getItem('frmRepresentateLegal') || '[]');
        const datosCombinados: Persona[] = nuevosDatos;
        const datosUnicos: Persona[] = Array.from(new Set(datosCombinados)); 
        this.dataSourceRepresentanteLegal.data = datosUnicos;
        localStorage.setItem('frmRepresentateLegal', JSON.stringify(this.dataSourceRepresentanteLegal.data));
        
      } else if (result !== undefined && !result.guardar) {
          const nuevosDatos: Persona[] = JSON.parse(localStorage.getItem('frmRepresentateLegal') || '[]');
          this.dataSourceRepresentanteLegal.data = nuevosDatos
      }
  -
       this.service.getCargaSolicitud('a').subscribe(response => {
        });
    });



  }
  toggleChecked1(index: any, event: any) {
    this.selectedRowIndex = index;
    const isChecked = event.target.checked;
  
    if (isChecked) {
      this.dataEliminar1.push(index);
    } else {
      // Elimina el índice de la matriz dataEliminar
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
      // Elimina el índice de la matriz dataEliminar
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
      // Elimina el índice de la matriz dataEliminar
      const indexToRemove = this.dataEliminar3.indexOf(index);
      if (indexToRemove !== -1) {
        this.dataEliminar3.splice(indexToRemove, 1);
      }
    }
  }

  clickBuscarUbigeo(): void {

    console.log('BUSCAR>>>');

    const dialogRef = this.dialogRp.open(BuscarubigeoComponent, {

      data:{solcodigo: "",solindipro: ""},


    });

    

    dialogRef.afterClosed().subscribe(result => {
      let req={
        "lcCodDisa":"000",
        "lcNroSolicitud":result.solcodigo
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

  ngOnDestroy(): void { 
    localStorage.setItem('formDatosEstablecimiento', JSON.stringify(this.formDatosEstablecimiento));
  }

  EliminarActiviadades1() { 
    const Datos: any[] = JSON.parse(localStorage.getItem('frmRepresentateLegal') || '[]');
    const datosFiltrados = Datos.filter(element => !this.dataEliminar1.some(el => el.codPersonal === element.codPersonal));
    localStorage.setItem('frmRepresentateLegal', JSON.stringify(datosFiltrados));

    const datosActividades: Persona[] = JSON.parse(localStorage.getItem('frmRepresentateLegal') || '[]');
    this.dataSourceRepresentanteLegal = new MatTableDataSource<Persona>(datosActividades);
  }


  EliminarHorario() {
    const Datos: DiaHorario[] = JSON.parse(localStorage.getItem('dataSourceHorario') || '[]');
    const datosFiltrados = Datos.filter(element => !this.dataEliminar3.some(el => el.dia === element.dia));
    localStorage.setItem('dataSourceHorario', JSON.stringify(datosFiltrados));

    const datosActividades: DiaHorario[] = JSON.parse(localStorage.getItem('dataSourceHorario') || '[]');
    this.dataSourceHorario = new MatTableDataSource<DiaHorario>(datosActividades);
  }

}




