import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user/user.service';
import { LogoutDataSource } from './datasources/logout.datasource';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private readonly UserService: UserService, public logoutDataSource: LogoutDataSource) { }
  name = '';

  ngOnInit() {
    const name = this.UserService.getCurrent().name;

    this.name = name;
  }

  logout() {
    this.logoutDataSource.logout()
  }
}
