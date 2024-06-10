import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInfDatosGeneralesComponent } from './tab-inf-datos-generales.component';

describe('TabInfDatosGeneralesComponent', () => {
  let component: TabInfDatosGeneralesComponent;
  let fixture: ComponentFixture<TabInfDatosGeneralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabInfDatosGeneralesComponent]
    });
    fixture = TestBed.createComponent(TabInfDatosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
