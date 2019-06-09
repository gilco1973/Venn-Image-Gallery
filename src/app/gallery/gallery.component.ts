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
  savedSearches: any[] = [];
  selectedSavedSearches: any[] = [];
  relations = [{ text: 'OR', value: 'any' }, { text: 'AND', value: 'all' }];
  selectedMultiSearchRelations: string;
  constructor(private imagesProvider: ImagesProviderService) { }

  ngOnInit() {
    this.searchImages();
    this.getSavedSearches();
    this.selectedMultiSearchRelations = this.relations[0].value; // Default is 'OR'
  }
  onSavedSearchSelect($event) {

  }
  getSavedSearches() {
    this.savedSearches = JSON.parse(localStorage.getItem('searches')) || [];
  }
  saveSearch() {
    if (!this.searchTerm || !this.searchTerm.length || this.savedSearches.includes(this.searchTerm)) {
      return;
    }
    this.savedSearches.push(this.searchTerm);
    localStorage.setItem('searches', JSON.stringify(this.savedSearches));
    this.getSavedSearches();
  }
  applySelection(){
    if(!this.selectedSavedSearches || !this.selectedSavedSearches.length){
      return;
    }
    const savedSearchesStr = this.selectedSavedSearches.join(',');
    this.searchTerm = savedSearchesStr;
    this.searchImages();
  }
  searchImages() {
    this.imagesProvider.getPhotos(this.searchTerm, this.currentPage, this.selectedMultiSearchRelations).then((result: any) => {
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
