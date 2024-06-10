import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInfTpPrdSanComponent } from './tab-inf-tp-prd-san.component';

describe('TabInfTpPrdSanComponent', () => {
  let component: TabInfTpPrdSanComponent;
  let fixture: ComponentFixture<TabInfTpPrdSanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabInfTpPrdSanComponent]
    });
    fixture = TestBed.createComponent(TabInfTpPrdSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
