import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { LogoutDataSource } from './datasources/logout.datasource';
import { LogoutUseCase } from './usecases/logout.usecase';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule],
  providers: [LogoutDataSource, LogoutUseCase],
})
export class HomeModule {}
