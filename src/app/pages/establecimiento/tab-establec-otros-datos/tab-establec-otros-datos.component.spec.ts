import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEstablecOtrosDatosComponent } from './tab-establec-otros-datos.component';

describe('TabEstablecOtrosDatosComponent', () => {
  let component: TabEstablecOtrosDatosComponent;
  let fixture: ComponentFixture<TabEstablecOtrosDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabEstablecOtrosDatosComponent]
    });
    fixture = TestBed.createComponent(TabEstablecOtrosDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
