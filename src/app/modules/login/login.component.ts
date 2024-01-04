import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor() {}
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  protected resetForm() {
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.resetForm();
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  change() {
    console.log(this.form.get('email')?.value);
  }
}
