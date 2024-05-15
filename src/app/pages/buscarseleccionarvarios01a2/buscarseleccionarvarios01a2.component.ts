import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { PostService } from '../../services/post.service';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule, MatTable } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material/dialog';

export interface Varios {
  tpccodigo: string;
  tpcdescrip: string;
}

const datosVarios: Varios[] = [];

@Component({
  selector: 'app-buscarseleccionarvarios01a2',
  templateUrl: './buscarseleccionarvarios01a2.component.html',
  styleUrls: ['./buscarseleccionarvarios01a2.component.css'],
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

export class Buscarseleccionarvarios01a2Component implements OnInit {
  checkedIndexes: number[] = [];
  selectAllChecked: boolean = false;
  guardar = true
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<Buscarseleccionarvarios01a2Component>,
    private service: PostService,) {
    this.buscarClick();
  }

  allComplete: boolean = false;
  clickedRowsVarios = new Set<Varios>();
  displayedColumnsVarios: string[] = ['tpccodigo', 'tpcdescrip'];
  dataSourceVarios = new MatTableDataSource<Varios>(datosVarios);
  selection = new SelectionModel<Varios>(true, []);
  selectedItemIdx!: Varios;
  checked: boolean = true;
  expresion: string = '';

  ngOnInit(): void {
    if (this.data) {
      const datosGuardadosString = localStorage.getItem('formActividades');
      if (datosGuardadosString) {
        const datosGuardados: Varios[] = JSON.parse(datosGuardadosString);
        this.dataSourceVarios.data = this.dataSourceVarios.data.filter(item => {
          return !datosGuardados.some(dato => dato.tpccodigo === item.tpccodigo);
        });
      }
    } else {
      const datosGuardadosStrings = localStorage.getItem('formActividades');
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


  buscarClick(): void {
    var listado: Varios[];
    let req = {
      "cOpcion": "02",
      "cMostrar": "1",
      "cParam1": "",
      "cParam2": "",
      "cParam3": "",
      "cParam4": "",
      "cParam5": ""
    }

    this.service.getCargarBusquedas2(req).subscribe(response => {
      listado = response;
      var expresionText = this.expresion.toLowerCase();
      if (this.expresion !== undefined && this.expresion !== "") {
        listado = listado.filter(item => item.tpcdescrip.toLowerCase().includes(expresionText));
      }
      this.dataSourceVarios.data = listado;
    });

    if (this.dataSourceVarios.paginator) {
      this.dataSourceVarios.paginator.firstPage();
    }
  }


  clickPersonal(row: Varios) {
    this.selectedItemIdx = row;
  }

  guardarHora(): void {
  }

  eliminarHorario(): void {
    //this.dataSourceHorario.data.splice(this.dataSourceHorario.data.indexOf("ll"), 1);
  }

  onNoClick2(): void {
    //this.dialog.close(this.data);
    this.dialog.close();
  }

  onNoClick(guardar: any): void {
    if (guardar) {
      const datosSeleccionados = this.checkedIndexes.map(index => this.dataSourceVarios.data[index]);
      localStorage.setItem('formActividades', JSON.stringify(datosSeleccionados));
      this.dialog.close({ guardar });
    } else {
      const datosSeleccionados = this.checkedIndexes.map(index => this.dataSourceVarios.data[index]);
      localStorage.setItem('formActividades', JSON.stringify(datosSeleccionados));
      this.dialog.close({ guardar });
    }
  }
}



