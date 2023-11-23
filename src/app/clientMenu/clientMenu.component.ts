import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatGridListModule],
  templateUrl: './clientMenu.component.html',
  styleUrls: ['./clientMenu.component.css']
})

export class ClientMenuComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  
  public navigateToSection(section: string){
    // window.location.hash = '';
    // window.location.hash = section;
    this.viewportScroller.scrollToAnchor(section);
  }
}
