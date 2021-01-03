import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Unidad1Component } from './pages/unidad1/unidad1.component';
import { Unidad2Component } from './pages/unidad2/unidad2.component';
import { Unidad3Component } from './pages/unidad3/unidad3.component';
import { Unidad4Component } from './pages/unidad4/unidad4.component';
import { Unidad5Component } from './pages/unidad5/unidad5.component';
import { Unidad6Component } from './pages/unidad6/unidad6.component';

const routes: Routes = [
  {path: "home", component: HomeComponent },
  {path: "first", component: Unidad1Component },
  {path: "second", component: Unidad2Component },
  {path: "thirth", component: Unidad3Component },
  {path: "fourth", component: Unidad4Component },
  {path: "fifth", component: Unidad5Component },
  {path: "sixth", component: Unidad6Component },
  {path: "", redirectTo: "/home", pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
