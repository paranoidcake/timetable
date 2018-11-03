import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core'
import { State } from '../state';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  @Input() title: string;
  @Input() room: string;
  @Input() color: string;
  @Input() time: number;
  @Input() day: number;
  @Input() repeat: string; // Value for CSS

  show: boolean = false;
  state: boolean = true; // Repeat switch

  @Output() changeState = new EventEmitter<State>(); //Value for JS

  constructor() {

  }

  onClick() {
    if(this.state == true){
      this.state = false;
      this.changeState.emit(new State(true, Number(this.time), Number(this.day)));
    } else {
      this.state = true;
      this.changeState.emit(new State(false, Number(this.time), Number(this.day)));
    }
  }

  ngOnInit() {
  }

}
