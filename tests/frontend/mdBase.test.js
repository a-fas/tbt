import { assert } from 'chai';
import Base from '../../frontend/stores/md/Base';

describe('Base class', () => {
  it('Add an item', () => {
    let o = new Base;
    assert.equal(o.items.length, 0);
    o.add({id: 1, name: 'Hello world'});
    assert.equal(o.items.length, 1);
  });

  it('Add item w/o id', () => {
    let o = new Base;
    assert.throws( o.add.bind(o, {name: 'Hello world'}),
                  '[MDBase] add: id or name missing' );
  });

  it('Add item w/o name', () => {
    let o = new Base;
    assert.throws( o.add.bind(o, {id: 1}),
                  '[MDBase] add: id or name missing' );
  });

});
