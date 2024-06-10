import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInfCosmeticaComponent } from './tab-inf-cosmetica.component';

describe('TabInfCosmeticaComponent', () => {
  let component: TabInfCosmeticaComponent;
  let fixture: ComponentFixture<TabInfCosmeticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabInfCosmeticaComponent]
    });
    fixture = TestBed.createComponent(TabInfCosmeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
