import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesProviderService {

  constructor(private httpClient: HttpClient) { }
  getPhotos(searchTerm: string) {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&
    format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1`;

    return this.httpClient.get(url).pipe();
  }
}
