import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Nav from '../components/Nav'

class Resume extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Resume" />
        <Nav />
        <div id="main">
          <section id="content" className="main">
            <h1>Carter Rollins</h1>
            <p>
              (603) 568-7852<br></br>croll2198@gmail.com<br></br>github.com/Rollinc2198
            </p>
            <h2>Education</h2>
            <p>
              Bachelor of Science in <b>Computer Science</b> 2016-2020<br></br><b>Clarkson University</b>, Potsdam, NY<br></br>GPA:<b> 3.279</b>
            </p>
            <h2>Technical Skills</h2>
            <p>
                <b>Programming Languages:</b> C++, Java, Python, C, C#, HTML, Javascript, XML, CSS, Haskell, Cypher, WebGL<br></br><b>Technical Knowledge:</b> Linux, Bash, Vim, Android Studio, Unity, Microsoft Windows, AutoCAD
            </p>
            <h2>Professional Experience</h2>
            <p>
                <b>Clarkson Open Source Institute</b> (2016 - 2020)
                <ul>
                    <li>Assisted other members of COSI in Computer Science related projects</li>
                    <li>Presented a program that I wrote in Python that navigated itself through a Maze (see Personal Projects)</li>
                    <li>Created a library system to help keep track of lent out books</li>
                </ul>
                <b>Booz Allen Hamilton</b> (Summer 2019)
                <ul>
                    <li>Participated in Summer Games Internship program with 5 other interns</li>
                    <li>Worked in Python to utilize the Tensorflow library</li>
                    <li>Extensively used AutoCAD to design 3D models to be 3D printed</li>
                    <li>Utilized an SDR to detect WiFi signal</li>
                </ul>
            </p>
            <h2>Hackathons</h2>
            <p>
                <b>Hack Potsdam 2</b> (Spring 2017)
                <ul>
                    <li>Gained experience programming real-world physics in a 3D environment</li>
                    <li>Project manager and developer</li>
                </ul>
                <b>Hack Upstate 10</b> (Fall 2017)
                <ul>
                    <li>Led and managed the development of an Android App</li>
                    <li>Created the client side of a client-server interaction within Android</li>
                </ul>
            </p>
            <h2>Personal Projects</h2>
            <p>
                <b>Maze Bot</b> (Spring 2017)
                <ul>
                    <li>Implemented Dijkstra’s algorithm in Python to have an entity solve an arbitrary maze provided and created by the user</li>
                    <li>Created a graphical UI from scratch using Pygame</li>
                </ul>
                <b>COSI Library</b> (2018 - 2020)
                <ul>
                    <li>Collaborated on a large-scale web application for COSI to track their collection of books</li>
                    <li>Implemented database queries using Cypher along with the Fast CGI HTTP server module</li>
                </ul>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Resume
