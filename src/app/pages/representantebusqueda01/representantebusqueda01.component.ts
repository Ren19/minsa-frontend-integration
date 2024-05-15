import { Component, Input, AfterViewInit, OnInit, ViewChild, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

export interface DialogData {
  animal: string;
  name: string;
}

export interface PeriodicElement {
  nrorepresentante: string;
  fechaincri: string;
  nombre: string;
  tipodoc: string;
  docid: string;
  sit: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'representantebusqueda01',
  templateUrl: 'representantebusqueda01.component.html',
  styleUrls: ['./representantebusqueda01.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    //MatDialogTitle,
    //MatDialogContent,
    //MatDialogActions,
    //MatDialogClose,
  ],
})

export class RepresentanteBusqueda01Component implements OnInit {
  cboEstado: any = [];
  estadoRepresentante: string = "";
  tipoBusquedaRepresentante: string = "";
  expresion: string = "";
  constructor(
    public dialogRef: MatDialogRef<RepresentanteBusqueda01Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service: PostService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }

  form!: FormGroup;
  displayedColumns: string[] = ['nrorepresentante', 'fechaincri', 'nombre', 'tipodoc', 'docid', 'sit'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input({ required: false })
  numeroexpediente!: String;

  @Input({ required: false })
  expbuscar!: String;

  @Input({ required: false })
  anioexpediente!: String;

  opetipo = "XXXX";
  dsacodigo = "000";
  solnumeins = "%268%";
  tipobusqueda = "1";

  selectedItemIdx!: PeriodicElement;

  singlePayment(row: PeriodicElement) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
  }

  ngOnInit(): void {
    this.getCboEstado();
    this.buscarClick();
  }

  submit(form: any) {
    this.dialogRef.close(`${form.value.filename}`);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  clickbuscarvarios(): void {
  }

  clickbuscarvariosDisa(): void {
  }

  buscarClick(): void {
    //var listado: PeriodicElement[];
    let req = {
      "dsacodigo": "000",
      "eddcodigo": this.estadoRepresentante,
      "tipobusqueda": this.tipoBusquedaRepresentante,
      "expbuscar": this.expresion
    }
    this.service.getBuscarRepresentante(req).subscribe(response => {
      this.dataSource.data = response;
    });
  }

  onNoClick2(value: any): void {
    this.data.animal = value;
    console.log('The dialog was closed222:' + value);
    this.dialogRef.close();
  }

  getCboEstado() {
    this.service.getCboEstado().subscribe(response => {
      this.cboEstado = response;
    });
  }
}
