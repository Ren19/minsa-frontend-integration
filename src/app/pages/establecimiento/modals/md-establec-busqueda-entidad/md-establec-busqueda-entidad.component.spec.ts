import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecBusquedaEntidadComponent } from './md-establec-busqueda-entidad.component';

describe('MdEstablecBusquedaEntidadComponent', () => {
  let component: MdEstablecBusquedaEntidadComponent;
  let fixture: ComponentFixture<MdEstablecBusquedaEntidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecBusquedaEntidadComponent]
    });
    fixture = TestBed.createComponent(MdEstablecBusquedaEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
