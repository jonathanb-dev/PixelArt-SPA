import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';

// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { PhotosManagerComponent } from './components/administration/photos-manager/photos-manager.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      }
    ]
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: 'administration',
        component: AdministrationPageComponent,
        children: [
          {
            path: '',
            component: AdministrationComponent,
            children: [
              { path: 'photos', component: PhotosManagerComponent }
            ]
          }
        ]
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
