'use strict';

import React from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, IndexRoute, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Slider from 'react-slick';

require('./css/style.css');
require('./css/slick.css');

function App(props) {
  var child = React.Children.only(props.children);
  var home = child.type === Home;
  var scroll = child.type !== Home && child.type !== Gallery;

  var styles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
  }

  return (
    <div style={styles}>
      <Header/>
      <Title home={home}/>
      <Background home={home}/>
      {props.children}
    </div>
  )
}

function Home(props) {
  return <div />
}

function Gallery(props) {
  var containerStyles = {
    width: '90%',
    margin: 'auto',
    marginTop: '50px',
  }

  var imgStyles = {
    height: '400px',
  }

  return (
    <div style={containerStyles}>
    <Slider dots={true} slidesToShow={3} slidesToScroll={3}>
      <Link to='/boards'><img src={require('file!img/cheeseboard01.jpg')} style={imgStyles}/></Link>
      <Link to='/boards'><img src={require('file!img/cheeseboard02.jpg')} style={imgStyles}/></Link>
      <Link to='/boards'><img src={require('file!img/cheeseboard03.jpg')} style={imgStyles}/></Link>
      <Link to='/boards'><img src={require('file!img/cheeseboard04.jpg')} style={imgStyles}/></Link>
      <Link to='/boards'><img src={require('file!img/cheeseboard05.jpg')} style={imgStyles}/></Link>
      <Link to='/boards'><img src={require('file!img/cheeseboard06.jpg')} style={imgStyles}/></Link>
      <Link to='/boards'><img src={require('file!img/cheeseboard07.jpg')} style={imgStyles}/></Link>
      <Link to='/boards'><img src={require('file!img/cheeseboard08.jpg')} style={imgStyles}/></Link>
      <Link to='/boards'><img src={require('file!img/cheeseboard09.jpg')} style={imgStyles}/></Link>
      <Link to='/boards'><img src={require('file!img/cheeseboard10.jpg')} style={imgStyles}/></Link>
    </Slider>
    </div>
  )
}

function Boards(props) {
  var containerStyles = {
    width: '80%',
    marginLeft: '10%',
    marginTop: '70px',
  }

  var imgStyles = {
    width: '100%',
    height: '100px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + require('file!img/cheeseboard03.jpg') + ')'
  }

  var txtStyles = {
    width: '90%',
    marginLeft: '5%',
    marginTop: '30px',
    marginBottom: '30px',
  }

  return (
    <div style={containerStyles}>
    <div style={imgStyles}/>
    <div style={txtStyles}>
    The People’s Grain line of cutting and cheese boards are perfect gifts for almost any occasion (we do not recommend bringing them to funerals), and are affordable ways to add a bit of handcrafted beauty to your kitchen or sitting room. Each board is built of local and exotic hardwoods, each identified at the time of purchase. The boards have been conditioned to be water resistant and food safe. As every board is handmade, it is impossible to perfectly copy one design to another product, but if you see something you like, contact us and we will strive to produce something unique for you that will satisfy all your aesthetic desires.
    </div>
    </div>
  )
}

function About(props) {
  var containerStyles = {
    width: '80%',
    marginLeft: '10%',
    marginTop: '70px',
  }

  var imgStyles = {
    width: '100%',
  }

  var txtAreaStyles = {
    width: '100%',
    paddingTop: '30px',
    paddingBottom: '30px',
    marginBottom: '30px',
    backgroundColor: 'white',
  }

  var txtStyles = {
    width: '90%',
    marginLeft: '5%',
    marginTop: '30px',
    marginBottom: '30px',
    backgroundColor: 'white',
  }

  return (
    <div style={containerStyles}>
    <img src={require('file!img/profile.jpg')} style={imgStyles}/>
    <div style={txtAreaStyles}>
    <div style={txtStyles}>
    Meet Myles. After spending a few years on the road, sampling the loveliest experiences that California, Colorado, Vermont, and Massachusetts had to offer, he was returned to his hometown to build beautiful things. Myles’ background in political and labor organizing in no way impact the woodwork he produces, but are interesting footnotes. Every project produced by The People’s Grain has been cultivated by Myles, hand crafted from beam to board.
    </div>
    </div>
    </div>
  )
}

function Background(props) {
  var key = props.home ? 'home': 'nothome';
  var className = key;

  var homeStyles = {
    opacity: '1',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: '8',
    top: '0',
    left: '0',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + require('file!img/bg.jpg') + ')'
  };

  var notHomeStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '-1',
    top: '0',
    left: '0',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + require('file!img/bgbg.jpg') + ')'
  };

  var bgDiv;
  if (props.home) {
    bgDiv = <div className={className} key={key} style={homeStyles}/>;
  } else {
    bgDiv = <div className={className} key={key} style={notHomeStyles}/>;
  }

  return (
    <ReactCSSTransitionGroup
      transitionName='background'
      transitionEnterTimeout={2500}
      transitionLeaveTimeout={2500}
    >
      {bgDiv}
    </ReactCSSTransitionGroup>
  )
}
Background.defaultProps = {home: true, scroll: false};

function Header(props) {
  var headerStyles = {
    position: 'fixed',
    width: '100%',
    height: '35px',
    backgroundColor: '#160b00',
    zIndex: '9',
  }

  var navBarStyles = {
    position: 'fixed',
    top: '.5em',
    right: '0',
    color: 'white',
    zIndex: '10',
  };

  var navItemStyles = {
    padding: '0 .5em',
  };

  var linkStyles = {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'weston',
  };

  return (
    <div style={headerStyles}>
      <div style={navBarStyles}>
        <span style={navItemStyles}>
          <Link to='/gallery' style={linkStyles}>
            Gallery
          </Link>
        </span>
        |
        <span style={navItemStyles}>
          <Link to='/about' style={linkStyles}>
            About
          </Link>
        </span>
      </div>
    </div>
  )
}

function Title(props) {
  var key = props.home ? 'home': 'nothome';
  var className = key;
  var linkTo = props.home ? '/gallery' : '/';

  var titleStyles;
  if (props.home) {
    titleStyles = {
      position: 'fixed',
      left: 'calc(50% - 300px)',
      top: 'calc(50% - 30px)',
      width: '600px',
      zIndex: '10',
    }
  } else {
    titleStyles = {
      position: 'fixed',
      top: '.5em',
      left: '.5em',
      width: '200px',
      zIndex: '10',
    };
  }

  return (
    <Link to={linkTo}>
      <ReactCSSTransitionGroup
        transitionName='title'
        transitionEnterTimeout={2500}
        transitionLeaveTimeout={200}
      >
        <img src={require('file!img/logo.jpg')} key={key} className={className} style={titleStyles}/>
      </ReactCSSTransitionGroup>
    </Link>
  )
}
Title.defaultProps = {home: true};

render((
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='gallery' component={Gallery}/>
      <Route path='about' component={About}/>
      <Route path='boards' component={Boards}/>
    </Route>
  </Router>
), document.getElementById('layout'));
