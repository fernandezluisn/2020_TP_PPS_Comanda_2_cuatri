import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCocinaPage } from './home-cocina.page';

describe('HomeCocinaPage', () => {
  let component: HomeCocinaPage;
  let fixture: ComponentFixture<HomeCocinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCocinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCocinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
