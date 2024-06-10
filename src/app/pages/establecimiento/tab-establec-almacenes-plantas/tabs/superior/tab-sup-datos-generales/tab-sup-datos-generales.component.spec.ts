import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSupDatosGeneralesComponent } from './tab-sup-datos-generales.component';

describe('TabSupDatosGeneralesComponent', () => {
  let component: TabSupDatosGeneralesComponent;
  let fixture: ComponentFixture<TabSupDatosGeneralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabSupDatosGeneralesComponent]
    });
    fixture = TestBed.createComponent(TabSupDatosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
