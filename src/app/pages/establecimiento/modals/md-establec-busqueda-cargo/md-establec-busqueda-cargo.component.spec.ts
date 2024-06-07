import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecBusquedaCargoComponent } from './md-establec-busqueda-cargo.component';

describe('MdEstablecBusquedaCargoComponent', () => {
  let component: MdEstablecBusquedaCargoComponent;
  let fixture: ComponentFixture<MdEstablecBusquedaCargoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecBusquedaCargoComponent]
    });
    fixture = TestBed.createComponent(MdEstablecBusquedaCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
