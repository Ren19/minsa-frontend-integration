import { Component,OnInit, Inject, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {PostService} from '../../services/post.service';
import {MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';


export interface Varios {
  idclasificador: string;
  grpcodigo: string;
  sgpdescrip: string;
  grpdescrip: string;
  tcpdescrip: string;
  stcpdescrip: string;
}

const datosVarios: Varios[] = [
];

@Component({
  selector: 'app-buscarseleccionarvarios01b',
  templateUrl: './buscarseleccionarvarios01b.component.html',
  styleUrls: ['./buscarseleccionarvarios01b.component.css'],
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


export class Buscarseleccionarvarios01bComponent implements OnInit {
  checkedIndexes: number[] = [];
  selectAllChecked: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  
  constructor(private router: Router,@Inject(MAT_DIALOG_DATA) public data: any,  private changeDetectorRef: ChangeDetectorRef,
              public dialog: MatDialogRef<Buscarseleccionarvarios01bComponent>,
              private service:PostService,) {

    this.buscarClick();
  }
  pageSizeOptions = [10, 15, 20];
  pageSize = 10
  checked:boolean=true;
  clickedRowsVarios = new Set<Varios>();
  displayedColumnsVarios: string[] = ['idclasificador','tcpdescrip', 'stcpdescrip', 'grpdescrip'];
  dataSourceVarios = new MatTableDataSource<Varios>([]);
  selectedItemIdx!:Varios;
  expresion: string = '';

  ngOnInit(): void { 
    if (this.data) {
      const datosGuardadosString = localStorage.getItem('ActividadGrilla3');
      if (datosGuardadosString) {
        const datosGuardados: Varios[] = JSON.parse(datosGuardadosString);
        this.dataSourceVarios.data = this.dataSourceVarios.data.filter(item => {
          return !datosGuardados.some(dato => dato.idclasificador === item.idclasificador);
        });
      }
    } else{
      const datosGuardadosStrings = localStorage.getItem('ActividadGrilla3');
      this.dataSourceVarios.data = datosGuardadosStrings ? JSON.parse(datosGuardadosStrings) : [];
      this.checkedIndexes = Array.from({ length: this.dataSourceVarios.data.length }, (_, i) => i);
    }
    
  }

  buscarClick(): void {
    var listado: Varios[];
    let req = {
      "cOpcion": "30",
      "cMostrar": "1",
      "cParam1": "",
      "cParam2": "",
      "cParam3": "",
      "cParam4": "",
      "cParam5": ""
    };

    this.service.getCargarBusquedas3(req).subscribe(response => {
      listado = response;
      var expresionText = this.expresion.toLowerCase();
      if (this.expresion !== undefined && this.expresion !== "") {
        listado = listado.filter(item => item.stcpdescrip.toLowerCase().includes(expresionText));
      }
      this.dataSourceVarios.data = listado;

      if (this.paginator) {
        this.dataSourceVarios.paginator = this.paginator;
        this.changeDetectorRef.detectChanges();
      }
    });
  }


  onPageChange(event: any) {
  }
  clickPersonal(row:Varios) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
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

    onNoClick(guardar:any): void {
      if (guardar) {
        const datosSeleccionados = this.checkedIndexes.map(index => this.dataSourceVarios.data[index]);
        localStorage.setItem('ActividadGrilla3', JSON.stringify(datosSeleccionados));
        this.dialog.close({ guardar });
      } else {
        const datosSeleccionados = this.checkedIndexes.map(index => this.dataSourceVarios.data[index]);
        localStorage.setItem('ActividadGrilla3', JSON.stringify(datosSeleccionados));
        this.dialog.close({ guardar });
      }
}

}


