import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSupDatosObservacionesComponent } from './tab-sup-datos-observaciones.component';

describe('TabSupDatosObservacionesComponent', () => {
  let component: TabSupDatosObservacionesComponent;
  let fixture: ComponentFixture<TabSupDatosObservacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabSupDatosObservacionesComponent]
    });
    fixture = TestBed.createComponent(TabSupDatosObservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
