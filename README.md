# React Animated Label

An animated label component for React.js

Demo is [here](http://young.github.io/react-animated-label/)

## Installation

``` sh
npm install react-animated-label --save-dev
```

## Usage
#### Webpack
``` javascript
import React from 'react';
import AnimatedLabel from 'react-animated-label';
// Import the CSS
import 'node_modules/react-animated-label/lib/react-animated-label.css';

React.createClass({
  render: function() {
    return (
    	<AnimatedLabel value={this.props.yourValue} />
    );
  }

});
```

#### Non-webpack
``` javascript
var React = require('react');
var AnimatedLabel = require('react-animated-label');

React.createClass({
  render: function() {
    return (
    	<AnimatedLabel value={this.props.yourValue} />
    );
  }

});
```

## Note
You must include the CSS for this component to work.
Use either webpack (`import 'node_modules/react-animated-label/lib/react-animated-label.css';`)
or directly include the stylesheet in your page (`<link rel="stylesheet" type="text/css" href="node_modules/react-animated-label/lib/react-animated-label.css">`)



Inspired by Chartbeat's [cb-animated-label](https://github.com/chartbeat-labs/chartbeat-angular/tree/master/src/components/cb-animated-label)
