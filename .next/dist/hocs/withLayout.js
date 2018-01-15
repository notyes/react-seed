'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _jsxFileName = '/Users/WoranopP/Documents/tencent/react_seed/hocs/withLayout.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MainLayout = require('../src/components/layouts/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (WrappedComponent) {
  return function (_React$Component) {
    (0, _inherits3.default)(WithLayout, _React$Component);

    function WithLayout() {
      (0, _classCallCheck3.default)(this, WithLayout);
      return (0, _possibleConstructorReturn3.default)(this, (WithLayout.__proto__ || (0, _getPrototypeOf2.default)(WithLayout)).apply(this, arguments));
    }

    (0, _createClass3.default)(WithLayout, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_MainLayout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        })));
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
          var composedInitialProps;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  composedInitialProps = {};

                  if (!WrappedComponent.getInitialProps) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return WrappedComponent.getInitialProps(ctx);

                case 4:
                  composedInitialProps = _context.sent;

                case 5:
                  return _context.abrupt('return', composedInitialProps);

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);
    return WithLayout;
  }(_react2.default.Component);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvY3Mvd2l0aExheW91dC5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImN0eCIsImNvbXBvc2VkSW5pdGlhbFByb3BzIiwiV3JhcHBlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O2tCQUVlLDRCQUFBO3FDQUFBO3dDQUFBOzswQkFBQTswQ0FBQTs0SUFBQTtBQUFBOzs7V0FBQTsrQkFTRixBQUNQOytCQUNFLDJCQUFBOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGdDQUNFLEFBQUMsNkNBQXFCLEtBQXRCLEFBQTJCOztzQkFBM0I7d0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISztBQUFBO0FBWks7QUFBQTtXQUFBO3lCQUFBOzZHQUFBLEFBRWtCLEtBRmxCO2NBQUE7d0VBQUE7c0JBQUE7K0NBQUE7cUJBR0w7QUFISyx5Q0FBQSxBQUdrQjs7dUJBQ3ZCLGlCQUpLLEFBSVksaUJBSlo7b0NBQUE7QUFBQTtBQUFBOztrQ0FBQTt5QkFLc0IsaUJBQUEsQUFBaUIsZ0JBTHZDLEFBS3NCLEFBQWlDOztxQkFBOUQ7QUFMTyxrREFBQTs7cUJBQUE7bURBQUEsQUFPRjs7cUJBUEU7cUJBQUE7a0NBQUE7O0FBQUE7c0JBQUE7QUFBQTs7cUNBQUE7a0NBQUE7QUFBQTs7ZUFBQTtBQUFBO0FBQUE7V0FBQTtJQUNZLGdCQURaLEFBQ2tCO0EiLCJmaWxlIjoid2l0aExheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvV29yYW5vcFAvRG9jdW1lbnRzL3RlbmNlbnQvcmVhY3Rfc2VlZCJ9