import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() arrTareas: Tarea[];
  @Output() tarea: EventEmitter<Tarea>;

  valorSelect: string;

  constructor() {
    this.arrTareas = [];
    this.tarea = new EventEmitter();
    this.valorSelect = 'todas';
  }

  ngOnInit() {
  }

  manejarTareaEnviada($event) {
    this.tarea.emit($event);
  }

  manejarCambioFiltro($event) {
    this.valorSelect = $event.target.value;
  }

  manejarTareaABorrar($event) {
    const posicionTareaEncontrada = this.arrTareas.findIndex(tarea => {
      return tarea.titulo === $event.titulo;
    });
    if (posicionTareaEncontrada != -1) {
      this.arrTareas.splice(posicionTareaEncontrada, 1);
    }
  }

}
