import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecProvinciaComponent } from './md-establec-provincia.component';

describe('MdEstablecProvinciaComponent', () => {
  let component: MdEstablecProvinciaComponent;
  let fixture: ComponentFixture<MdEstablecProvinciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecProvinciaComponent]
    });
    fixture = TestBed.createComponent(MdEstablecProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
