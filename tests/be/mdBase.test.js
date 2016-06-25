import { assert } from 'chai';
import MDBase from '../../src/stores/mdBase';

describe('MDBase class', () => {
  it('Add an item', () => {
    let o = new MDBase;
    assert.equal(o.items.length, 0);
    o.add({id: 1, name: 'Hello world'});
    assert.equal(o.items.length, 1);
  });

  it('Add item w/o id', () => {
    let o = new MDBase;
    assert.throws( o.add.bind(o, {name: 'Hello world'}),
                  '[MDBase] add: id or name missing' );
  });

  it('Add item w/o name', () => {
    let o = new MDBase;
    assert.throws( o.add.bind(o, {id: 1}),
                  '[MDBase] add: id or name missing' );
  });

});
