export class User {
	id: number;
	name: string;
	email: string;
	phone: string;
	avatar: string;

	constructor(
		id: number,
		name: string,
		email: string,
		phone: string,
		avatar: string
	) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.avatar = avatar;
	}
}
