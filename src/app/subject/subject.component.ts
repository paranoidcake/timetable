import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  @Input() title: string;
  @Input() room: string;
  @Input() color: string;
  @Input() time: string;
  @Input() day: string;
  @Input() repeats: boolean;
  @Output() repeat = new EventEmitter<string>();

  constructor() {

  }

  onClick() {
    this.repeats = !this.repeats;
    this.repeats ? this.repeat.emit(this.time + "~" + this.day) : this.repeat.emit();
  }

  ngOnInit() {
  }

}
