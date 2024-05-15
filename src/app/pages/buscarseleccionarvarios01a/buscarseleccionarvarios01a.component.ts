import { Component, ViewChild, OnInit, AfterViewInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { PostService } from '../../services/post.service';
import { DataSource } from '@angular/cdk/collections';
import { CdkTableModule } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule, MatTable } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCheckboxChange } from '@angular/material/checkbox';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';


export interface Varios {
  actdescrip: string;
  actcodigo: string;
}

const datosVarios: Varios[] = [];

@Component({
  selector: 'app-buscarseleccionarvarios01a',
  templateUrl: './buscarseleccionarvarios01a.component.html',
  styleUrls: ['./buscarseleccionarvarios01a.component.css'],
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

export class Buscarseleccionarvarios01aComponent implements OnInit {
  checkedIndexes: number[] = [];
  selectAllChecked: boolean = false;
  //dataSourceVarios = new MatTableDataSource<Varios>;
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<Buscarseleccionarvarios01aComponent>,
    private service: PostService) {
    console.log('CboDGTipo>>>:', sessionStorage.getItem('CboDGTipo'));
    this.buscarClick();
  }

  allComplete: boolean = false;
  clickedRowsVarios = new Set<Varios>();
  displayedColumnsVarios: string[] = ['actcodigo', 'actdescrip'];
  dataSourceVarios = new MatTableDataSource<Varios>(datosVarios);
  selection = new SelectionModel<Varios>(true, []);
  selectedItemIdx!: Varios;
  checked: boolean = true;
  expresion: string = '';

  ngOnInit(): void {

    if (this.data) {
      const datosGuardadosString = localStorage.getItem('ActividadGrilla1');
      if (datosGuardadosString) {
        const datosGuardados: Varios[] = JSON.parse(datosGuardadosString);
        this.dataSourceVarios.data = this.dataSourceVarios.data.filter(item => {
          return !datosGuardados.some(dato => dato.actcodigo === item.actcodigo);
        });
      }
    } else {
      const datosGuardadosStrings = localStorage.getItem('ActividadGrilla1');
      this.dataSourceVarios.data = datosGuardadosStrings ? JSON.parse(datosGuardadosStrings) : [];
      this.checkedIndexes = Array.from({ length: this.dataSourceVarios.data.length }, (_, i) => i);
    }
  }

  someComplete(): boolean {
    return false;
  }
  setAll(completed: boolean) {
  }

  updateCheck() {
  }

  buscarClick(): void {
    var listado: Varios[];
    let req = {
      "cOpcion": "03",
      "cMostrar": "1",
      "cParam1": sessionStorage.getItem('CboDGTipo'),
      "cParam2": "",
      "cParam3": "",
      "cParam4": "",
      "cParam5": ""
    }
    
    this.service.getCargarBusquedas(req).subscribe(response => {
      listado = response;
      var expresionText = this.expresion.toLowerCase();
      if (this.expresion !== undefined && this.expresion !== "") {
        listado = listado.filter(item => item.actdescrip.toLowerCase().includes(expresionText));
      }
      this.dataSourceVarios.data = listado;
    });
    if (this.dataSourceVarios.paginator) {
      this.dataSourceVarios.paginator.firstPage();
    }
  }

  clickPersonal(row: Varios) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
  }

  onNoClick2(): void {
    this.dialog.close();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceVarios.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourceVarios.data.forEach(row => this.selection.select(row));
  }

  isChecked(index: number): boolean {
    return this.checkedIndexes.includes(index);
  }

  toggleChecked(index: number): void {
    if (this.checkedIndexes.includes(index)) {
      this.checkedIndexes = this.checkedIndexes.filter(i => i !== index);
    } else {
      this.checkedIndexes.push(index);
    }
  }

  toggleSelectAll(): void {
    this.selectAllChecked = this.selectAllChecked;
    if (this.selectAllChecked) {
      this.checkedIndexes = Array.from({ length: this.dataSourceVarios.data.length }, (_, i) => i);
    } else {
      this.checkedIndexes = [];
    }
  }

  onNoClick(guardar: any): void {
    if (guardar) {
      const datosSeleccionados = this.checkedIndexes.map(index => this.dataSourceVarios.data[index]);
      localStorage.setItem('ActividadGrilla1', JSON.stringify(datosSeleccionados));
      this.dialog.close({ guardar });
    } else {
      const datosSeleccionados = this.checkedIndexes.map(index => this.dataSourceVarios.data[index]);
      localStorage.setItem('ActividadGrilla1', JSON.stringify(datosSeleccionados));
      this.dialog.close({ guardar });
    }
  }
}



