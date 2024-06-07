import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecRepresentanteLegalComponent } from './md-establec-representante-legal.component';

describe('MdEstablecRepresentanteLegalComponent', () => {
  let component: MdEstablecRepresentanteLegalComponent;
  let fixture: ComponentFixture<MdEstablecRepresentanteLegalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecRepresentanteLegalComponent]
    });
    fixture = TestBed.createComponent(MdEstablecRepresentanteLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
