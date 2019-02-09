import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Table } from './table';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  tables: AngularFirestoreCollection;
  subjects: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.tables = this.db.collection('tables');
    this.subjects = this.db.collection('subjects');
  }

  getTables() {
    return this.tables.valueChanges();
  }

  getSubjects() {
    return this.subjects.valueChanges();
  }

  getTable(id: number) {
    return this.getTables().pipe(
      map((tables: Table[]) => tables.find((table) => table.id === +id))
    );
  }

  getSubject(id: number) {
    console.log(this.subjects.get().forEach((element) => element.forEach((result) => result.data())));
  }

  addSubject(subject: Subject) {
    this.subjects.add(subject);
  }
}
