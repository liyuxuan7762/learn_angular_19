import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Sibling1Component } from '../sibling1/sibling1.component';
import { Sibling2Component } from '../sibling2/sibling2.component';
import { ReuseableComponent } from '../reuseable/reuseable.component';

@Component({
  selector: 'app-parent',
  imports: [
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    ReuseableComponent,
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements AfterViewInit {
  parentMessage: string = 'Hello from Parent Component';

  protected msg: string = '';

  protected sibling1Data: any = '';
  protected sibling2Data: any = '';

  @ViewChild('reuseable') reuseableComponent!: ReuseableComponent;

  receiveMessage(msg: any) {
    this.msg = msg;
  }

  receiveSibling1(msg: any) {
    this.sibling1Data = msg;
  }

  receiveSibling2(msg: any) {
    console.log('received' + msg);
    this.sibling2Data = msg;
  }

  ngAfterViewInit(): void {
    // this.reuseableComponent.message = 'Hello from Parent Component';
  }
}
