import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { Unidad1Component } from './pages/unidad1/unidad1.component';
import { Unidad2Component } from './pages/unidad2/unidad2.component';
import { Unidad3Component } from './pages/unidad3/unidad3.component';
import { Unidad4Component } from './pages/unidad4/unidad4.component';
import { Unidad5Component } from './pages/unidad5/unidad5.component';
import { Unidad6Component } from './pages/unidad6/unidad6.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    Unidad1Component,
    Unidad2Component,
    Unidad3Component,
    Unidad4Component,
    Unidad5Component,
    Unidad6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
