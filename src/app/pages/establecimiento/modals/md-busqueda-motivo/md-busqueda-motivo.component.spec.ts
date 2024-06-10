import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdBusquedaMotivoComponent } from './md-busqueda-motivo.component';

describe('MdBusquedaMotivoComponent', () => {
  let component: MdBusquedaMotivoComponent;
  let fixture: ComponentFixture<MdBusquedaMotivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdBusquedaMotivoComponent]
    });
    fixture = TestBed.createComponent(MdBusquedaMotivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
