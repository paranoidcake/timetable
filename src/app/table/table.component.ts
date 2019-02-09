import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from '../table';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TableService } from '../table.service';
import { switchMap } from 'rxjs/operators';
import { State } from '../state';
import { Subject } from '../subject';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  table$: Observable<Table>;
  subjects$: Observable<Subject[]>;
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

  constructor (
    private route: ActivatedRoute,
    private service: TableService,
    private db: AngularFirestore
  ) {
    // for (let i = 0; i < 11; i++) {
    //   for (let j = 0; j < 5; j++) {
    //     this.subjects.push(new Subject('' + i, '' + j, 'blue', i, this.times[i], j, 'false'));
    //   }
    // }
  }

  ngOnInit() {
    this.table$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.service.getTable(+params.get('id')))
    );
    // this.subjects$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //   this.service.getSubject(+params.get('id')))
    // )
    this.service.getSubject(0);
  }

  onRepeat (state: State) {
    const pos = 5 * state.time + state.day;
    if (state.state === true) { // Enable repeat
      this.subjects[pos].repeat = 'repeat';
      this.subjects[pos + 5].repeat = 'hasrepeat';
    } else {                    // Disable repeat
      this.subjects[pos].repeat = '';
      this.subjects[pos + 5].repeat = '';
    }
  }
}
