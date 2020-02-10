import { Component } from '@angular/core';
import { Tarea } from './models/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: Tarea[];

  constructor() {
    this.arrTareas = [];
  }

  manejarTareaEnviada($event) {
    this.arrTareas.push({ ...$event });
  }

}
