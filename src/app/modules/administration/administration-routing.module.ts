import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';

// Components
import { AdministrationComponent } from './components/administration.component';
import { PhotosManagerComponent } from './components/photos-manager/photos-manager.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';

const administrationRoutes: Routes = [
  {
    path: '',
    component: AdministrationPageComponent,
    children: [
      {
        path: '',
        component: AdministrationComponent,
        children: [
          {
            path: 'photos',
            component: PhotosManagerComponent,
            children: [
              { path: 'new', component: PhotoFormComponent },
              { path: ':id', component: PhotoFormComponent }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(administrationRoutes)
  ],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
