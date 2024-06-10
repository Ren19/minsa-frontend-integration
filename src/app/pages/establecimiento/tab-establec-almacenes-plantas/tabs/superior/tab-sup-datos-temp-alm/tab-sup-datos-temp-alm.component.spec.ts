import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSupDatosTempAlmComponent } from './tab-sup-datos-temp-alm.component';

describe('TabSupDatosTempAlmComponent', () => {
  let component: TabSupDatosTempAlmComponent;
  let fixture: ComponentFixture<TabSupDatosTempAlmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabSupDatosTempAlmComponent]
    });
    fixture = TestBed.createComponent(TabSupDatosTempAlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
