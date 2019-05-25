import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChildsComponent } from './list-childs.component';

describe('ListChildsComponent', () => {
  let component: ListChildsComponent;
  let fixture: ComponentFixture<ListChildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChildsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
