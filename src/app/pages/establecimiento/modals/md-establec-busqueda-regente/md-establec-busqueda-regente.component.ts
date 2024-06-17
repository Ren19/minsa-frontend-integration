import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';
import { RepresentanteLegalService } from 'src/app/services/representante-legal.service';
import { MdEstablecBusquedaDisaComponent } from '../md-establec-busqueda-disa/md-establec-busqueda-disa.component';
import { MdEstablecBusquedaProfesionComponent } from '../md-establec-busqueda-profesion/md-establec-busqueda-profesion.component';

@Component({
  selector: 'app-md-establec-busqueda-regente',
  templateUrl: './md-establec-busqueda-regente.component.html',
  styleUrls: ['./md-establec-busqueda-regente.component.css']
})
export class MdEstablecBusquedaRegenteComponent implements OnInit {

  listOpcionesBusqueda:any = [
    {
      "codigo": "REPNUMEDOCID",
      "nombre": "NRO.REGISTRO"
    },
    {
      "codigo": "REPNOMBCOMP",
      "nombre": "NOMBRE"
    },
    {
      "codigo": "REPNUMEINS",
      "nombre": "NRO.DOCIDENTIDAD"
    },
    {
      "codigo": "REPNUMEINS",
      "nombre": "NRO.RUC."
    },
    {
      "codigo": "REPNUMEINS",
      "nombre": "NRO. COLEGIATURA"
    },
  ]

  selectBuscarPor: any = null

  displayedColumns: string[] = ['nReg', 'fecInsc', 'nombre', 'tipDoc', 'nDocId', 'nRuc', 'nColeg', 'sexo', 'proc', 'sit', 'telefono'];
  dataSource: any = []
  dataSourceCopy: any = []

  listaProcedenciaRegente:any = [];
  selecionarProcedenciaRegente: any = null
  codigoSelecionarProcedenciaRegente: any = "%"

  listaEstadoRegente:any = [];
  selecionarEstadoRegente: any = null
  codigoSelecionarEstadoRegente: any = "01"

  codigoDisa: any = ""
  textoDisa: any = null

  codigoProfesion: any = ""
  textoProfesion: any = null

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public representanteLegalService: RepresentanteLegalService,
    public establecimientoService: EstablecimientoService,
  ) { }

  ngOnInit() {
    this.getProcedenciaRegente()
    this.getEstadoRegente()
  }

  onNoClick(){
    this.dialogRef.close(null);
  }

  onChangeBuscarPor(event: any) {
    this.selectBuscarPor = null
    if(event) {
      this.selectBuscarPor = event.codigo
    }
  }

  public getProcedenciaRegente()
  {
    this.establecimientoService.getProcedenciaRegente().subscribe(response => {
        this.listaProcedenciaRegente = response.data;
    })
  }

  onChangeProcedenciaRegente(event: any) {
    this.selecionarProcedenciaRegente = null
    if(event) {
      this.selecionarProcedenciaRegente = event
    }
  }

  public getEstadoRegente()
  {
    this.establecimientoService.getEstadoRegente().subscribe(response => {
        this.listaEstadoRegente = response.data;
    })
  }

  onChangeEstadoRegente(event: any) {
    this.selecionarEstadoRegente = null
    if(event) {
      this.selecionarEstadoRegente = event
    }
  }

  openModalBuscarDisa() {
    const dialogRef = this.dialog.open(MdEstablecBusquedaDisaComponent, {
      data: {
        filtroDisa: "%"
      },
      width:'990px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.codigoDisa = result.DSACODIGO
        this.textoDisa = result.DSADESCRIP
      }
    });
  }

  openModalBuscarProfesion() {
    const dialogRef = this.dialog.open(MdEstablecBusquedaProfesionComponent, {
      width:'990px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.codigoProfesion = result.PRFCODIGO
        this.textoProfesion = result.PRFDESCRIP
      }
    });
  }

  public filtrarRegente(prfcodigo: any, dsacodigo: any, eddcodigo: any, prccodigo: any)
  {
    this.establecimientoService.filtrarRegente(prfcodigo, dsacodigo, eddcodigo, prccodigo).subscribe(response => {
        this.dataSource = response.data;
        this.dataSourceCopy = response.data;
    })
  }

  onRecuperar() {
    this.filtrarRegente(this.codigoProfesion, this.codigoDisa, this.codigoSelecionarEstadoRegente, this.codigoSelecionarProcedenciaRegente)
  }

  selectRow(row: any) {
    this.dialogRef.close(row);
  }
  
}
