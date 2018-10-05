import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core'
import { Subject } from '../subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  @Input() title: string;
  @Input() room: string;
  @Input() color: string;
  @Input() repeats: boolean;
  @Output() repeat = new EventEmitter<boolean>();

  constructor() {

  }

  onClick() {
    this.repeats = !this.repeats;
    this.repeat.emit(this.repeats);
    console.log(this.repeats);
  }

  ngOnInit() {
  }

}
