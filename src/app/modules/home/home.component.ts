import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private readonly UserService: UserService) {}
  name = '';

  ngOnInit() {
    const name = this.UserService.getCurrent().name;

    this.name = name;
  }
}
