import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SelectionModel } from '@angular/cdk/collections';
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
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RepresentanteBusqueda01Component } from '../representantebusqueda01/representantebusqueda01.component';
import { Buscarvarios02Component, Varios } from '../buscarvarios02/buscarvarios02.component';
import { RepresentanteLegal } from 'src/app/models/representatelegal';
import { ValidacionComponent } from '../Validaciones/validacion.component';
import { PostService } from 'src/app/services/post.service';

export interface Persona {
  apellidos: string;
  cargo: string;
}

const representanteLegal: Persona[] = [
  { apellidos: 'CHONG  HONG JUAN AURELIO', cargo: 'DIRECTOR' },
  { apellidos: '', cargo: '' },
  { apellidos: '', cargo: '' },
];
const personal: Persona[] = [
  { apellidos: 'CASTILLA MORAN LUIS MIGUEL', cargo: 'DIRECTOR TECNICO' },
  { apellidos: '', cargo: '' },
  { apellidos: '', cargo: '' },
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
  { dia: "gdafsadf", horario: "dfg", detalle: "" },
  { dia: "dfg", horario: "fdg", detalle: "" },
  { dia: "", horario: "dg", detalle: "" },
  { dia: "", horario: "", detalle: "" },
  { dia: "", horario: "", detalle: "" },
  { dia: "", horario: "", detalle: "" },
  { dia: "", horario: "", detalle: "" },
];


@Component({
  selector: 'app-registrorepresentantelegal',
  templateUrl: './registrorepresentantelegal.component.html',
  styleUrls: ['./registrorepresentantelegal.component.css'],
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

export class RegistrorepresentantelegalComponent implements OnInit {
  cboSituacion: any = [];
  cboTipoCambio: any = [];
  cboTipoDocumento: any = [];
  dataSourceHorario = new MatTableDataSource<DiaHorario>;
  constructor(
    private service: PostService,
    private router: Router, 
    @Inject(MAT_DIALOG_DATA) 
    public data: any, 
    public dialogS: MatDialog,
    public dialog: MatDialogRef<RegistrorepresentantelegalComponent>,
    public dialogBusquedaRepresentante: MatDialog,
    public dialogBusquedaCargo: MatDialog) {
    this.dataSourceHorario = new MatTableDataSource(ELEMENT_DATAHORARIO);
  }

  listDia: Dia[] = [{ id: 1, descripcion: "Lunes" },
  { id: 2, descripcion: "Martes" },
  { id: 3, descripcion: "Miercoles" },
  { id: 4, descripcion: "Jueves" },
  { id: 5, descripcion: "Viernes" },
  { id: 6, descripcion: "Sabado" },
  { id: 7, descripcion: "Domingo" }];

  clickedRowsPersonal = new Set<Persona>();
  displayedColumnsPersonal: string[] = ['apellidos', 'cargo'];
  dataSourcePersonal = new MatTableDataSource<Persona>(personal);
  clickedRowsRepresentanteLegal = new Set<Persona>();
  displayedColumnsRepresentanteLegal: string[] = ['apellidos', 'cargo'];
  dataSourceRepresentanteLegal = new MatTableDataSource<Persona>(representanteLegal);
  frmRepresentanteLegal: RepresentanteLegal = new RepresentanteLegal();
  checkedIndexes: number[] = [];
  selectAllChecked: boolean = false;
  selection = new SelectionModel<Varios>(true, []);
  diaIni: number = 1;
  diaFin: number = 1;
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

  ngOnInit(): void {
    if (this.data.datos) {
    } else {
      const datosGuardadosStrings = localStorage.getItem('frmRepresentateLegal');
      if (datosGuardadosStrings) {
        const datosGuardados = JSON.parse(datosGuardadosStrings);
        const objetoEncontrado = datosGuardados.find((objeto: { codPersonal: string; }) => objeto.codPersonal === this.data.edit.codPersonal);
        this.frmRepresentanteLegal = objetoEncontrado;
      } else {
        console.log('No se encontraron datos guardados en localStorage');
      }
    }
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

  onNoClick2(guardar: any): void {
    if (guardar) {
      if (Object.values(this.frmRepresentanteLegal).every(value => value !== '' && value !== 0)) {
        let datosGuardados: any[] = JSON.parse(localStorage.getItem('frmRepresentateLegal') || '[]');
        datosGuardados.push(this.frmRepresentanteLegal);
        localStorage.setItem('frmRepresentateLegal', JSON.stringify(datosGuardados));
        this.dialog.close({ guardar });
      }
      else {
        this.openDialog('Ingresar todos los campos')
      }
    } else {
      // Buscar el índice del objeto en la lista según el codPersonal
      const datosGuardados: any[] = JSON.parse(localStorage.getItem('frmRepresentateLegal') || '[]');
      const index = datosGuardados.findIndex(item => item.codPersonal === this.frmRepresentanteLegal.codPersonal);
      if (index !== -1) {
        // Modificar el objeto existente
        datosGuardados[index] = this.frmRepresentanteLegal;
        localStorage.setItem('frmRepresentateLegal', JSON.stringify(datosGuardados));
        this.dialog.close({ guardar });
      } else {
        console.log('No se encontró el objeto para modificar.');
      }
    }
  }



  onNoClick(): void {
    this.dialog.close();
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

  buscarCargo(): void {
    const dialogRef = this.dialogBusquedaCargo.open(Buscarvarios02Component, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '80%',
      width: '70%',
      panelClass: 'full-screen-modal',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('value0:', result);
    });

  }

  buscarRepresentanteLegal(): void {

    console.log('BUSCAR>>>');

    const dialogRef = this.dialogBusquedaRepresentante.open(RepresentanteBusqueda01Component, {
      maxWidth: '100vw',
      width: '70%',
      panelClass: 'full-screen-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('value0:', result);
    });
  }

  openDialog(message: string): void {
    const dialogRef = this.dialogS.open(ValidacionComponent, {
      width: '350px',
      data: { message: message }
    });
  }

}




