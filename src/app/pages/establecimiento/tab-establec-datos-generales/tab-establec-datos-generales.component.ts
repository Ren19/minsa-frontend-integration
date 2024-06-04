import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComunService } from 'src/app/services/comun.service';

@Component({
  selector: 'app-tab-establec-datos-generales',
  templateUrl: './tab-establec-datos-generales.component.html',
  styleUrls: ['./tab-establec-datos-generales.component.css']
})
export class TabEstablecDatosGeneralesComponent implements OnInit {

  listaSector:any = [];
  selecionarSector: any = null

  constructor(
    public comunService: ComunService
  ) { }

  ngOnInit() {
    this.getComboSector()
  }

  getComboSector() {
    this.comunService.getComboSector().subscribe(response => {
        this.listaSector = response.data
    })
  }

  onChangeSector(event: any) {
    this.selecionarSector = null
    if(event) {
      this.selecionarSector = event.codigo
    }
  }

}
