import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from '../pages/line-chart/line-chart.component';
import { LandingComponent } from '../pages/landing/landing.component';
import { LoginComponent } from '../pages/login/login.component';
import { OxigenacionComponent } from '../pages/oxigenacion/oxigenacion.component';
import { PulseCardiacComponent } from '../pages/pulse-cardiac/pulse-cardiac.component';
import { RegisterComponent } from '../pages/register/register.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { TemperatureComponent } from '../pages/temperature/temperature.component';
import { BodyComponent } from './components/body/body.component';
import { BodySettingsComponent } from './components/body-settings/body-settings.component';
import { HomeComponent } from './components/home/home.component';
import { StaticsComponent } from './components/statics/statics.component';
import { GraficTComponent } from '../pages/grafic-t/grafic-t.component';
import { GraficOComponent } from '../pages/grafic-o/grafic-o.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PageRComponent } from '../pages/page-r/page-r.component';
import { TableColumnStylingExample } from './components/table-column-styling-example/table-column-styling-example.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { SuperviserComponent } from '../pages/superviser/superviser.component';
import { MenuSuperviserComponent } from './components/menu-superviser/menu-superviser.component';
import { SettingSuperviserComponent } from './components/setting-superviser/setting-superviser.component';
import { StaticSuperviserComponent } from './components/static-superviser/static-superviser.component';
import { HomeSuperviserComponent } from './components/home-superviser/home-superviser.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { SupervisorPageComponent } from '../pages/supervisor-page/supervisor-page.component';
import { SupervisorLoginComponent } from '../pages/supervisor-login/supervisor-login.component';
import { SupervisorRegisterComponent } from '../pages/supervisor-register/supervisor-register.component';
import { GraficRComponent } from '../pages/grafic-r/grafic-r.component';
import { PageBpmComponent } from '../pages/page-bpm/page-bpm.component';
import { RegisterSupervisorComponent } from '../pages/register-supervisor/register-supervisor.component';
import { GraficDatotComponent } from '../pages/grafic-datot/grafic-datot.component';
import { DateFilterComponent } from './date-filter/date-filter.component';
import { TableVitalesComponent } from './table-vitales/table-vitales.component';
import { TableOxigenacionComponent } from './table-oxigenacion/table-oxigenacion.component';
import { TableTemperatureComponent } from './table-temperature/table-temperature.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FiltradosRComponent } from './filtrados-r/filtrados-r.component';
import { STemperaturaComponent } from './s-temperatura/s-temperatura.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    LandingComponent,
    LoginComponent,
    OxigenacionComponent,
    PulseCardiacComponent,
    RegisterComponent,
    SettingsComponent,
    TemperatureComponent,
    BodyComponent,
    BodySettingsComponent,
    HomeComponent,
    StaticsComponent,
    GraficTComponent,
    GraficOComponent,
    MenuComponent,
    HeaderComponent,
    PageRComponent,
    TableColumnStylingExample,
    SuperviserComponent,
    MenuSuperviserComponent,
    SettingSuperviserComponent,
    StaticSuperviserComponent,
    HomeSuperviserComponent,
    SupervisorPageComponent,
    SupervisorLoginComponent,
    SupervisorRegisterComponent,
    GraficRComponent,
    PageBpmComponent,
    RegisterSupervisorComponent,
    GraficDatotComponent,
    DateFilterComponent,
    TableVitalesComponent,
    TableOxigenacionComponent,
    TableTemperatureComponent,
    PresentationComponent,
    FiltradosRComponent,
    STemperaturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
