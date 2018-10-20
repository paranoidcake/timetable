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
  @Input() repeats: string;
  @Output() repeat = new EventEmitter<string>();

  constructor() {

  }

  onClick() {
    if(this.repeats == "true"){
      this.repeats = "false";
      this.repeat.emit("f~" + this.time + "~" + this.day);
    } else {
      this.repeats = "true";
      this.repeat.emit("t~" + this.time + "~" + this.day);
    }
  }

  ngOnInit() {
  }

}
