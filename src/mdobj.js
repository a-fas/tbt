import { observable } from 'mobx';


export class MasterData {
  list = [];
  constructor() {
  }

  add(item) {
    this.list.push(item);
  }
}

export class CostCenters extends MasterData {
  constructor() {
    super();
    ['Admin', 'Sales', 'Project 1', 'Project 2', 'Project 3']
    .map((val, idx)=>this.list.push({id: idx, name: val}))
    console.log(this.list);
  }
}

export class CostElements extends MasterData {
  constructor() {
    super();
    ['Salary', 'Rent', 'Office', 'Consulting', 'Dividends']
    .map((val, idx)=>this.list.push({id: idx, name: val}))
  }
}

export default MasterData;
