import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailsComponent } from './servicedetails/service-details.component';
import { NavbarModule } from '../navbar/navbar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ServiceComponent,
    ServiceDetailsComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule,
  ],
  exports: [
    ServiceComponent,
    ServiceDetailsComponent,
  ]
})
export class ServiceModule { }
