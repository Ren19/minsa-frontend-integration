import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecDistritoComponent } from './md-establec-distrito.component';

describe('MdEstablecDistritoComponent', () => {
  let component: MdEstablecDistritoComponent;
  let fixture: ComponentFixture<MdEstablecDistritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecDistritoComponent]
    });
    fixture = TestBed.createComponent(MdEstablecDistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
