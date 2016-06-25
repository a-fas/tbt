import MDBase from './mdBase';

class Clients extends MDBase {
  constructor() {
    super();
    this.displayName = 'Clients';
  }

  fetchInitial() {
    ['Vasya', 'Petya', 'Grisha']
    .map((val, idx)=>this.add({id: idx + 1, name: val}));
  }
}

export default Clients;
