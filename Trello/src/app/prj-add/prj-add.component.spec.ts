import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjAddComponent } from './prj-add.component';

describe('PrjAddComponent', () => {
  let component: PrjAddComponent;
  let fixture: ComponentFixture<PrjAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrjAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
