import React, { Component } from 'react';
import { CameraCaptureWrapper } from './CameraCapture.js';
import { Tabs, Tab } from 'material-ui/Tabs';

export class OmniscentEyes extends Component {

  constructor( props ){
    super( props );

    this.state = {
      activeTabIndex: 1,
    }

    this.setTabIndex = this.setTabIndex.bind( this );
    this.setTabStyle = this.setTabStyle.bind( this );
  }

  setTabIndex( newIndex ) {
    this.setState( { activeTabIndex: newIndex  } );
  }

  setTabStyle( tabIndex ) {
    if ( this.state.activeTabIndex === tabIndex ) {
      return { backgroundColor: '#AAAAAA'};
    }
    return { backgroundColor: 'black' };
  }

  render() {
    return (
      <div>
        <Tabs>
          <Tab
            onActive={ ( value ) =>
              this.setTabIndex( value )
            }
            label='Take Picture'
            >
            <CameraCaptureWrapper />
          </Tab>
          <Tab
            onActive={ ( value ) =>
              this.setTabIndex( value )
            }
            label='Upload Picture'>
            <CameraCaptureWrapper />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
