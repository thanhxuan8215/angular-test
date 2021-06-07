import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, RegisterComponent } from './modules/core/components';
import { AuthGuard } from './modules/core/guards';

const layoutModule = () => import('./modules').then((x) => x.LayoutModule);

const routes: Routes = [
	{ path: '', loadChildren: layoutModule, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
