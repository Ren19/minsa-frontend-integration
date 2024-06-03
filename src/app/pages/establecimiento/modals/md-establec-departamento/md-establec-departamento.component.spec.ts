import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecDepartamentoComponent } from './md-establec-departamento.component';

describe('MdEstablecDepartamentoComponent', () => {
  let component: MdEstablecDepartamentoComponent;
  let fixture: ComponentFixture<MdEstablecDepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecDepartamentoComponent]
    });
    fixture = TestBed.createComponent(MdEstablecDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
