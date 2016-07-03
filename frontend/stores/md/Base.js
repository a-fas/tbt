import { observable, action } from 'mobx';
import axios from 'axios';

class Base {
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

  queryAPI(url, maper) {
    axios.get('http://localhost:8080/api/v1' + url)
      .then((response) => {
        response.data.map(maper)
        console.log(url + ': ' + this.items.map(i => i.name).join(', '));
      })
      .catch((error) => {
        console.log(error);
      });

  }
}

export default Base;
