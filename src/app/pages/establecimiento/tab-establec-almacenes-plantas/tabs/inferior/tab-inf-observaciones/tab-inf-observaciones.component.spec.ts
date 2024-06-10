import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInfObservacionesComponent } from './tab-inf-observaciones.component';

describe('TabInfObservacionesComponent', () => {
  let component: TabInfObservacionesComponent;
  let fixture: ComponentFixture<TabInfObservacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabInfObservacionesComponent]
    });
    fixture = TestBed.createComponent(TabInfObservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
