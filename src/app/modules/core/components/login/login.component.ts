/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	returnUrl: string;
	submitted: boolean;
	error: string;

	constructor(
		private authService: AuthService,
		private router: Router,
		private formBuilder: FormBuilder,
		private route: ActivatedRoute
	) {
		if (this.authService.isLoggedIn) {
			void this.router.navigate(['/']);
		}
		this.submitted = false;
		this.error = '';

		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	get f(): {
		[key: string]: AbstractControl;
	} {
		return this.loginForm.controls;
	}

	onSubmit(): void {
		this.submitted = true;

		if (this.loginForm?.valid) {
			this.authService
				.login(this.f.username.value, this.f.password.value)
				.subscribe(
					() => {
						void this.router.navigate([this.returnUrl]);
					},
					(error) => {
						this.error = error;
					}
				);
		}
	}
}
