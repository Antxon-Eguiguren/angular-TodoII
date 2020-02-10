import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input() tarea: Tarea;
  @Output() tareaABorrar: EventEmitter<Tarea>;

  constructor() {
    this.tareaABorrar = new EventEmitter();
  }

  ngOnInit() {
  }

  manejarClick() {
    this.tarea.completa = !this.tarea.completa;
  }

  manejarClickBorrarTarea() {
    this.tareaABorrar.emit(this.tarea);
  }

}
