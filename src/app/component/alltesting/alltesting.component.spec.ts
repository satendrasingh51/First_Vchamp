import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltestingComponent } from './alltesting.component';

describe('AlltestingComponent', () => {
  let component: AlltestingComponent;
  let fixture: ComponentFixture<AlltestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
