'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddons = require('react/addons');

var AnimatedLabel = _react2['default'].createClass({
  displayName: 'AnimatedLabel',

  propTypes: {
    value: _react.PropTypes.string.isRequired
  },
  /**
   * Create the animated label component
   * @return {React.element} The label element
   */
  _createLabel: function _createLabel() {
    // Split the input into individual characters
    var vals = [].concat(this.props.value.split(''));
    /*eslint-disable */
    // For each character, create a list element containing all possible characters
    return vals.map(function (item, index) {
      return _react2['default'].createElement(
        'div',
        { className: 'animated-digit', key: index },
        _react2['default'].createElement(
          'ul',
          { className: 'wrapper', 'data-position': item },
          _react2['default'].createElement(
            'li',
            null,
            '0'
          ),
          _react2['default'].createElement(
            'li',
            null,
            '1'
          ),
          _react2['default'].createElement(
            'li',
            null,
            '2'
          ),
          _react2['default'].createElement(
            'li',
            null,
            '3'
          ),
          _react2['default'].createElement(
            'li',
            null,
            '4'
          ),
          _react2['default'].createElement(
            'li',
            null,
            '5'
          ),
          _react2['default'].createElement(
            'li',
            null,
            '6'
          ),
          _react2['default'].createElement(
            'li',
            null,
            '7'
          ),
          _react2['default'].createElement(
            'li',
            null,
            '8'
          ),
          _react2['default'].createElement(
            'li',
            null,
            '9'
          ),
          _react2['default'].createElement(
            'li',
            null,
            '.'
          ),
          _react2['default'].createElement(
            'li',
            null,
            ','
          ),
          _react2['default'].createElement(
            'li',
            null,
            '$'
          ),
          _react2['default'].createElement(
            'li',
            null,
            ':'
          )
        )
      );
    });
    /*eslint-enable */
  },
  render: function render() {
    return _react2['default'].createElement(
      _reactAddons.ReactCSSTransitionGroup,
      { className: 'animated-label medium', transitionName: 'ral', component: 'span' },
      this._createLabel()
    );
  }

});

exports['default'] = AnimatedLabel;
module.exports = exports['default'];
