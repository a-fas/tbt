import { observable, action } from 'mobx';
import Base from './Base';

class CostCenters extends Base {
  constructor() {
    super();
    this.displayName = 'Cost Centers';
  }

  fetchInitial() {
    this.queryAPI('/costcenters', i => this.add({id: i._id, name: i.name}));
  }
}

export default CostCenters;
