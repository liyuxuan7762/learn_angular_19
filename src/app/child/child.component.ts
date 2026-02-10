import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() parentMessage: string = '';

  @Output() outputMsg = new EventEmitter<any>();

  sendMessage() {
    console.log('Sending message to parent:', 'Message from Child Component');
    this.outputMsg.emit('Message from Child Component');
  }
}
