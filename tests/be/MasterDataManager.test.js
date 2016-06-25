import { assert } from 'chai';
import MasterDataManager from '../../src/stores/MasterDataManager';

describe('MasterDataManager class', () => {
  it('Has costcenters', () => {
    let o = new MasterDataManager;
    assert.isTrue(o.hasData('costcenters'));
  });

  it('Has unknown master data', () => {
    let o = new MasterDataManager;
    assert.isFalse(o.hasData('zzzz'));
  });

});
