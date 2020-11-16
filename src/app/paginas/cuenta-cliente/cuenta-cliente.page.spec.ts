import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaClientePage } from './cuenta-cliente.page';

describe('CuentaClientePage', () => {
  let component: CuentaClientePage;
  let fixture: ComponentFixture<CuentaClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
