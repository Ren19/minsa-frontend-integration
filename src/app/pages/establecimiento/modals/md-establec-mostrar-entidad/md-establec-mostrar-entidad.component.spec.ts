import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecMostrarEntidadComponent } from './md-establec-mostrar-entidad.component';

describe('MdEstablecMostrarEntidadComponent', () => {
  let component: MdEstablecMostrarEntidadComponent;
  let fixture: ComponentFixture<MdEstablecMostrarEntidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecMostrarEntidadComponent]
    });
    fixture = TestBed.createComponent(MdEstablecMostrarEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
