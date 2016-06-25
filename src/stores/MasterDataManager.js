import { computed, observable, asMap } from 'mobx';
import MDBase from './mdBase';
import CostCenters from './mdCostCenters';
import CostElements from './mdCostElements';

class MasterDataManager {

  costcenters = new CostCenters;
  costelements = new CostElements;

  hasData(mdName) {
    return this.hasOwnProperty(mdName) && this[mdName] instanceof MDBase;
  }
}

export default MasterDataManager;
