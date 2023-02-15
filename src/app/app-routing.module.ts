import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  AdminComponent,
  HomeComponent,
  PackageComponent,
} from './views';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'package/:packageId', component: PackageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
