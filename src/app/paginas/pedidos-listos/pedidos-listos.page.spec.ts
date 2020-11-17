import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosListosPage } from './pedidos-listos.page';

describe('PedidosListosPage', () => {
  let component: PedidosListosPage;
  let fixture: ComponentFixture<PedidosListosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosListosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosListosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
