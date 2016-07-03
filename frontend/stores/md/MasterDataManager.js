import { computed, observable, asMap } from 'mobx';
import Base         from './Base';
import CostCenters  from './CostCenters';
import CostElements from './CostElements';
import Clients      from './Clients';

class MasterDataManager {

  costCenters  = new CostCenters;
  costElements = new CostElements;
  clients      = new Clients;

  hasData(mdName) {
    return this.hasOwnProperty(mdName) && this[mdName] instanceof Base;
  }

  list() {
    return Object.keys(this)
      .filter(i => this[i] instanceof Base)
      .map(i => ({name: i, displayName: this[i].displayName}));
  }

  first() {
    return Object.keys(this).find(i => this[i] instanceof Base);
  }
}

export default MasterDataManager;
