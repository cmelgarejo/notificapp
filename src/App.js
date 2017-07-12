import React, { Component } from 'react'
import { Button, ButtonGroup, ButtonToolbar, Glyphicon, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import ArtworkComments from './components/ArtworkComments'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Notificapp, mate</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <ButtonToolbar style={{ margin: 10 }}>
                <ButtonGroup>
                  <Button>
                    <Glyphicon glyph="envelope" />
                    &nbsp;Share Proof
                  </Button>
                  <Button>
                    <Glyphicon glyph="minus" />
                  </Button>
                  <Button>
                    150%
                  </Button>
                  <Button>
                    <Glyphicon glyph="plus" />
                  </Button>
                  <ArtworkComments/>
                </ButtonGroup>
              </ButtonToolbar>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default App
