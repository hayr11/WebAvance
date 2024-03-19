import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {LightComponent} from "../light/light.component";

@Component({
  selector: 'app-light-page',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    LightComponent
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



}
