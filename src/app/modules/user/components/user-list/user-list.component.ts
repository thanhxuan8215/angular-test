import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/shared/models';
import { UserService } from 'src/app/modules/shared/services';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
	loading: boolean;
	users!: User[];
	page = 1;
	pageSize = 5;

	constructor(private userService: UserService) {
		this.loading = false;
	}

	ngOnInit(): void {
		this.loading = true;
		this.userService.getAll().subscribe((users) => {
			this.loading = false;
			this.users = users;
		});
	}
}
