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
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgChartsModule } from 'ng2-charts';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { AdminComponent } from './views/admin/admin.component';
import { PackageViewComponent } from './views/package-view/package-view.component';
import { DiscountViewComponent } from './views/discount-view/discount-view.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PriceDisplayComponent } from './components/price-display/price-display.component';
import { AverageScoreComponent } from './components/average-score/average-score.component';
import { ButtonAsLinkComponent } from './components/button-as-link/button-as-link.component';
import { PackageComponent } from './components/package/package.component';
import { HighRatedViewComponent } from './views/high-rated-view/high-rated-view.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';

/**
 * Services
 */
import { EstablishmentService, PackageService, UtilsService } from './services';

/**
 * Pipes
 */
import { PremiumPipe } from './pipes/premium/premium.pipe';
import { DiscountPipe } from './pipes/discount/discount.pipe';
import { RatedPipe } from './pipes/rated/rated.pipe';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { GraphicsComponent } from './components/graphics/graphics.component';

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
    DiscountViewComponent,
    DiscountPipe,
    HighRatedViewComponent,
    RatedPipe,
    AdminTableComponent,
    EditDialogComponent,
    AddDialogComponent,
    GraphicsComponent,
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
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgChartsModule,
  ],
  providers: [
    PackageService,
    EstablishmentService,
    UtilsService,
    {
      provide: LOCALE_ID,
      useValue: 'fr-CA',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
