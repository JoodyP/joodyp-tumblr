import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Button from 'react-md/lib/Buttons';
import ReactGA from 'react-ga';
import Link from 'gatsby-link'

import './Error404.scss';

class Error404 extends Component {  
  render() {    
    const style = { maxWidth: 600 };

    ReactGA.pageview("Error404");

    return (
        <div>
          <Card className="app-card md-block-centered">
            <CardTitle
              title="404"
              subtitle="You took a bad turn."
            />
            <CardActions>
              <div 
                className="app-card-actions"
              >
                <Link to="/">
                  <Button 
                        floating
                        secondary 
                        className="app-card-button"
                        iconClassName="fa fa-arrow-left" 
                        href="../"
                  />
                </Link>
              </div>
            </CardActions>
          </Card>
        </div>
    );
  }
}

export default Error404;