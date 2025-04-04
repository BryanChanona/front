import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from '../pages/landing/landing.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { TemperatureComponent } from '../pages/temperature/temperature.component';
import { PulseCardiacComponent } from '../pages/pulse-cardiac/pulse-cardiac.component';
import { OxigenacionComponent } from '../pages/oxigenacion/oxigenacion.component';
import { StaticsComponent } from './components/statics/statics.component';
import { SuperviserComponent } from '../pages/superviser/superviser.component';
import { SettingSuperviserComponent } from  './components/setting-superviser/setting-superviser.component';
import { StaticSuperviserComponent } from './components/static-superviser/static-superviser.component';
import { HomeSuperviserComponent } from './components/home-superviser/home-superviser.component';
import { SupervisorLoginComponent } from '../pages/supervisor-login/supervisor-login.component';
import { PageBpmComponent } from '../pages/page-bpm/page-bpm.component';
import { RegisterSupervisorComponent } from '../pages/register-supervisor/register-supervisor.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: "settings", component: SettingsComponent},
    {path: "statics", component:StaticsComponent},
    {path: "temperature", component:TemperatureComponent},
    {path:"pulse",component:PulseCardiacComponent},
    {path:"oxigen",component:OxigenacionComponent},
    {path:"superviser",component:SuperviserComponent},
    {path:"settingSuperviser",component:SettingSuperviserComponent},
    {path: "staticSuperviser", component:StaticSuperviserComponent},
    {path: "homeSuperviser", component:HomeSuperviserComponent},
    {path: "supervisorLogin", component: SupervisorLoginComponent},
    {path: "pageBpm", component: PageBpmComponent},
    {path: "registerSupervisor", component: RegisterSupervisorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
