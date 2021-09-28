import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework14ChildComponent } from './homework14-child.component';

describe('Homework14ChildComponent', () => {
  let component: Homework14ChildComponent;
  let fixture: ComponentFixture<Homework14ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework14ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework14ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
