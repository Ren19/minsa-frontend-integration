import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css'],
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
  ]
})


export class OtrosComponent implements OnInit {

  @Input({ required: false })
  email!:string;


  constructor() {


  }

  ngOnInit() {
  }

  public clickGuardar(){
    sessionStorage.setItem('email', this.email);
  }

  public clickNuevo(){
    this.email="";
  }

}
