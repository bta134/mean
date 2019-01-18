import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjEditComponent } from './prj-edit.component';

describe('PrjEditComponent', () => {
  let component: PrjEditComponent;
  let fixture: ComponentFixture<PrjEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrjEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
