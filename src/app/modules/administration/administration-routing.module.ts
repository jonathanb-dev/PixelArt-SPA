import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';

// Components
import { AdministrationComponent } from './components/administration.component';
import { PhotoManagerComponent } from './components/photo-manager/photo-manager.component';
import { PhotoUploaderComponent } from './components/photo-uploader/photo-uploader.component';
import { PhotoEditorComponent } from './components/photo-editor/photo-editor.component';

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
            component: PhotoManagerComponent,
            children: [
              { path: 'upload', component: PhotoUploaderComponent },
              { path: ':id', component: PhotoEditorComponent }
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
