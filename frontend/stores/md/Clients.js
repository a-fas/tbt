import Base from './Base';

class Clients extends Base {
  constructor() {
    super();
    this.displayName = 'Clients';
  }

  fetchInitial() {
    this.queryAPI('/clients', i => this.add({id: i._id, name: i.name}));
  }
}

export default Clients;
