import { computed, observable, asMap } from 'mobx';
import MDBase from './mdBase';
import CostCenters  from './mdCostCenters';
import CostElements from './mdCostElements';
import Clients      from './mdClients';

class MasterDataManager {

  costCenters  = new CostCenters;
  costElements = new CostElements;
  clients      = new Clients;

  hasData(mdName) {
    return this.hasOwnProperty(mdName) && this[mdName] instanceof MDBase;
  }

  list() {
    return Object.keys(this)
      .filter(i => this[i] instanceof MDBase)
      .map(i => ({name: i, displayName: this[i].displayName}));
  }

  first() {
    return Object.keys(this).find(i => this[i] instanceof MDBase);
  }
}

export default MasterDataManager;
