import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecSolicitudInscripcionComponent } from './md-establec-solicitud-inscripcion.component';

describe('MdEstablecSolicitudInscripcionComponent', () => {
  let component: MdEstablecSolicitudInscripcionComponent;
  let fixture: ComponentFixture<MdEstablecSolicitudInscripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecSolicitudInscripcionComponent]
    });
    fixture = TestBed.createComponent(MdEstablecSolicitudInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
