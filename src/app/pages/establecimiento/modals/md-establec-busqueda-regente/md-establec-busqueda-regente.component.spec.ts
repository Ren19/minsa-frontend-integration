import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecBusquedaRegenteComponent } from './md-establec-busqueda-regente.component';

describe('MdEstablecBusquedaRegenteComponent', () => {
  let component: MdEstablecBusquedaRegenteComponent;
  let fixture: ComponentFixture<MdEstablecBusquedaRegenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecBusquedaRegenteComponent]
    });
    fixture = TestBed.createComponent(MdEstablecBusquedaRegenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
