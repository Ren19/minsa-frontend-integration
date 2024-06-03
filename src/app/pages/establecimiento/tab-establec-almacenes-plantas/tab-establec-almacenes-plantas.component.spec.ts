import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEstablecAlmacenesPlantasComponent } from './tab-establec-almacenes-plantas.component';

describe('TabEstablecAlmacenesPlantasComponent', () => {
  let component: TabEstablecAlmacenesPlantasComponent;
  let fixture: ComponentFixture<TabEstablecAlmacenesPlantasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabEstablecAlmacenesPlantasComponent]
    });
    fixture = TestBed.createComponent(TabEstablecAlmacenesPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
