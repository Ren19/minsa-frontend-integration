import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSupDatosInicioCierreComponent } from './tab-sup-datos-inicio-cierre.component';

describe('TabSupDatosInicioCierreComponent', () => {
  let component: TabSupDatosInicioCierreComponent;
  let fixture: ComponentFixture<TabSupDatosInicioCierreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabSupDatosInicioCierreComponent]
    });
    fixture = TestBed.createComponent(TabSupDatosInicioCierreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
