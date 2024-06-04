import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecActividadComponent } from './md-establec-actividad.component';

describe('MdEstablecActividadComponent', () => {
  let component: MdEstablecActividadComponent;
  let fixture: ComponentFixture<MdEstablecActividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecActividadComponent]
    });
    fixture = TestBed.createComponent(MdEstablecActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
