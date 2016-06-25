import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { Link, IndexLink } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// const contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default class Main extends Component {
  render() {
    // console.log(this);

    // var currentRoutes = this.context.router.getCurrentRoutes();
    // var lastRoute = currentRoutes[currentRoutes.length - 1];
    // console.log(currentRoutes, lastRoute, lastRoute.name);
    //
    // var activeRouteName = currentRoutes[currentRoutes.length - 1].name;
    // console.log(activeRouteName);

    return (
      <div>
        <h1>Hello from Main</h1>
        {/*<Link*/}

        <IndexLink activeStyle={{ color: 'red' }} to="/">Home</IndexLink>
        <Link activeStyle={{ color: 'red' }} to="/about">About</Link>
        <Link activeStyle={{ color: 'red' }} to="/md">Master data</Link>

        {/*<Navbar>
          <Navbar.Header>
            <Navbar.Brand>NAV</Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
            <NavItem eventKey={3} href="#">Master data</NavItem>
          </Nav>
        </Navbar>*/}



        {this.props.children}
        <DevTools />
      </div>
    );
  }
}

// Main.contextTypes = contextTypes;
