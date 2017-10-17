import React, { Component } from 'react';
import Helmet from 'react-helmet'
import Toolbar from 'react-md/lib/Toolbars';
import WebFontLoader from 'webfontloader';

class AppHeader extends Component {
  
  componentDidMount = () => {        
    WebFontLoader.load({
      google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
      },
      custom: {
        families: ['FontAwesome']
      }
    });
  }

  
  render() {

    const Header = () => (
      <div>      
        <Toolbar
          colored
          prominent
          zDepth={3}
          title="Mini Jo"
        />
      </div>
    )

    return (
      <div>
        <Helmet
        title="Mini Jo"
        script={[{src:'https://use.fontawesome.com/48e046d2ef.js'}]}
        meta={[
          { name: "description", content: "Jonathan Lacasse" },
          { name: "keywords", content: "Mini Jo, Jonathan Lacasse" },
        ]}
      />

      <Header />
    </div>
    );

  }
}

export default AppHeader;