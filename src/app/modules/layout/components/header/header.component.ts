/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	isShowMenu: boolean;

	constructor(private authService: AuthService) {
		this.isShowMenu = false;
	}

	ngOnInit(): void {}

	toggleMenu(): void {
		this.isShowMenu = !this.isShowMenu;
	}

	logout(): void {
		this.authService.logout();
	}
}
