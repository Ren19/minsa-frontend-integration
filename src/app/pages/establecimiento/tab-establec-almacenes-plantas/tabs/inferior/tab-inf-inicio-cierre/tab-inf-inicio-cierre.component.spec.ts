import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInfInicioCierreComponent } from './tab-inf-inicio-cierre.component';

describe('TabInfInicioCierreComponent', () => {
  let component: TabInfInicioCierreComponent;
  let fixture: ComponentFixture<TabInfInicioCierreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabInfInicioCierreComponent]
    });
    fixture = TestBed.createComponent(TabInfInicioCierreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
