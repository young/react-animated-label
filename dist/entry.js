'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./react-animated-label.css');

/*eslint-disable */
var ReactCSSTransitionGroup = _react2['default'].addons.CSSTransitionGroup;
/*eslint-enable */
var AnimatedLabel = _react2['default'].createClass({
  displayName: 'AnimatedLabel',

  propTypes: {
    value: _react.PropTypes.string.isRequired
  },
  _createLabel: function _createLabel() {
    var vals = [].concat(this.props.value.split(''));
    /*eslint-disable */
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
      ReactCSSTransitionGroup,
      { className: 'animated-label medium', transitionName: 'al', component: 'span' },
      this._createLabel()
    );
  }

});

module.exports = AnimatedLabel;

