import Base from './Base';

class CostElements extends Base {
  constructor() {
    super();
    this.displayName = 'Cost Elements';
  }

  fetchInitial() {
    this.queryAPI('/costelements', i => this.add({id: i._id, name: i.name}));
  }
}

export default CostElements;
