import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecRegistroPersonalComponent } from './md-establec-registro-personal.component';

describe('MdEstablecRegistroPersonalComponent', () => {
  let component: MdEstablecRegistroPersonalComponent;
  let fixture: ComponentFixture<MdEstablecRegistroPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecRegistroPersonalComponent]
    });
    fixture = TestBed.createComponent(MdEstablecRegistroPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
