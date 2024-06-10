import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInfFormaFarComponent } from './tab-inf-forma-far.component';

describe('TabInfFormaFarComponent', () => {
  let component: TabInfFormaFarComponent;
  let fixture: ComponentFixture<TabInfFormaFarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabInfFormaFarComponent]
    });
    fixture = TestBed.createComponent(TabInfFormaFarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
