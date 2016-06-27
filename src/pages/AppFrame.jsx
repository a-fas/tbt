import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { Link, IndexLink } from 'react-router';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import LogoIcon from '../assets/abacus-icon.png';

// const contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default class Main extends Component {
  render() {
    return (
      <Grid>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={LogoIcon} style={{padding: '9px'}} />
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/md">
              <NavItem eventKey={2}>Master data</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
            <NavItem eventKey={3}>About</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>

        <Row>
          {this.props.children}
        </Row>

        <DevTools />
      </Grid>
    );
  }
}

// Main.contextTypes = contextTypes;
