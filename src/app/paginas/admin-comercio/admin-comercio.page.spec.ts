import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComercioPage } from './admin-comercio.page';

describe('AdminComercioPage', () => {
  let component: AdminComercioPage;
  let fixture: ComponentFixture<AdminComercioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComercioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComercioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
