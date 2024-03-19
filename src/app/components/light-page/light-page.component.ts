import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-light-page',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './light-page.component.html',
  styleUrl: './light-page.component.css'
})
export class LightPageComponent {

  lightArray: any[] = [{
    toggled: false,
    title: "Lampe 1"
  },{
    toggled: false,
    title: "Lampe 2"
  },{
    toggled: false,
    title: "Lampe 3"
  }];

  switchLight(lightObject: any) {
    lightObject.toggled = !lightObject.toggled;
  }

}
