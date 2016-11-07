import React, { Component } from 'react';
import {Link} from 'react-router';

class Examples extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
          </li>
          <li>
            <Link to='/?location=Rio'>Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    );
  }
}

export default Examples;
