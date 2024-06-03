import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEstablecActividadesComponent } from './tab-establec-actividades.component';

describe('TabEstablecActividadesComponent', () => {
  let component: TabEstablecActividadesComponent;
  let fixture: ComponentFixture<TabEstablecActividadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabEstablecActividadesComponent]
    });
    fixture = TestBed.createComponent(TabEstablecActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
