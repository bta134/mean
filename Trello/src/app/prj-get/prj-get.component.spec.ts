import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjGetComponent } from './prj-get.component';

describe('PrjGetComponent', () => {
  let component: PrjGetComponent;
  let fixture: ComponentFixture<PrjGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrjGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
