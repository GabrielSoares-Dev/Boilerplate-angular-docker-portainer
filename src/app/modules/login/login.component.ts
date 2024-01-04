import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginDataSource } from './login.datasource';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(public dataSource: LoginDataSource) {}
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    this.dataSource.login(email, password);
  }

  protected resetForm() {
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.resetForm();
    this.dataSource.disconnectDataSource();
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }
}
