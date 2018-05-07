import React, { Component } from 'react';

import Example1 from './examples/ErrorHandling';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="EGH_React16.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Leverage New Features of React 16</h1>
        </header>
        <p className="App-intro">
          Please select the example to see:
        </p>
        <ul className="list-topics">
          <li><a href="/example/1">Error Handling using Error Boundaries in React 16</a></li>
          <li><a href="/example/2">Render Multiple Elements without a Wrapping Element in a Component in React 16</a></li>
          <li><a href="/example/3">Render Text Only Components in React 16</a></li>
          <li><a href="/example/4">Render Elements Outside the Current React Tree using Portals in React 16</a></li>
          <li><a href="/example/5">Define DOM Attributes in React 16</a></li>
          <li><a href="/example/6">Call setState with null to Avoid Triggering an Update in React 16</a></li>
          <li><a href="/example/7">Render Multiple Elements using React.Fragment and the JSX Fragment Syntax !== in React 16.2</a></li>
          <li><a href="/example/8">Create a DOM reference using createRef in React 16.3</a></li>
          <li><a href="/example/9">Forward a DOM reference to another Component using forwardRef in React 16.3</a></li>
          <li><a href="/example/10">Update State Based on Props using the Lifecycle Hook getDerivedStateFromProps in React 16.3</a></li>
          <li><a href="/example/11">Capture values using the lifecycle hook getSnapshotBeforeUpdate in React 16.3</a></li>
          <li><a href="/example/12">Pass Data through a Component Tree using Context Providers and Consumers in React 16.3</a></li>
        </ul>
      </div>
    );
  }
}

export default App;
