import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './components';

@NgModule({
	declarations: [UserListComponent],
	imports: [CommonModule, UserRoutingModule, NgbModule]
})
export class UserModule {}
