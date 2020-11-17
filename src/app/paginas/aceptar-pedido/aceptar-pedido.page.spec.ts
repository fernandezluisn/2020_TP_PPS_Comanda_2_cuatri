import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarPedidoPage } from './aceptar-pedido.page';

describe('AceptarPedidoPage', () => {
  let component: AceptarPedidoPage;
  let fixture: ComponentFixture<AceptarPedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceptarPedidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
