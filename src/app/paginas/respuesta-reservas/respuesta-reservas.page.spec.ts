import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaReservasPage } from './respuesta-reservas.page';

describe('RespuestaReservasPage', () => {
  let component: RespuestaReservasPage;
  let fixture: ComponentFixture<RespuestaReservasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaReservasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
