import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstablecGrupoProductoComponent } from './md-establec-grupo-producto.component';

describe('MdEstablecGrupoProductoComponent', () => {
  let component: MdEstablecGrupoProductoComponent;
  let fixture: ComponentFixture<MdEstablecGrupoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdEstablecGrupoProductoComponent]
    });
    fixture = TestBed.createComponent(MdEstablecGrupoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
