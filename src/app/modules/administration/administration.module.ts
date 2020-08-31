import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Custom modules
import { SharedModule } from '../shared/shared.module';
import { AdministrationRoutingModule } from './administration-routing.module';

// Pages
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';

// Components
import { AdministrationComponent } from './components/administration.component';
import { PhotosManagerComponent } from './components/photos-manager/photos-manager.component';
import { PhotoListComponent } from './components/photos-manager/photo-list/photo-list.component';
import { PhotoItemComponent } from './components/photos-manager/photo-list/photo-item/photo-item.component';
import { PhotoListFiltersComponent } from './components/photos-manager/photo-list-filters/photo-list-filters.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';

@NgModule({
  declarations: [
    AdministrationPageComponent,
    AdministrationComponent,
    PhotosManagerComponent,
    PhotoListComponent,
    PhotoItemComponent,
    PhotoListFiltersComponent,
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }