import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
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
import { MatDialogRef, } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';
import { SelectionModel } from '@angular/cdk/collections';

export interface Varios {
  carcodigo: string;
  cardescrip: string;
}

const datosVarios: Varios[] = [];


@Component({
  selector: 'app-buscarvarios02',
  templateUrl: './buscarvarios02.component.html',
  styleUrls: ['./buscarvarios02.component.css'],
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


export class Buscarvarios02Component implements OnInit {

  constructor(private router: Router,
    public dialog: MatDialogRef<Buscarvarios02Component>,
    private service: PostService) {

  }

  checkedIndexes: number[] = [];
  selectAllChecked: boolean = false;
  allComplete: boolean = false;
  selection = new SelectionModel<Varios>(true, []);
  clickedRowsVarios = new Set<Varios>();
  displayedColumnsVarios: string[] = ['carcodigo', 'cardescrip'];
  dataSourceVarios = new MatTableDataSource<Varios>(datosVarios);
  selectedItemIdx!: Varios;
  checked: boolean = true;
  expresion: string = '';

  ngOnInit(): void {
    this.buscarClick();
  }

  buscarClick(): void {
    var listado: Varios[];
    let req = {
      "cOpcion": "32",
      "cMostrar": "1",
      "cParam1": "N",
      "cParam2": "S",
      "cParam3": "",
      "cParam4": "",
      "cParam5": ""
    }

    this.service.getCargarBusquedas(req).subscribe(response => {
      listado = response;
      var expresionText = this.expresion.toLowerCase();
      if (this.expresion !== undefined && this.expresion !== "") {
        listado = listado.filter(item => item.cardescrip.toLowerCase().includes(expresionText));
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

  onNoClick2(): void {
    this.dialog.close();
  }

  onNoClick(): void {
    this.dialog.close();
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

  isChecked(index: number): boolean {
    return this.checkedIndexes.includes(index);
  }
}



