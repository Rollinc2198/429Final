import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/profile-pic.jpg'
import library from '../assets/images/library2.png'
import gw2 from '../assets/images/gw2.png'
import maze from '../assets/images/maze.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="429 Final Project" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Welcome!</h2>
                </header>
                <p>I am a Computer Science major from <a href="https://www.clarkson.edu">Clarkson University</a>. I have experience in a variety of languages, including Java, Python, and C++. I prefer Python for my small personal projects, but I tend to reach for other languages if I'm making anything large-scale!</p>
                <ul className="actions">
                  <li><Link to="/resume" className="button">My Resume</Link></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>My Projects</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image"><img src={library} alt="" /></span>
                <h3>COSI Library</h3>
                <p>I helped build a fully functioning library interface for the COSI lab here at Clarkson. You can visit it at <a href="https://library.cosi.clarkson.edu">https://library.cosi.clarkson.edu</a></p>
              </li>
              <li>
              <span className="image"><img src={gw2} alt="" /></span>
                <h3>Guild Wars 2 MIDI to Harp</h3>
                <p>Using MIT's <a href="https://web.mit.edu/music21/">Music21 library</a>, I built a Python script to play music in the online MMO <a href="https://www.guildwars2.com/en/">Guild Wars 2</a>. You can find the code on my Github page!</p>
              </li>
              <li>
              <span className="image"><img src={maze} alt="" /></span>
                <h3>Maze Bot</h3>
                <p>When I was just a wee freshman, I implemented Dijkstra's algorithm to have a bot solve a maze made by anyone!</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><a href="https://github.com/Rollinc2198" className="button">My Github</a></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>My Blogs</h2>
              <p>Here's a link to my blog site for my 429 blogs.</p>
            </header>
            <section id="third">
              <footer className="major">
                <ul className="actions">
                  <li><a href="https://429-full-scale-app.surge.sh/" className="button">My Blog</a></li>
                </ul>
              </footer>
            </section>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
