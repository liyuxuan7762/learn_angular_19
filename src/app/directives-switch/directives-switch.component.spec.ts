import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesSwitchComponent } from './directives-switch.component';

describe('DirectivesSwitchComponent', () => {
  let component: DirectivesSwitchComponent;
  let fixture: ComponentFixture<DirectivesSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
