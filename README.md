# React Animated Label

An animated label component for React.js

Demo is [here](http://young.github.io/react-animated-label/)

## Installation

``` sh
npm install react-animated-label --save-dev
```

## Usage

``` javascript
import React from 'react';
import AnimatedLabel from 'react-animated-label';

React.createClass({
  render: function() {
    return (
    	<AnimatedLabel value={this.props.yourValue} />
    );
  }

});

```

Inspired by Chartbeat's [cb-animated-label](https://github.com/chartbeat-labs/chartbeat-angular/tree/master/src/components/cb-animated-label)
