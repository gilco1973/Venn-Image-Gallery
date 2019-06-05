import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { tap } from 'rxjs/internal/operators/tap';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private loaderService: NgxSpinnerService,
    private errorHandlerService: ErrorHandlerService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(request).pipe(tap((x: any) => {
      if (x && x.status) {
        this.loaderService.hide();
      }
    }, (err: any) => {
      this.loaderService.hide();
      if (err instanceof HttpErrorResponse) {
        // do error handling here
        this.errorHandlerService.showErrorMessage(err.message);
      }
    }));
  }
}
