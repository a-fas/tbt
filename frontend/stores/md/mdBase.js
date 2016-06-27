import { observable, action } from 'mobx';

class MDBase {
  displayName       = '';
  @observable items = [];

  constructor() {
    this.fetchInitial();
  }

  @action add(item) {
    if (!item.id || !item.name) {
      throw '[MDBase] add: id or name missing';
    }

    this.items.push(item);
  }

  log() {
    console.log(this.constructor.name);
    this.items.map(i => console.log(i.id + ': ' + i.name));
  }

  fetchInitial() {
    // implement in subclasses
  }
}

export default MDBase;
