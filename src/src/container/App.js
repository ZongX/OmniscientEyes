import React, { Component } from 'react';
import { HomePage } from './HomePage.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';
import welcomeBackground from '../images/space.jpg';
import { OmniscentEyes } from '../Components/OmniscentEyes.js';

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
          <div>
            <ReactCSSTransitionGroup
              transitionName='globefade'
              transitionEnterTimeout={ 500 }
              transitionLeaveTimeout={ 500 }
              >
              { ( this.state.isHome ) ?
                <HomePage
                  beginApplication = { this.beginApplication }
                /> :
                null
              }
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
              transitionName='slideComponentIn'
              transitionEnterTimeout={ 2000 }
              transitionLeaveTimeout={ 2000 }
            >
              { ( !this.state.isHome )?
                <OmniscentEyes /> :
                null
              }
            </ReactCSSTransitionGroup>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
