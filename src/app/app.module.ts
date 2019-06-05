import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesNameFilterPipe } from './images-name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImagesNameFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
