import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('api.themoviedb.org')) {
            const paramReq = req.clone({
                params: req.params.set('api_key', 'ca23c969a48e1266b9ef284d5167d560')
            });
            return next.handle(paramReq);
        } else {
            return next.handle(req);
        }
    }
}