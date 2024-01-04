import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [],
})
export class InputComponent {
  @Input() id = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() label = '';
  @Input() readOnly = false;
  @Input() disabled = false;
  // @Input() onInput = new EventEmitter();

  // emitInputEvent(event: Event) {
  //   this.onInput.emit(event);
  // }
}
