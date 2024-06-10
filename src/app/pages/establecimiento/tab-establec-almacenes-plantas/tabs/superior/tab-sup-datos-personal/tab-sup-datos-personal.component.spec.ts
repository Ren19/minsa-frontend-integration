import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSupDatosPersonalComponent } from './tab-sup-datos-personal.component';

describe('TabSupDatosPersonalComponent', () => {
  let component: TabSupDatosPersonalComponent;
  let fixture: ComponentFixture<TabSupDatosPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabSupDatosPersonalComponent]
    });
    fixture = TestBed.createComponent(TabSupDatosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
