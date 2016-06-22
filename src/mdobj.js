import { observable } from 'mobx';

export default class MasterData {
  @observable mdlist = [];

  add(item) {
    this.mdlist.push(item);
  }
  
  log() {
    console.log(this.constructor.name);
    this.mdlist.map(item => console.log(item.id + ': ' + item.name));
  }
}

export class CostCenters extends MasterData {
  constructor() {
    super();
    ['Admin', 'Sales', 'Project 1', 'Project 2', 'Project 3']
    .map((val, idx)=>this.add({id: idx, name: val}));

    this.log();
  }
}

export class CostElements extends MasterData {
  constructor() {
    super();
    ['Salary', 'Rent', 'Office', 'Consulting', 'Dividends']
    .map((val, idx)=>this.add({id: idx, name: val}));
  }
}

