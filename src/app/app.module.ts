/**
 * Modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

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
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    PackageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [PackageService, EstablishmentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
