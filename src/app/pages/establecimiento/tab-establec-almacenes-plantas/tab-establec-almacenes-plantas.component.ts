import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../../representantebusqueda01/representantebusqueda01.component';
import { SelectionModel } from '@angular/cdk/collections';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tab-establec-almacenes-plantas',
  templateUrl: './tab-establec-almacenes-plantas.component.html',
  styleUrls: ['./tab-establec-almacenes-plantas.component.css']
})
export class TabEstablecAlmacenesPlantasComponent implements OnInit {

  listaSituacionAlmacenesPlantas:any = [];
  selecionarSituacionAlmacenesPlantas: any = null

  listaSituacionAreas:any = [];
  selecionarSituacionAreas: any = null

  displayedAlmacenesPlantas: string[] = ['nro', 'nombre', 'tipo', 'arrendador'];
  dataSourceAlmacenesPlantas: any = []
  selectionAlmacenesPlantas = new SelectionModel<PeriodicElement>(true, []);

  displayedAreas: string[] = ['nro', 'clasificacion', 'subClasificacion', 'grupo'];
  dataSourceAreas: any = []
  selectionAreas = new SelectionModel<PeriodicElement>(true, []);

  constructor(
    public dialog: MatDialog,
    public establecimientoService: EstablecimientoService
  ) { }

  ngOnInit() {
    this.getComboEstado()
  }


  onChangeSituacionAlmacenesPlantas(event: any) {
    this.selecionarSituacionAlmacenesPlantas = null
    if(event) {
      this.selecionarSituacionAlmacenesPlantas = event.codigo
    }
  }

  onChangeSituacionAreas(event: any) {
    this.selecionarSituacionAreas = null
    if(event) {
      this.selecionarSituacionAreas = event.codigo
    }
  }

  getComboEstado() {
    this.establecimientoService.getComboEstado().subscribe(response => {
        this.listaSituacionAlmacenesPlantas = response.data
        this.listaSituacionAreas = response.data
    })
  }

}
