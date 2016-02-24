'use strict';

import React from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, IndexRoute, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Carousel from 'nuka-carousel';

require('./css/style.css');

function App(props) {
  var child = React.Children.only(props.children);
  var home = child.type === Home || child.type === KinkHome;
  var kink = child.type === Paddles || child.type === KinkGallery || child.type === KinkHome || child.type === KinkAbout;
  var scroll = child.type === Boards || child.type === Paddles;

  var styles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
  }

  return (
    <div style={styles}>
      <Header kink={kink}/>
      <Title home={home} kink={kink}/>
      <Background home={home} scroll={scroll}/>
      {props.children}
    </div>
  )
}

function KinkGallery(props) {
  var containerStyles = {
    width: '90%',
    margin: 'auto',
    marginTop: '50px',
  }

  var imgDivStyles = {
    height: '600px',
    maxWidth: '100%',
    position: 'relative',
  }

  var imgStyles = {
    maxHeight: '400px',
    maxWidth: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  }

  return (
    <div style={containerStyles}>
      <Carousel slidesToShow={3} slidesToScroll={3} cellSpacing={20} dragging={true}>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles01_med.jpg')} style={imgStyles} alt="Collection of Paddles."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles02_med.jpg')} style={imgStyles} alt="Collection of Paddles."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles03_med.jpg')} style={imgStyles} alt="Paddle made with Cocobolo, Granadillo, Maple woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles04_med.jpg')} style={imgStyles} alt="Paddle made with Lacewood, Maple, Padauk woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles05_med.jpg')} style={imgStyles} alt="Paddle made with Walnut, Bloodwood woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles_beat01_med.jpg')} style={imgStyles} alt="Beat paddle made with Paduak, Lacewood, Tiger Maple, Cocobolo woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles_beat02_med.jpg')} style={imgStyles} alt="Beat paddle made with Walnut wood."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles_beat03_med.jpg')} style={imgStyles} alt="Collection of Paddles."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles_beat04_med.jpg')} style={imgStyles} alt="Paddle made with Bloodwood & Paduak woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles_beat05_med.jpg')} style={imgStyles} alt="Paddle made with Lacewood, Maple, Bloodwood woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles_cleaver01_med.jpg')} style={imgStyles} alt="Paddle made with Cherry, Maple, Padauk, Walnut woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles_racquet01_med.jpg')} style={imgStyles} alt="Paddle made with Lacewood, Walnut, Maple, Purple Heart woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles_racquet02_med.jpg')} style={imgStyles} alt="Wide Racquet Paddle made with Walnut, Maple woods with leather wrap."/></Link></div>
        <div style={imgDivStyles}><Link to='/paddles'><img src={require('file!img/paddles_spin01_med.jpg')} style={imgStyles} alt="Spin paddle made with Walnut, Ash woods."/></Link></div>
      </Carousel>
    </div>
  )
}

function Gallery(props) {
  var containerStyles = {
    width: '90%',
    margin: 'auto',
    marginTop: '50px',
  }

  var imgDivStyles = {
    height: '600px',
    maxWidth: '100%',
    position: 'relative',
  }

  var imgStyles = {
    maxHeight: '400px',
    maxWidth: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  }

  return (
    <div style={containerStyles}>
      <Carousel slidesToShow={3} slidesToScroll={3} cellSpacing={20} dragging={true}>
        <div style={imgDivStyles}><Link to='/boards'><img src={require('file!img/cheese01.jpg')} style={imgStyles} alt="Cheese Board made with Cherry, Walnut, Maple, Padauk woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/boards'><img src={require('file!img/cheese02.jpg')} style={imgStyles} alt="Cheese Board made with Maple, Walnut, Ash woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/boards'><img src={require('file!img/cheese03.jpg')} style={imgStyles} alt="Cheese Board made with Sapele, Maple, Oak, Walnut woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/boards'><img src={require('file!img/cheese04.jpg')} style={imgStyles} alt="Cheese Board made with Walnut, Granadillo, Sapele, Maple woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/boards'><img src={require('file!img/cheese05.jpg')} style={imgStyles} alt="Cheese Board made with Walnut, Sapele, Maple woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/boards'><img src={require('file!img/chess01.jpg')} style={imgStyles} alt="Chess Board with pieces made with Lacewood, Walnut, Maple, Ash woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/boards'><img src={require('file!img/cutting01.jpg')} style={imgStyles} alt="Cutting Board made with Cherry, Ash, Walnut, Cocobolo, Padauk woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/boards'><img src={require('file!img/cutting02.jpg')} style={imgStyles} alt="Cutting Board made with Cherry, Walnut, Padauk woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/boards'><img src={require('file!img/cutting03.jpg')} style={imgStyles} alt="Cutting Board made with Walnut, Cherry woods."/></Link></div>
        <div style={imgDivStyles}><Link to='/boards'><img src={require('file!img/cutting04.jpg')} style={imgStyles} alt="Cutting Board with juice channel made with Walnut, Ash, Padauk, Cocobolo woods."/></Link></div>
      </Carousel>
    </div>
  )
}

function Home(props) {
  return <div />
}

function KinkHome(props) {
  return <div />
}

function Boards(props) {
  var containerStyles = {
    width: '80%',
    margin: 'auto',
    marginTop: '70px',
  }

  var imgStyles = {
    width: '100%',
    height: '330px',
    margin: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + require('file!img/board_header.jpg') + ')'
  }

  var txtStyles = {
    width: '90%',
    margin: 'auto',
    marginTop: '30px',
    marginBottom: '30px',
  }

  return (
    <div style={containerStyles}>
    <div style={imgStyles}/>
    <div style={txtStyles}>
    The People’s Grain line of cutting and cheese boards are perfect gifts for almost any occasion (we do not recommend bringing them to funerals), and are affordable ways to add a bit of handcrafted beauty to your kitchen or sitting room. Each board is built of local and exotic hardwoods, each identified at the time of purchase. The boards have been conditioned to be water resistant and food safe. As every board is handmade, it is impossible to perfectly copy one design to another product, but if you see something you like, <a href="mailto:thekinkstersgrain@gmail.com?Subject=Paddles" target="_top">contact us</a> and we will strive to produce something unique for you that will satisfy all your aesthetic desires.
    </div>
    </div>
  )
}

function Paddles(props) {
  var containerStyles = {
    width: '80%',
    margin: 'auto',
    marginTop: '70px',
  }

  var imgStyles = {
    width: '100%',
    height: '330px',
    margin: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + require('file!img/paddles_header_big.jpg') + ')'
  }

  var txtDivStyles = {
    width: '100%',
    margin: 'auto',
    marginTop: '10px',
    marginBottom: '70px',
    backgroundColor: '#c7bfb8',
  }

  var txtStyles = {
    width: '90%',
    margin: 'auto',
    paddingTop: '20px',
    paddingBottom: '20px',
  }

  var txtImgStyles = {
    height: '140px',
    float: 'left',
    marginTop: '40px',
    marginRight: '30px',
    marginBottom: '10px',
  }

  var pStyles = {
    clear: 'left',
    fontSize: '1.2em',
  }

  var iStyles = {
    fontSize: '1.2em',
  }

  var hStyles = {
    marginTop: '130px',
  }

  return (
    <div style={containerStyles}>
      <div style={imgStyles}/>
      <div style={txtDivStyles}>
        <div style={txtStyles}>
          <p style={pStyles}>Greetings kinksters, spankos, sadomasocists of all stripes. No more shall you be forced to endure plain, unadorned and cookie cutter implements for striking your loved or being struck by them. The People’s Grain offers a line of beautifully produced fully customizable spanking implements. Below please find a selection of previously completed products, then <a href="mailto:thekinkstersgrain@gmail.com?Subject=Paddles" target="_top">contact us</a> about how we can make you the spanking tool of your dreams!</p>
          <img src={require('file!img/paddles_beat02_med.jpg')} style={txtImgStyles}/><h2 style={hStyles}>The Beat: </h2><i style={iStyles}>Thin, strong, and stingy!</i>
          <p style={pStyles}>These paddles range from 11"-16" (with larger demands gladly met), and they bring a sharp, thin line of precious pain to your loved one. Holes can be added to increase aerodynamics, leaving precise, circular evidence of your transgression. If you have a favorite wood, a favorite color, or anything else special in mind, <a href="mailto:thekinkstersgrain@gmail.com?Subject=Paddles" target="_top">contact us</a> today to get your Beat started!</p>
          <img src={require('file!img/paddles_cleaver01_med.jpg')} style={txtImgStyles}/><h2 style={hStyles}>The Cleaver: </h2><i style={iStyles}>A wider surface area for a thud that still stings.</i>
          <p style={pStyles}>Looking to leave a larger mark? Listening for a nice, flat thud as your paddle connects? Try your hand at one of our specialized cleaver models. Each cleaver comes with a leather wrapped handle with a leash to ensure that no matter how high it gets turned up, you'll never lose a grip on your tool. The cleaver can be specialized by size, wood species, and hand wrap to meet your specifications. <a href="mailto:thekinkstersgrain@gmail.com?Subject=Paddles" target="_top">contact us</a> today to begin work on your latest impact toy.</p>
          <img src={require('file!img/paddles_spin01_med.jpg')} style={txtImgStyles}/><h2 style={hStyles}>The Spin: </h2><i style={iStyles}>Sharp looks, thudding feel.</i>
          <p style={pStyles}>Like a spinning top sent through an industrial press, The Spin provides sharper lines and angles than other models. Like The Cleaver, The Spin can hide in plain site. In-Laws coming over? Social services planning a drop-in? Hang your Spin from a wall hook and let it speak for itself. Ornate woodwork isn't just for your butt! <a href="mailto:thekinkstersgrain@gmail.com?Subject=Paddles" target="_top">contact us</a> today to order a Spin that will help you sin.</p>
          <img src={require('file!img/paddles_racquet01_med.jpg')} style={txtImgStyles}/><h2 style={hStyles}>The Racquet: </h2><i style={iStyles}>Twenty-Love.</i>
          <p style={pStyles}>Remember back to beating your bestie in the garage with a killer spin serve? Now you can beat your bestie with the handmade, hardwood Racquet line. Air holes allow for a devastatingly decisive delivery of whatever discipline you Doms deem de rigueur. <a href="mailto:thekinkstersgrain@gmail.com?Subject=Paddles" target="_top">contact us</a> today to help put a crack in your racquet.</p>
        </div>
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
    height: '225px',
    float: 'left',
    marginRight: '30px',
    marginBottom: '30px',
  }

  var txtAreaStyles = {
    width: '100%',
    height: '80%',
    paddingTop: '30px',
    paddingBottom: '30px',
    margin: 'auto',
    backgroundColor: '#c7bfb8',
  }

  var txtStyles = {
    width: '90%',
    marginLeft: '5%',
    marginTop: '30px',
    marginBottom: '30px',
  }

  var pStyles = {
    fontSize: '1.2em',
  }

  return (
    <div style={containerStyles}>
      <div style={txtAreaStyles}>
        <div style={txtStyles}>
          <img src={require('file!img/profile_big.jpg')} style={imgStyles}/>
          <p style={pStyles}>Meet Myles. He grew up in the Philadelphia and stayed in the area for college, swindling and haggling his way to a degree in Journalism from Temple University. After a year of being swaddled in suits and ties, he hit the road. 6 months living at a yoga center, another 6 goofing around San Francisco, 6 in Pittsburgh as a landscape sculptor, a handful in Vermont leading mad boys in the woods, and a smattering throwing cob buildings together in northern California. Now he has returned to build beautiful things.</p>
          <p style={pStyles}>Myles’ background in political and labor organizing in no way impact the woodwork he produces, but are interesting footnotes. Other lines that appeared on his various resumes include:</p>
          <ul>
            <li style={pStyles}>PADI Certified Divemaster</li>
            <li style={pStyles}>Vespa Salesman</li>
            <li style={pStyles}>Short Order Cook</li>
            <li style={pStyles}>Bar Mitzvah DJ</li>
            <li style={pStyles}>Amateur Meditator</li>
            <li style={pStyles}>Professional Transcriber</li>
          </ul>
          <p style={pStyles}>Every project produced by The People’s Grain has been cultivated by Myles, hand crafted from beam to board.</p>
        </div>
      </div>
    </div>
  )
}

function KinkAbout(props) {
  var containerStyles = {
    width: '80%',
    marginLeft: '10%',
    marginTop: '70px',
  }

  var imgStyles = {
    height: '225px',
    float: 'left',
    marginRight: '30px',
    marginBottom: '30px',
  }

  var txtAreaStyles = {
    width: '100%',
    height: '80%',
    paddingTop: '30px',
    paddingBottom: '30px',
    margin: 'auto',
    backgroundColor: '#c7bfb8',
  }

  var txtStyles = {
    width: '90%',
    marginLeft: '5%',
    marginTop: '30px',
    marginBottom: '30px',
  }

  var pStyles = {
    fontSize: '1.2em',
  }

  return (
    <div style={containerStyles}>
      <div style={txtAreaStyles}>
        <div style={txtStyles}>
          <img src={require('file!img/profile_big.jpg')} style={imgStyles}/>
          <p style={pStyles}>Meet Myles. He grew up in the Philadelphia and stayed in the area for college, swindling and haggling his way to a degree in Journalism from Temple University. After a year of being swaddled in suits and ties, he hit the road. 6 months living at a yoga center, another 6 goofing around San Francisco, 6 in Pittsburgh as a landscape sculptor, a handful in Vermont leading mad boys in the woods, and a smattering throwing cob buildings together in northern California. Now he has returned to build beautiful things.</p>
          <p style={pStyles}>Myles’ background in political and labor organizing in no way impact the woodwork he produces, but are interesting footnotes. Other lines that appeared on his various resumes include:</p>
          <ul>
            <li style={pStyles}>PADI Certified Divemaster</li>
            <li style={pStyles}>Vespa Salesman</li>
            <li style={pStyles}>Short Order Cook</li>
            <li style={pStyles}>Bar Mitzvah DJ</li>
            <li style={pStyles}>Amateur Meditator</li>
            <li style={pStyles}>Professional Transcriber</li>
          </ul>
          <p style={pStyles}>Every project produced by The People’s Grain has been cultivated by Myles, hand crafted from beam to board.</p>
        </div>
      </div>
    </div>
  )
}

function Background(props) {
  var position = props.scroll ? 'absolute' : 'fixed';
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
    backgroundImage: 'url(' + require('file!img/bg_big.jpg') + ')'
  };

  var notHomeStyles = {
    width: '100%',
    height: '100%',
    position: position,
    zIndex: '-1',
    top: '0',
    left: '0',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + require('file!img/bgbg_big.jpg') + ')'
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
    height: '65px',
    backgroundColor: '#160b00',
    zIndex: '9',
  }

  var navBarStyles = {
    position: 'fixed',
    top: '1.5em',
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

  var toGallery;
  var toAbout;
  var navBar;

  if (props.kink) {
      toGallery = '/gallery';
      toAbout = '/about';
      navBar = <div style={navBarStyles}>
        <span style={navItemStyles}>
          <Link to='/' style={linkStyles}>The People's Grain</Link>
        </span>|
        <span style={navItemStyles}>
          <Link to={toGallery} style={linkStyles}>Gallery</Link>
        </span>|
        <span style={navItemStyles}>
          <Link to={toAbout} style={linkStyles}>About</Link>
        </span>
      </div>;
  } else {
      toGallery = '/normgallery';
      toAbout = '/normabout';
      navBar = <div style={navBarStyles}>
        <span style={navItemStyles}>
          <Link to={toGallery} style={linkStyles}>Gallery</Link>
        </span>|
        <span style={navItemStyles}>
          <Link to={toAbout} style={linkStyles}>About</Link>
        </span>
      </div>;
  }

  return (
    <div style={headerStyles}>
      {navBar}
    </div>
  )
}
Header.defaultProps = {kink: false}

function Title(props) {
  var key = props.home ? 'home': 'nothome';
  var className = key;
  var linkTo = props.home ? props.kink ? '/gallery' : '/normgallery' : props.kink ? '/' : '/home';

  var titleStyles;
  if (props.home) {
    titleStyles = {
      position: 'fixed',
      top: '50%',
      transform: 'translateY(-50%)',
      left: 'calc(50% - 300px)',
      width: '50%',
      zIndex: '10',
    }
  } else {
    titleStyles = {
      position: 'fixed',
      top: '.5em',
      left: '.5em',
      width: '15%',
      zIndex: '10',
    };
  }

  var logo;
  if (props.kink) {
    logo = require('file!img/logo_kink.png')
  } else {
    logo = require('file!img/logo.png')
  }

  return (
    <Link to={linkTo}>
      <ReactCSSTransitionGroup
        transitionName='title'
        transitionEnterTimeout={2500}
        transitionLeaveTimeout={200}
      >
        <img src={logo} key={key} className={className} style={titleStyles}/>
      </ReactCSSTransitionGroup>
    </Link>
  )
}
Title.defaultProps = {home: true};

render((
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App}>
      <IndexRoute component={KinkHome}/>
      <Route path='gallery' component={KinkGallery}/>
      <Route path='about' component={KinkAbout}/>
      <Route path='paddles' component={Paddles}/>
      <Route path='home' component={Home}/>
      <Route path='normabout' component={About}/>
      <Route path='normgallery' component={Gallery}/>
      <Route path='boards' component={Boards}/>
    </Route>
  </Router>
), document.getElementById('layout'));
