import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthgGuard } from './authg.guard';
import { DashboardsComponent } from './components/pages/dashboards/dashboards.component';
import { ChartsComponent } from './components/pages/charts/charts.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
  component: HomeComponent,
children: [
    {path: 'charts', component: ChartsComponent},
  {path: 'dashboards', component: DashboardsComponent}
],
  canActivate: [AuthgGuard]
},
{
  path: '',
  component: AuthenticationComponent,
  children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
