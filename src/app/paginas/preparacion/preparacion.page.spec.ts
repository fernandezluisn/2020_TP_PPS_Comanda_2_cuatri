import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparacionPage } from './preparacion.page';

describe('PreparacionPage', () => {
  let component: PreparacionPage;
  let fixture: ComponentFixture<PreparacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
