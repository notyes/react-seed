'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/WoranopP/Documents/tencent/react_seed/pages/detail.js?entry';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('../src/routes');

var _withLayout = require('../hocs/withLayout');

var _withLayout2 = _interopRequireDefault(_withLayout);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function DetailPage() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Detail', _react2.default.createElement(_routes.Link, { route: 'home', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'home')));
}

var DetailPageContainer = function (_React$Component) {
  (0, _inherits3.default)(DetailPageContainer, _React$Component);

  function DetailPageContainer() {
    (0, _classCallCheck3.default)(this, DetailPageContainer);
    return (0, _possibleConstructorReturn3.default)(this, (DetailPageContainer.__proto__ || (0, _getPrototypeOf2.default)(DetailPageContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(DetailPageContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(DetailPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(context) {
      console.log(context.query.id);
    }
  }]);
  return DetailPageContainer;
}(_react2.default.Component);

exports.default = (0, _withLayout2.default)(DetailPageContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWxQYWdlIiwiRGV0YWlsUGFnZUNvbnRhaW5lciIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJpZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBQSxBQUFTLGFBQWEsQUFDcEI7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEdBQUEsRUFFRSwwQkFBQSxzQkFBQSxRQUFNLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSk4sQUFDRSxBQUVFLEFBQ0UsQUFJUDs7O0ksQUFDSzs7Ozs7Ozs7Ozs2QkFJSyxBQUNQOzJDQUFPLEFBQUM7O29CQUFEO3NCQUFQLEFBQU8sQUFDUjtBQURRO0FBQUEsT0FBQTs7OztvQ0FKYyxBLFNBQVMsQUFDOUI7Y0FBQSxBQUFRLElBQUksUUFBQSxBQUFRLE1BQXBCLEFBQTBCLEFBQzNCOzs7O0VBSCtCLGdCQUFNLEE7O2tCQVF6QiwwQkFBQSxBQUFXLEEiLCJmaWxlIjoiZGV0YWlsLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Xb3Jhbm9wUC9Eb2N1bWVudHMvdGVuY2VudC9yZWFjdF9zZWVkIn0=