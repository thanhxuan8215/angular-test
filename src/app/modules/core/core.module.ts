import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, JwtInterceptor } from './interceptors';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent, RegisterComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [LoginComponent, RegisterComponent],
	imports: [
		CommonModule,
		HttpClientModule,
		ReactiveFormsModule,
		RouterModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
	]
})
export class CoreModule {}
