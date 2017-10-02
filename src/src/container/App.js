import React, { Component } from 'react';
import { HomePage } from './HomePage.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TransitionGroup from 'react-addons-transition-group';
import './App.css';
import welcomeBackground from '../images/space.jpg';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      isHome: true,
    }

    this.beginApplication = this.beginApplication.bind( this );
  }

  beginApplication() {
    this.setState( {
      isHome: false,
    } );
  }

  render() {
    return (
      <div className="App" style={ { backgroundImage: `url( ${ welcomeBackground } )` } } >
        <MuiThemeProvider>
          <TransitionGroup
            >
            { ( this.state.isHome ) ?
              <HomePage
                beginApplication = { this.beginApplication }
              /> :
              null
            }
          </TransitionGroup>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
