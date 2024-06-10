import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInfActividadComponent } from './tab-inf-actividad.component';

describe('TabInfActividadComponent', () => {
  let component: TabInfActividadComponent;
  let fixture: ComponentFixture<TabInfActividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabInfActividadComponent]
    });
    fixture = TestBed.createComponent(TabInfActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
