import React, { PropTypes } from 'react';
import './react-animated-label.less';

/*eslint-disable */
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
/*eslint-enable */
const AnimatedLabel = React.createClass({
  propTypes: {
    value: PropTypes.string.isRequired
  },
  /**
   * Create the animated label component
   * @return {React.element} The label element
   */
  _createLabel: function() {
    // Split the input into individual characters
    const vals = [].concat(this.props.value.split(''));
    /*eslint-disable */
    return vals.map((item, index) => {
      return (
        <div className='animated-digit' key={index}>
          <ul className='wrapper' data-position={item}>
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>.</li>
            <li>,</li>
            <li>$</li>
            <li>:</li>
          </ul>
        </div>
      );
    });
    /*eslint-enable */
  },
  render: function() {
    return (
      <ReactCSSTransitionGroup className='animated-label medium' transitionName='ral' component="span">
        {this._createLabel()}
      </ReactCSSTransitionGroup>
    );
  }

});

module.exports = AnimatedLabel;
