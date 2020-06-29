import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoadingService } from './loading/loading.service';
@Injectable()
export class AppInterceptor implements HttpInterceptor {
    private apiCount = 0;
    constructor(private loadingService: LoadingService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.showloading();
        ++this.apiCount;
        console.log('show loading');
        return next.handle(req).pipe(
            finalize(() => {
                --this.apiCount;
                if(this.apiCount === 0) {
                    this.loadingService.hideloading();
                    console.log('hide loading');
                }
            })
        );
    }
}