import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropinaPage } from './propina.page';

describe('PropinaPage', () => {
  let component: PropinaPage;
  let fixture: ComponentFixture<PropinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
