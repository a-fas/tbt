import MDBase from './mdBase';

class CostElements extends MDBase {
  constructor() {
    super();
    this.displayName = 'Cost Elements';
  }

  fetchInitial() {
    ['Salary', 'Rent', 'Office', 'Consulting', 'Dividends']
    .map((val, idx)=>this.add({id: idx + 1, name: val}));
  }
}

export default CostElements;
