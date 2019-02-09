import { Subject } from './subject';


export class Table {
  constructor(
    public id: number,
    public subjects: Subject[]
  ) { }
}
