/**
 * Modules
 */
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { AdminComponent } from './views/admin/admin.component';
import { PackageViewComponent } from './views/package-view/package-view.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PriceDisplayComponent } from './components/price-display/price-display.component';
import { AverageScoreComponent } from './components/average-score/average-score.component';
import { ButtonAsLinkComponent } from './components/button-as-link/button-as-link.component';
import { PackageComponent } from './components/package/package.component';

/**
 * Services
 */
import { EstablishmentService, PackageService, UtilsService } from './services';

/**
 * Pipes
 */
import { PremiumPipe } from './pipes/premium/premium.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    NavbarComponent,
    PremiumPipe,
    CardComponent,
    PriceDisplayComponent,
    AverageScoreComponent,
    ButtonAsLinkComponent,
    PackageComponent,
    PackageViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [
    PackageService,
    EstablishmentService,
    {
      provide: LOCALE_ID,
      useValue: 'fr-CA',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
