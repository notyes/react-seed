'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/WoranopP/Documents/tencent/react_seed/hocs/withApolloClient.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _initClient = require('../apollo/initClient');

var _initClient2 = _interopRequireDefault(_initClient);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (WrappedComponent) {
  return function (_React$Component) {
    (0, _inherits3.default)(WithApolloClient, _React$Component);
    (0, _createClass3.default)(WithApolloClient, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, url;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {
                    apollo: {
                      data: {}
                    }
                  };
                  composedInitialProps = {};

                  if (!WrappedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return WrappedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 18;
                    break;
                  }

                  apollo = (0, _initClient2.default)();
                  url = { query: ctx.query, pathname: ctx.pathname };
                  _context.prev = 9;
                  _context.next = 12;
                  return (0, _reactApollo.getDataFromTree)(_react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    }
                  }, _react2.default.createElement(WrappedComponent, (0, _extends3.default)({ url: url }, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    }
                  }))));

                case 12:
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context['catch'](9);

                  console.log(_context.t0);

                case 17:

                  serverState = {
                    apollo: {
                      data: apollo.cache.extract()
                    }
                  };

                case 18:
                  return _context.abrupt('return', (0, _extends3.default)({
                    serverState: serverState
                  }, composedInitialProps));

                case 19:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[9, 14]]);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithApolloClient(props) {
      (0, _classCallCheck3.default)(this, WithApolloClient);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithApolloClient.__proto__ || (0, _getPrototypeOf2.default)(WithApolloClient)).call(this, props));

      _this.apolloClient = (0, _initClient2.default)(_this.props.serverState.apollo.data);
      return _this;
    }

    (0, _createClass3.default)(WithApolloClient, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apolloClient, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        })));
      }
    }]);
    return WithApolloClient;
  }(_react2.default.Component);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvY3Mvd2l0aEFwb2xsb0NsaWVudC5qcyJdLCJuYW1lcyI6WyJjdHgiLCJzZXJ2ZXJTdGF0ZSIsImFwb2xsbyIsImRhdGEiLCJjb21wb3NlZEluaXRpYWxQcm9wcyIsIldyYXBwZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9jZXNzIiwiYnJvd3NlciIsInVybCIsInF1ZXJ5IiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiY2FjaGUiLCJleHRyYWN0IiwicHJvcHMiLCJhcG9sbG9DbGllbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7Ozs7OztrQkFFZSw0QkFBQTtxQ0FBQTs4Q0FBQTs7V0FBQTt5QkFBQTs2R0FBQSxBQUVrQixLQUZsQjt5REFBQTt3RUFBQTtzQkFBQTsrQ0FBQTtxQkFHTDtBQUhLOzs0QkFBQSxBQUdTLEFBQ1IsQUFDQSxBQUlOO0FBTE0sQUFDTjtBQUZjLEFBQ2hCO0FBSk8seUNBQUEsQUFTa0I7O3VCQUN2QixpQkFWSyxBQVVZLGlCQVZaO29DQUFBO0FBQUE7QUFBQTs7a0NBQUE7eUJBV3NCLGlCQUFBLEFBQWlCLGdCQVh2QyxBQVdzQixBQUFpQzs7cUJBQTlEO0FBWE8sa0RBQUE7O3FCQUFBO3NCQWNKLFFBZEksQUFjSSxTQWRKO29DQUFBO0FBQUE7QUFlRDs7QUFmQywyQkFlUSxpQkFmUixBQWdCRDtBQWhCQyx3QkFnQkssRUFBRSxPQUFPLElBQVQsQUFBYSxPQUFPLFVBQVUsSUFoQm5DLEFBZ0JLLEFBQWtDO2tDQWhCdkM7a0NBQUE7MkVBb0JILDJCQUFBLGtCQUFnQixRQUFoQixBQUF3QjtnQ0FBeEI7a0NBQUEsQUFDRTtBQURGO21CQUFBLGdDQUNFLEFBQUMsMkNBQWlCLEtBQWxCLEFBQXVCLE9BQXZCLEFBQWdDOztnQ0FBaEM7a0NBckJDLEFBbUJDLEFBQ0osQUFDRTtBQUFBO0FBQUEsc0JBRkU7O3FCQW5CRDtrQ0FBQTtBQUFBOztxQkFBQTtrQ0FBQTtrREF5Qkw7OzBCQUFBLEFBQVEsYUF6Qkg7O3FCQTRCUDs7Ozs0QkFFVSxPQUFBLEFBQU8sTUE5QlYsQUE0QlAsQUFBYyxBQUNKLEFBQ0EsQUFBYTtBQURiLEFBQ047QUFGVSxBQUNaOztxQkE3Qks7O2lDQUFBO0FBb0NQLHFCQXBDTyxBQXFDSjs7cUJBckNJO3FCQUFBO2tDQUFBOztBQUFBO2lDQUFBO0FBQUE7O3FDQUFBO2tDQUFBO0FBQUE7O2VBQUE7QUFBQSxBQXlDWDtBQXpDVzs7OEJBeUNYLEFBQVksT0FBTzswQ0FBQTs7NEpBQUEsQUFDWCxBQUNOOztZQUFBLEFBQUssZUFBZSwwQkFBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFlBQVgsQUFBdUIsT0FGckMsQUFFakIsQUFBb0IsQUFBeUM7YUFDOUQ7QUE1Q1U7OztXQUFBOytCQThDRixBQUNQOytCQUNFLDJCQUFBLGtCQUFnQixRQUFRLEtBQXhCLEFBQTZCO3NCQUE3Qjt3QkFBQSxBQUNFO0FBREY7U0FBQSxnQ0FDRSxBQUFDLDZDQUFxQixLQUF0QixBQUEyQjs7c0JBQTNCO3dCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7QUFBQTtBQWpESztBQUFBO1dBQUE7SUFDa0IsZ0JBRGxCLEFBQ3dCO0EiLCJmaWxlIjoid2l0aEFwb2xsb0NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvV29yYW5vcFAvRG9jdW1lbnRzL3RlbmNlbnQvcmVhY3Rfc2VlZCJ9