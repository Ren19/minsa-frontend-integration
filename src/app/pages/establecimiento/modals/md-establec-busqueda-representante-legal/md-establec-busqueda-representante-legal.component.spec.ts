import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecBusquedaRepresentanteLegalComponent } from './md-establec-busqueda-representante-legal.component';

describe('MdEstablecBusquedaRepresentanteLegalComponent', () => {
  let component: MdEstablecBusquedaRepresentanteLegalComponent;
  let fixture: ComponentFixture<MdEstablecBusquedaRepresentanteLegalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecBusquedaRepresentanteLegalComponent]
    });
    fixture = TestBed.createComponent(MdEstablecBusquedaRepresentanteLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
