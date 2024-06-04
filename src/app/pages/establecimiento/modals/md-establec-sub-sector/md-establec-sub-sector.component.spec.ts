import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecSubSectorComponent } from './md-establec-sub-sector.component';

describe('MdEstablecSubSectorComponent', () => {
  let component: MdEstablecSubSectorComponent;
  let fixture: ComponentFixture<MdEstablecSubSectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecSubSectorComponent]
    });
    fixture = TestBed.createComponent(MdEstablecSubSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
