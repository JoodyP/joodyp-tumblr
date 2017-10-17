import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Button from 'react-md/lib/Buttons';
import ReactGA from 'react-ga';

import './Error404.scss';

class Error404 extends Component {  
  render() {    
    const style = { maxWidth: 600 };

    ReactGA.pageview("Error404");

    return (
        <div>
          <Card style={style} className="md-block-centered">
            <CardTitle
              title="404"
              subtitle="You took a bad turn."
              /*avatar={<Avatar src={avatar} role="presentation" />}*/
            />
          </Card>
        </div>
    );
  }
}

export default Error404;