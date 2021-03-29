import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <a href="#">GuitarSrc</a>
          <img className="arrow" src="down.png" />
          <ul>
            <li>
              <a href="#">SITE LANGUAGE : ENGLISH</a>
            </li>
          </ul>
        </header>
        <div>
          <h3>Learn a Guitar for free.</h3>
          <button>GET STARTED</button>
          <Link to="/Login">
            <button>I ALREADY HAVE AN ACCOUNT</button>
          </Link>
        </div>
        <div>
          <h3>The best and easy way to learn an Instrument.</h3>
          <p>
            Dont know how to play an instrument then no need to worry. We are
            here to teach you from basic to advance. You are just one click away
            from becoming the good player.
          </p>
        </div>
        <div>
          <h3>Boost your learning with GuitarSrc Plus</h3>
          <p>
            Learning a basic Guitar on GuitarSrc is completely free, but you can
            remove ads and get some advance knowledge. Subscribe for free first
            7 days!
          </p>
        </div>
        <div>
          <h3>By downloading an App you can learn it anytime,anywhere.</h3>
          <button>Download on the App store</button>
          <button>Get it on Google Play</button>
        </div>
        <div>
          <h3>Learn a Guitar with GuitarSrc.</h3>
          <button>GET STARTED</button>
        </div>

        <div>
          <table>
            <tr>
              <th>About us</th>
              <th>Products</th>
              <th>Apps</th>
              <th>Help & support</th>
              <th>Privacy & Terms</th>
              <th>Social</th>
            </tr>
            <tr>
              <td>Courses</td>
              <td>GuitarSrc</td>
              <td>GuitarSrc for Android</td>
              <td>Discussion</td>
              <td>Community Guidlines</td>
              <td>Blog</td>
            </tr>
            <tr>
              <td>Team</td>
              <td>GuitarSrc for Schools</td>
              <td>GuitarSrc for IOS</td>
              <td>Troubleshooting</td>
              <td>Terms</td>
              <td>Facebook</td>
            </tr>
            <tr>
              <td>Careers</td>
              <td>GuitarSrc Events</td>
              <td></td>
              <td>FAQs</td>
              <td>Privacy</td>
              <td>Twitter</td>
            </tr>
            <tr>
              <td>Contact us</td>
              <td>Podcast</td>
              <td></td>
              <td></td>
              <td></td>
              <td>YouTube</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
