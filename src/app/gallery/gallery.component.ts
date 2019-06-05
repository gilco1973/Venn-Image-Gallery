import { Component, OnInit } from '@angular/core';
import { ImagesProviderService } from '../images-provider.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  headerTxt: string = 'Image Gallery';
  photos: any;
  searchTerm: string;
  constructor(private imagesProvider: ImagesProviderService) { }

  ngOnInit() {
    this.searchImages();
  }
  searchImages() {
    this.imagesProvider.getPhotos(this.searchTerm).subscribe(data => {
      this.photos = data;
      console.log(this.photos);
    });
    
  }
  

}
