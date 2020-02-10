import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() tareaEnviada: EventEmitter<Tarea>;

  tarea: Tarea;

  constructor() {
    this.tarea = new Tarea('', '');
    this.tareaEnviada = new EventEmitter();
  }

  ngOnInit() {
  }

  manejarClick() {
    this.tareaEnviada.emit(this.tarea);
  }

}
