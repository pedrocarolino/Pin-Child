import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MychildPage } from './mychild.page';

describe('MychildPage', () => {
  let component: MychildPage;
  let fixture: ComponentFixture<MychildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MychildPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


