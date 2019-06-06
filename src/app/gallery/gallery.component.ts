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
  currentPage: number = 1;
  searchTerm: string;
  photosPerPage: any;
  constructor(private imagesProvider: ImagesProviderService) { }

  ngOnInit() {
    this.searchImages();
  }
  searchImages() {
    this.imagesProvider.getPhotos(this.searchTerm, this.currentPage).then((result: any) => {
      console.log('Page number: ' + result.photos.page);
      this.photosPerPage = result.photos.perpage;
      const rawData: any[] = result.photos.photo;

      this.photos = rawData.map((item) => ({
        title: item.title,
        url: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
      }));
      console.log(this.photos);

    });
  }
}
