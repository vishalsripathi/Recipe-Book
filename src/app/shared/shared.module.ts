import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { Dropdown } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AlertComponent, LoadingSpinnerComponent, Dropdown],
  imports: [CommonModule],
  exports: [AlertComponent, LoadingSpinnerComponent, Dropdown, CommonModule],
})
export class SharedModule {}
