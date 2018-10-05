import { Component } from '@angular/core';
import { Subject } from './subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timetable';
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  /*times = [new Time('9:00 - 9:40', [new Subject("test", "test", "grey"), new Subject("test", "test", "pink"), new Subject("test", "test", "violet"), new Subject("test", "test", "blue"), new Subject("test", "test", "green")]),
    new Time('9:40 - 10:20', [new Subject("test2", "test", "grey"), new Subject("test2", "test", "pink"), new Subject("test2", "test", "violet"), new Subject("test2", "test", "blue"), new Subject("test2", "test", "green")]),
    new Time('10:20 - 11:00', [new Subject("test3", "test", "grey"), new Subject("test3", "test", "pink"), new Subject("test3", "test", "violet"), new Subject("test3", "test", "blue"), new Subject("test3", "test", "green")]),
    new Time('11:00 - 11:40', [new Subject("test4", "test", "grey"), new Subject("test4", "test", "pink"), new Subject("test4", "test", "violet"), new Subject("test4", "test", "blue"), new Subject("test4", "test", "green")]),
    new Time('11:40 - 11:55', [new Subject("test5", "test", "grey"), new Subject("test5", "test", "pink"), new Subject("test5", "test", "violet"), new Subject("test5", "test", "blue"), new Subject("test5", "test", "green")]),
    new Time('12:35 - 13:15', []),
    new Time('13:15 - 14:00', []),
    new Time('14:00 - 14:40', []),
    new Time('14:40 - 15:20', []),
    new Time('15:20 - 16:00', [])];*/
    times = ['9:00 - 9:40', 
            '9:40 - 10:20', 
            '10:20 - 11:00', 
            '11:00 - 11:40', 
            '11:40 - 11:55', 
            '11:55 - 12:35', 
            '12:35 - 13:15', 
            '13:15 - 14:00', 
            '14:00 - 14:40', 
            '14:40 - 15:20', 
            '15:20 - 16:00'];
    subjects = [];

    constructor () {
      for (let i = 0; i < 11; i++) {
        for(let j=0; j<5; j++){
          this.subjects.push(new Subject("Subject / Time"+i, "Room", "blue", this.times[i]));
        }
      }
    }

    onRepeat (repeat: boolean) {
      repeat ? console.log("yes") : console.log("no");
    }

    // Dead system (subjects: Subjects[])
    
  /*onCreateSubject (subject: string, room: string) {
    this.createSubject(subject.trim(), room.trim(), this.color);
    console.log("onCreateSubject: " + subject + " " + room);
  }

  createSubject (subject: string, room: string, color: string) {
    if(subject && room && color){
      this.subjects.push(new Subject(subject, room, color));
    }
    console.log(this.subjects);
  }

  colors = ["blue", "orange", "green", "purple", "violet", "pink", "lilac", "grey"];
  onChange (value){
    this.color = value;
    console.log(this.color);
  }

  saveAs64 () {
    this.out = ""
    this.subjects.forEach(element => {
      this.out += element.title + "." + element.room + "." + element.color + ".";
    });
    this.out = btoa(this.out);
  }

  loadFrom64 (input) {
    if(this.subjects.length == 0){
      var ayy = atob(input).split(".")
      for (let i = 0; i < ayy.length; i += 3) {
        this.subjects.push(new Subject(ayy[i], ayy[i+1], ayy[i+2]))
      }
    }
    console.log(this.subjects)
  }

  clear() {
    this.subjects = []
    this.out = ""
  }*/
}
