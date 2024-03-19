import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-light-page',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './light-page.component.html',
  styleUrl: './light-page.component.css'
})
export class LightPageComponent {

  light: boolean = false;

  switchLight() {
    this.light = !this.light;
  }

}
