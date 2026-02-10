import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  inject,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ReuseableComponent } from '../reuseable/reuseable.component';

@Component({
  selector: 'app-user',
  imports: [ReuseableComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('1. Constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1. ngOnChanges called', changes);
  }
  ngOnInit(): void {
    console.log('2. ngOnInit called');
  }
  ngDoCheck(): void {
    console.log('3. ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('4. ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('5. ngAfterContentChecked called');
  }
  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('8. ngOnDestroy called');
  }
  private router: Router = inject(Router);

  login() {
    // checking user credentials logic goes here

    // this.router.navigateByUrl('/structural-directives');
    this.router.navigate(['/structural-directives']);
  }

  protected message: string = 'User Login Form';
}
