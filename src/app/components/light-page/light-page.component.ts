import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {LightComponent} from "../light/light.component";
import {LightService} from "../../services/light.service";

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


  constructor(protected lightService: LightService) {}

  handleTrigger(id: number) {
    this.lightService.removeLight(id);
  }
}
