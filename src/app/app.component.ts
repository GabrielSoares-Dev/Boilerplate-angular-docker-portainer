import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModule } from '@modules/login/login.module';
import { SharedModule } from '@shared/shared.module';
import { ThemeService } from '@services/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, RouterOutlet, LoginModule],
  providers: [ThemeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    const notHaveTheme = !localStorage.getItem('theme');

    if (notHaveTheme) this.themeService.setTheme('DARK');
  }
}
