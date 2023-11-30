import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ClientServiceService } from './client/clientService.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ClientMenuComponent } from './clientMenu/clientMenu.component';

export const routes: Routes = [
    { path: 'clientMenu', component: ClientMenuComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/clientMenu', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        ClientMenuComponent,
        RegisterComponent,
        LoginComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientModule
      ],
      exports: [RouterModule],
      providers: [ClientServiceService],
      bootstrap: [AppComponent] 
})
export class AppRoutingModule { }