import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLineDetailComponent } from './request-line-detail.component';

describe('RequestLineDetailComponent', () => {
  let component: RequestLineDetailComponent;
  let fixture: ComponentFixture<RequestLineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
