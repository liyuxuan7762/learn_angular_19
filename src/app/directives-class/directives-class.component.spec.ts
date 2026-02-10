import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesClassComponent } from './directives-class.component';

describe('DirectivesClassComponent', () => {
  let component: DirectivesClassComponent;
  let fixture: ComponentFixture<DirectivesClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
