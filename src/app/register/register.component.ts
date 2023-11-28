import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule, ViewportScroller } from '@angular/common';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatGridListModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  
}