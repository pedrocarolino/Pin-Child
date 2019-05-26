import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareChildPage } from './share-child.page';

describe('ShareChildPage', () => {
  let component: ShareChildPage;
  let fixture: ComponentFixture<ShareChildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareChildPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
