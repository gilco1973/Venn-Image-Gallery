import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';



const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'gallery'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
})

export class AppRoutingModule { }
