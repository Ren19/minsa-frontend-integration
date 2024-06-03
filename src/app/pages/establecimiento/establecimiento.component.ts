import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {

  listaClaseTipo:any = [];
  listaSituacion: any = []

  constructor(
    private establecimientoService: EstablecimientoService
  ) {}

  ngOnInit() {
    this.getComboClaseTipo();
    this.getComboSituacion()
  }

  public getComboClaseTipo()
  {
    this.establecimientoService.getCboTipo().subscribe(response => {
        this.listaClaseTipo = response.data;
    })
  }

  public getComboSituacion()
  {
    this.establecimientoService.getCboSituacion().subscribe(response => {
        this.listaSituacion = response.data;
    })
  }


}
