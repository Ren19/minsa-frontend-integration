import { TestBed } from '@angular/core/testing';

import { SolicitudEstablecimientoService } from './solicitud-establecimiento.service';

describe('SolicitudEstablecimientoService', () => {
  let service: SolicitudEstablecimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudEstablecimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
