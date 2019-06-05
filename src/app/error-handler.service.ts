import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  showErrorMessage(message: string) {
    console.log(message);
  }

  constructor() { }
}
