import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesIfComponent } from './directives-if.component';

describe('DirectivesIfComponent', () => {
  let component: DirectivesIfComponent;
  let fixture: ComponentFixture<DirectivesIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
