import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecBusquedaProfesionComponent } from './md-establec-busqueda-profesion.component';

describe('MdEstablecBusquedaProfesionComponent', () => {
  let component: MdEstablecBusquedaProfesionComponent;
  let fixture: ComponentFixture<MdEstablecBusquedaProfesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecBusquedaProfesionComponent]
    });
    fixture = TestBed.createComponent(MdEstablecBusquedaProfesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
