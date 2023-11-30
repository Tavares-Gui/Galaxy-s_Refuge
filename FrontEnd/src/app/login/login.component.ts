import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ClientServiceService } from '../client/clientService.service';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Router, MatGridListModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor (private client: ClientServiceService, private router: Router) { }

  cpf: string = '';
  password: string = '';

  errorEmpty: boolean = false;
  
  logar() {
    this.client.login(
      {
        Cpf: this.cpf,
        Senha: this.password,
      },
      (result: any) => {
        if (result == null)
        {
          this.errorEmpty = true;
          this.router.navigate(['/login']);
        } 
        else 
        {
          sessionStorage.setItem('jwt', JSON.stringify(result));
          this.router.navigate(['/clientMenu']);
        }
      }
    );
  }
}
