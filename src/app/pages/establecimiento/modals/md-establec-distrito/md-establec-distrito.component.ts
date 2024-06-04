import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComunService } from 'src/app/services/comun.service';
import { MdEstablecDepartamentoComponent } from '../md-establec-departamento/md-establec-departamento.component';

@Component({
  selector: 'app-md-establec-distrito',
  templateUrl: './md-establec-distrito.component.html',
  styleUrls: ['./md-establec-distrito.component.css']
})
export class MdEstablecDistritoComponent implements OnInit {

  listOpcionesBusqueda: any= [
    {
      "codigo": "DISDESCRIP",
      "nombre": "DISTRITO"
    },
  ]
  selectBuscarPor: any = null

  displayedColumns: string[] = ['distrito', 'provincia', 'departamento'];
  dataSource: any = [];
  dataSourceCopy: any = []

  codigoDepartamento: any = '15'
  textoDepartamento: string = 'LIMA'

  codigoProvincia: any = '01'
  textoProvincia: string = 'LIMA'

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public comunService: ComunService
  ) { }

  ngOnInit() {
    this.getDistritos(this.codigoDepartamento, this.codigoProvincia)
  }

  getDistritos(cParam1: any, cParam2: any) {
    this.comunService.getDistritos(cParam1, cParam2).subscribe(response => {
        this.dataSource = response.data
        this.dataSourceCopy = response.data
    })
  }

  onNoClick(){
    this.dialogRef.close(null);
  }

  selectRow(row: any) {
    this.dialogRef.close(row);
  }

  onChangeBuscarPor(event: any) {
    this.selectBuscarPor = null
    if(event) {
      this.selectBuscarPor = event.codigo
    }
  }

  onExpresion(event: any) {
    let campoFiltrar = this.selectBuscarPor ?? "DISDESCRIP"
    let contenido = event.target.value.toUpperCase()
    let copy = structuredClone(this.dataSourceCopy)
    let resultadosFiltrados = copy.filter((item) => item[campoFiltrar].includes(contenido));
    this.dataSource = resultadosFiltrados
  }

  onVerDepartamentos() {
    this.dataSource = [];
    this.dataSourceCopy = []
    this.codigoDepartamento = ''
    this.textoDepartamento = ''
    this.codigoProvincia = ''
    this.textoProvincia = ''

    const dialogRef = this.dialog.open(MdEstablecDepartamentoComponent, {
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.codigoDepartamento = result.DPTCODIGO
      this.textoDepartamento = result.DPTDESCRIP
    });
  }

}
