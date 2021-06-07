import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	currentToken: string | null;

	constructor(private http: HttpClient, private router: Router) {
		this.currentToken = localStorage.getItem('token');
	}

	public get isLoggedIn(): boolean {
		return !!this.currentToken;
	}

	login(username: string, password: string): Observable<void> {
		return this.http
			.post<{ token: string }>(`${environment.apiUrl}/login`, {
				username,
				password
			})
			.pipe(
				map((result: { token: string }) => {
					this.currentToken = result.token;
					localStorage.setItem('token', result.token);
				})
			);
	}

	logout(): void {
		this.currentToken = null;
		localStorage.removeItem('token');
		void this.router.navigate(['/login']);
	}
}
