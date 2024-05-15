import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormularioDatosEstablecimientoPersonal } from 'src/app/models/datosEstablecimientoPesonal';
import { ValidacionComponent } from '../Validaciones/validacion.component';
import { Buscarseleccionarvarios01a2Component } from '../buscarseleccionarvarios01a2/buscarseleccionarvarios01a2.component';
import { PostService } from 'src/app/services/post.service';


export interface Persona {
  apellidos: string;
  cargo: string;
}

const representanteLegal: Persona[] = [
  { apellidos: 'CHONG  HONG JUAN AURELIO', cargo: 'DIRECTOR' }
];
const personal: Persona[] = [
  { apellidos: 'CASTILLA MORAN LUIS MIGUEL', cargo: 'DIRECTOR TECNICO' }
];

export interface Dia {
  id: number;
  descripcion: string;
}

export interface DiaHorario {
  dia: string;
  horario: string;
  detalle: string;
}
const ELEMENT_DATAHORARIO: DiaHorario[] = [
];


@Component({
  selector: 'app-registropersonal',
  templateUrl: './registropersonal.component.html',
  styleUrls: ['./registropersonal.component.css'],
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

export class RegistroPersonalComponent implements OnInit {
  
  cboSituacion: any = [];
  cboTipoCambio: any = [];
  cboTipoDocumento: any = [];
  dataSourceHorario = new MatTableDataSource<any>;
  constructor(
    private service: PostService,
    private router: Router, 
    public dialog: MatDialog, 
    public dialogs: MatDialogRef<Buscarseleccionarvarios01a2Component>,) {

    this.dataSourceHorario = new MatTableDataSource(ELEMENT_DATAHORARIO);
  }

  listDia: any = localStorage.getItem('dataSourceHorario');
  clickedRowsPersonal = new Set<Persona>();
  displayedColumnsPersonal: string[] = ['apellidos', 'cargo'];
  dataSourcePersonal = new MatTableDataSource<Persona>(personal);
  clickedRowsRepresentanteLegal = new Set<Persona>();
  displayedColumnsRepresentanteLegal: string[] = ['apellidos', 'cargo'];
  dataSourceRepresentanteLegal = new MatTableDataSource<Persona>(representanteLegal);

  HoraMax: any;
  HoraMin: any;
  diaIni: any;
  diaFin: any;
  horaIni!: Date;
  horaFin!: Date;
  clickedRowsDH = new Set<DiaHorario>();
  displayedColumnsHorario: string[] = ['dia', 'horario', "detalle"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  date: Date[] | undefined;
  index = 0;
  selectedItemIdx!: Persona;
  selectedItemHorario!: DiaHorario;
  FrmDatosestablecimientosPersonal = new FormularioDatosEstablecimientoPersonal();

  ngOnInit(): void {
    this.listDia = JSON.parse(this.listDia); console.log(this.listDia)
    const primerHorario = this.listDia[0].horario;
    const partesHorario = primerHorario.split("-");
    const horaFinalizacion = partesHorario[1];
    this.HoraMax = horaFinalizacion;
    this.getCboSituacion();
    this.getCboTipoIndCambio();
    this.getCboTipoDoc();
  }

  getCboSituacion() {
    this.service.getCboSituacion().subscribe(response => {
      this.cboSituacion = response;
    });
  }
  
  getCboTipoIndCambio() {
    this.service.getCboTipoIndCambio().subscribe(response => {
      this.cboTipoCambio = response;
    });
  }

  getCboTipoDoc() {
    this.service.getCboTipoDoc().subscribe(response => {
      this.cboTipoDocumento = response;
    });
  }

  clickPersonal(row: Persona) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
  }
  clickRepresentanteLegal(row: Persona) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
  }
  clickDiaHorario(row: DiaHorario) {
    this.selectedItemHorario = row;
    console.log('selectedItemHorario:', this.selectedItemHorario);
  }


  guardarHora(): void {
  }

  eliminarHorario(): void {
  }

  onNoClick2(): void {

    if (this.FrmDatosestablecimientosPersonal &&
      Object.values(this.FrmDatosestablecimientosPersonal).every(value => value !== '' && value !== null && (typeof value !== 'number' || value !== 0))) {
      let savedDataString = localStorage.getItem('DatosEstablecimientoPersonal');
      let savedData = savedDataString ? JSON.parse(savedDataString) : {};

      const newDataToSave = {
        dataSourceHorarioPersonal: savedData.dataSourceHorarioPersonal ? savedData.dataSourceHorarioPersonal.concat(this.dataSourceHorario.data) : this.dataSourceHorario.data,
        FrmDatosestablecimientosPersonal: savedData.FrmDatosestablecimientosPersonal ? savedData.FrmDatosestablecimientosPersonal.concat(this.FrmDatosestablecimientosPersonal) : this.FrmDatosestablecimientosPersonal
      };

      const newDataString = JSON.stringify(newDataToSave);
      localStorage.setItem('DatosEstablecimientoPersonal', newDataString);
      this.dialogs.close();
    } else {
      this.openDialog('Todos los campos del formulario son requeridos');
    }



  }

  onNoClick(): void {
    this.dialogs.close();
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

  add() {
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

    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    const inicioIndex = diasSemana.indexOf(this.diaIni);
    const finIndex = diasSemana.indexOf(this.diaFin);


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
    else {
      ELEMENT_DATAHORARIO.splice(0, this.dataSourceHorario.data.length);
      for (let i = inicioIndex; i <= finIndex; ++i) {
        this.dataSourceHorario.data.push({ dia: this.listDia[i].dia, horario: this.horaIni + "-" + this.horaFin });
      }
    }



  }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(ValidacionComponent, {
      width: '350px',
      data: { message: message }
    });
  }
}




