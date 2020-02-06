import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanformComponent } from './panform.component';

describe('PanformComponent', () => {
  let component: PanformComponent;
  let fixture: ComponentFixture<PanformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
