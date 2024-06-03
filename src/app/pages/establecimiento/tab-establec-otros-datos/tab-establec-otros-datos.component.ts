import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MdEstablecDistritoComponent } from '../modals/md-establec-distrito/md-establec-distrito.component';

@Component({
  selector: 'app-tab-establec-otros-datos',
  templateUrl: './tab-establec-otros-datos.component.html',
  styleUrls: ['./tab-establec-otros-datos.component.css']
})
export class TabEstablecOtrosDatosComponent {

  constructor(
    public dialog: MatDialog,
  ) {}

  openModalDepartamento() {
    const dialogRef = this.dialog.open(MdEstablecDistritoComponent, {
      width:'850px',
      height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
