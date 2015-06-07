'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = React;

var _react2 = _interopRequireDefault(_react);

var _reactAddons = React.addons;

var AnimatedLabel = _react2['default'].createClass({
  displayName: 'AnimatedLabel',

  getInitialState: function() {
    this._startRandomNumberGenerator();
    return {
      value: '0.00'
    };
  },
  _startRandomNumberGenerator: function() {
    setInterval(function() {
      var rand = (Math.random() * 1000).toFixed(2);
      this.setState({value: rand});
    }.bind(this), 1500);
  },
  /**
   * Create the animated label component
   * @return {React.element} The label element
   */
  _createLabel: function _createLabel() {
    // Split the input into individual characters
    var vals = [].concat(this.state.value.split(''));
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
      _reactAddons.CSSTransitionGroup,
      { className: 'animated-label medium', transitionName: 'ral', component: 'span' },
      this._createLabel()
    );
  }

});
