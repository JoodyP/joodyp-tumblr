import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Button from 'react-md/lib/Buttons';
import Media from 'react-md/lib/Media/Media';
import MediaOverlay from 'react-md/lib/Media/MediaOverlay';
import ReactGA from 'react-ga';

import './App.scss';

class App extends Component {

  render() {
    const urlTwitter = "https://twitter.com/itsminijo";
    const urlLinkedIn = "https://www.linkedin.com/in/jonathanlacasse";
    const urlMail = "mailto:mail@jonathanlacasse.com";
    const imgGravatar = "https://s.gravatar.com/avatar/7e471557114b9ee19c80e224baae96a7?s=1000";

    const Btn_OnClicked = (strAction) => (
      ReactGA.event({
        category: 'Navigation',
        action: strAction
      })
    )

    ReactGA.pageview("App");

    return (
        <div>
          <Card className="app-card md-block-centered">
          <Media 
            aspectRatio="1-1"
          >
            <img src={imgGravatar} alt="Jonathan Lacasse" />
            <MediaOverlay>
              <CardTitle title="Jonathan Lacasse" >
              </CardTitle>
            </MediaOverlay>
          </Media>
            <CardActions>
              <div 
                className="app-card-actions"
              >
                <Button 
                  floating 
                  secondary 
                  className="app-card-button"
                  iconClassName="fa fa-twitter" 
                  onClick={function() {Btn_OnClicked('Twitter')}}
                  href={urlTwitter} 
                />
                <Button 
                  floating 
                  secondary 
                  className="app-card-button"
                  iconClassName="fa fa-linkedin" 
                  onClick={function() {Btn_OnClicked('LinkedIn')}}
                  href={urlLinkedIn} 
                />
                <Button 
                  floating
                  secondary 
                  className="app-card-button"
                  iconClassName="fa fa-envelope" 
                  onClick={function() {Btn_OnClicked('Email')}}
                  href={urlMail}
                />
              </div>
            </CardActions>
          </Card>
        </div>
    );
  }
}

export default App;