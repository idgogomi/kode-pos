import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KodePage } from './kode.page';

describe('KodePage', () => {
  let component: KodePage;
  let fixture: ComponentFixture<KodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
