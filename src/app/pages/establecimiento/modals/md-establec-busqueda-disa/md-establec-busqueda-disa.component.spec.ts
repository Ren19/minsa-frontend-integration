import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecBusquedaDisaComponent } from './md-establec-busqueda-disa.component';

describe('MdEstablecBusquedaDisaComponent', () => {
  let component: MdEstablecBusquedaDisaComponent;
  let fixture: ComponentFixture<MdEstablecBusquedaDisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecBusquedaDisaComponent]
    });
    fixture = TestBed.createComponent(MdEstablecBusquedaDisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
