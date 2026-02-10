import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesForComponent } from './directives-for.component';

describe('DirectivesForComponent', () => {
  let component: DirectivesForComponent;
  let fixture: ComponentFixture<DirectivesForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
