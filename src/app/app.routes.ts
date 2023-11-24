import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientMenuComponent } from './clientMenu/clientMenu.component';
import { LoginComponent } from './login/login.component'

export const routes: Routes = [
    { path: 'clientMenu', component: ClientMenuComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }