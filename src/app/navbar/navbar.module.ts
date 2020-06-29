import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { MenuupdateComponent } from './menuupdate/menuupdate.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    MegamenuComponent,
    MenuupdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    MegamenuComponent,
    MenuupdateComponent
  ]
})
export class NavbarModule { }
