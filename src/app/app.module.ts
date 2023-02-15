/**
 * Modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { AdminComponent } from './views/admin/admin.component';
import { PackageComponent } from './views/package/package.component';

/**
 * Services
 */
import { EstablishmentService, PackageService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    PackageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PackageService, EstablishmentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
