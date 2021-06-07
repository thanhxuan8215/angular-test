import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const isApiUrl = request.url.startsWith(environment.apiUrl);
		if (
			this.authService.isLoggedIn &&
			isApiUrl &&
			this.authService.currentToken
		) {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${this.authService.currentToken}`
				}
			});
		}
		return next.handle(request);
	}
}
