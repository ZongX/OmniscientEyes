import React, { Component } from 'react';
import { HomePage } from './HomePage.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { push as Menu } from 'react-burger-menu';
import './App.css';
import './NavLayout.css';
import welcomeBackground from '../images/space.jpg';
import { OmniscentEyes } from '../Components/OmniscentEyes.js';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      isHome: true,
      isLoggedIn: false,
    }

    this.beginApplication = this.beginApplication.bind( this );
    this.setLoggedIn = this.setLoggedIn.bind( this );
  }

  beginApplication() {
    this.setState( {
      isHome: false,
    } );
  }

  setLoggedIn( loginState ) {
    this.setState( {
      isLoggedIn: loginState,
    } );
  }

  showSettings ( event ) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App" style={ { backgroundImage: `url( ${ welcomeBackground } )` } } >
        <Menu style={ { overflow: 'hidden' } }>
          <a id='home' className='menu-item' href='/'>Home</a>
          {
            ( this.state.isLoggedIn ) ?
            <a id='savedImages' className='menu-item' href='/savedImages'>Saved Images</a> :
            <a id='login' className='menu-item' href='/login'>Login/Signup</a>
          }
        </Menu>
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
