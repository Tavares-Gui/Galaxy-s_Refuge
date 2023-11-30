import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ClientServiceService } from '../client/clientService.service';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Router, MatGridListModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor (private client: ClientServiceService, private router: Router) { }
  
  username: string = '';
  cpf: string = '';
  dataNasc: Date | null = null;
  number: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  errorEmpty: boolean = false;
  errorCpf: boolean = false;
  errorPassword: boolean = false;
  
  create() {
    if(this.username === '' || this.cpf === '' || this.email === '' || !this.dataNasc || this.number === '' || this.password === '' || this.confirmPassword === '')
    {
      this.errorEmpty = true;
      return;
    }

    if(this.cpf.length < 11)
    {
      this.errorCpf = true;
      this.router.navigate(['/register'])
      return
    }

    if(this.password !== this.confirmPassword)
    {
      this.errorCpf = false;
      this.errorEmpty = false;
      this.errorPassword = true;
      return;
    }

    this.client.register({
      Nome: this.username,
      Cpf: this.cpf,
      Email: this.email,
      DataNasc: this.dataNasc,
      Numero: this.number,
      Senha: this.password
    });
  
    this.router.navigate(['/login'])
  } 
}
