import { observable, action } from 'mobx';
import MDBase from './mdBase';

class CostCenters extends MDBase {
  constructor() {
    super();
    this.displayName = 'Cost Centers';
  }

  fetchInitial() {
    ['Admin', 'Sales', 'Project 1', 'Project 2', 'Project 3']
    .map((val, idx)=>this.add({id: idx + 1, name: val}));
  }
}

export default CostCenters;
