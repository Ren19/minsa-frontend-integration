import { TestBed } from "@angular/core/testing";
import { TramiteEstablecimientoFarmaceuticoService } from "./tramite-establecimiento-farmaceutico.service";

describe('PostService', () => {
    let service: TramiteEstablecimientoFarmaceuticoService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(TramiteEstablecimientoFarmaceuticoService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });