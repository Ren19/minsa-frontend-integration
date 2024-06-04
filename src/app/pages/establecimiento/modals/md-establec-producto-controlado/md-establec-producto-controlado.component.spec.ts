import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecProductoControladoComponent } from './md-establec-producto-controlado.component';

describe('MdEstablecProductoControladoComponent', () => {
  let component: MdEstablecProductoControladoComponent;
  let fixture: ComponentFixture<MdEstablecProductoControladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecProductoControladoComponent]
    });
    fixture = TestBed.createComponent(MdEstablecProductoControladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
