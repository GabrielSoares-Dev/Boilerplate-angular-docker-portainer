import { Component, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  @Input() formControlName = '';
  @Input() readOnly = false;
  @Input() disabled = false;
  @Input() formGroup?: FormGroup;
  @Input() onInput = new EventEmitter();

  emitInputEvent(event: Event) {
    this.onInput.emit(event);
  }
}
