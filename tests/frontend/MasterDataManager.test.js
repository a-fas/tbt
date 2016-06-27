import { assert } from 'chai';
import MasterDataManager from '../../frontend/stores/md/MasterDataManager';

describe('MasterDataManager class', () => {
  it('Has costcenters', () => {
    let o = new MasterDataManager;
    assert.isTrue(o.hasData('costCenters'));
  });

  it('First()', () => {
    let o = new MasterDataManager;
    assert.equal(o.first(), 'costCenters');
  });

  it('Has unknown master data', () => {
    let o = new MasterDataManager;
    assert.isFalse(o.hasData('zzzz'));
  });

});
