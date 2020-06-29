import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServiceDetailsComponent } from './service/servicedetails/service-details.component';
import { ServiceComponent } from './service/service/service.component';
import { MenuupdateComponent } from './navbar/menuupdate/menuupdate.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WeComponent } from './we/we.component';
import { StartUpComponent } from './start-up/start-up.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'services/:type', component: ServiceComponent },
  { path: 'service/:menuId/:submenuId', component: ServiceDetailsComponent },
  { path: 'service/menuupdate', component: MenuupdateComponent },
  { path: 'service/:menuId', component: ServiceDetailsComponent },
  { path: 'startup', component: StartUpComponent },
  { path: 'we', component: WeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
