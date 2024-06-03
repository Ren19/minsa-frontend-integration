import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEstablecDatosGeneralesComponent } from './tab-establec-datos-generales.component';

describe('TabEstablecDatosGeneralesComponent', () => {
  let component: TabEstablecDatosGeneralesComponent;
  let fixture: ComponentFixture<TabEstablecDatosGeneralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabEstablecDatosGeneralesComponent]
    });
    fixture = TestBed.createComponent(TabEstablecDatosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
