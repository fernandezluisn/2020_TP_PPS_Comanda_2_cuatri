import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaClientePage } from './mesa-cliente.page';

describe('MesaClientePage', () => {
  let component: MesaClientePage;
  let fixture: ComponentFixture<MesaClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
