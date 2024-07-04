import { Component } from '@angular/core';
import { LogoutDataSource } from './datasources/logout.datasource';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public logoutDataSource: LogoutDataSource) {}

  logout() {
    this.logoutDataSource.logout();
  }
}
