import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Custom modules
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Layouts
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';

// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';

// Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { PhotosManagerComponent } from './components/administration/photos-manager/photos-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyLayoutComponent,
    LayoutComponent,
    NotFoundPageComponent,
    HomePageComponent,
    AdministrationPageComponent,
    NotFoundComponent,
    HomeComponent,
    AdministrationComponent,
    PhotosManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
