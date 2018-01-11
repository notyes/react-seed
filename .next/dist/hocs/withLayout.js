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

var _jsxFileName = '/Users/WoranopP/Documents/tencent/react_seed/hocs/withLayout.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MainLayout = require('../src/components/layouts/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

var _fetchGQL = require('../utils/fetchGQL');

var _fetchGQL2 = _interopRequireDefault(_fetchGQL);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (WrappedComponent) {
  return function (_React$Component) {
    (0, _inherits3.default)(WithLayout, _React$Component);
    (0, _createClass3.default)(WithLayout, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
          var composedInitialProps, query, categories;
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
                  return WrappedComponent.getInitialProps(context);

                case 4:
                  composedInitialProps = _context.sent;

                case 5:
                  query = 'query{\n        CategoryList {\n          id\n          name\n        }\n      }';
                  _context.next = 8;
                  return (0, _fetchGQL2.default)(query);

                case 8:
                  categories = _context.sent;
                  return _context.abrupt('return', (0, _extends3.default)({
                    categories: categories
                  }, composedInitialProps));

                case 10:
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

    function WithLayout(props) {
      (0, _classCallCheck3.default)(this, WithLayout);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithLayout.__proto__ || (0, _getPrototypeOf2.default)(WithLayout)).call(this, props));

      _this.categories = _this.props.categories.data;
      return _this;
    }

    (0, _createClass3.default)(WithLayout, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_MainLayout2.default, { categories: this.categories, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        })));
      }
    }]);
    return WithLayout;
  }(_react2.default.Component);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvY3Mvd2l0aExheW91dC5qcyJdLCJuYW1lcyI6WyJjb250ZXh0IiwiY29tcG9zZWRJbml0aWFsUHJvcHMiLCJXcmFwcGVkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjYXRlZ29yaWVzIiwicHJvcHMiLCJkYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztrQkFFZSw0QkFBQTtxQ0FBQTt3Q0FBQTs7V0FBQTt5QkFBQTs2R0FBQSxBQUVrQixTQUZsQjsyQ0FBQTt3RUFBQTtzQkFBQTsrQ0FBQTtxQkFHTDtBQUhLLHlDQUFBLEFBR2tCOzt1QkFDdkIsaUJBSkssQUFJWSxpQkFKWjtvQ0FBQTtBQUFBO0FBQUE7O2tDQUFBO3lCQUtzQixpQkFBQSxBQUFpQixnQkFMdkMsQUFLc0IsQUFBaUM7O3FCQUE5RDtBQUxPLGtEQUFBOztxQkFPTDtBQVBLLDBCQUFBO2tDQUFBO3lCQWFnQix3QkFiaEIsQUFhZ0IsQUFBUzs7cUJBQTVCO0FBYkcsd0NBQUE7O2dDQUFBO0FBZ0JQLHFCQWhCTyxBQWlCSjs7cUJBakJJO3FCQUFBO2tDQUFBOztBQUFBO3NCQUFBO0FBQUE7O3FDQUFBO2tDQUFBO0FBQUE7O2VBQUE7QUFBQSxBQW9CWDtBQXBCVzs7d0JBb0JYLEFBQVksT0FBTzswQ0FBQTs7Z0pBQUEsQUFDWCxBQUNOOztZQUFBLEFBQUssYUFBYSxNQUFBLEFBQUssTUFBTCxBQUFXLFdBRlosQUFFakIsQUFBd0M7YUFDekM7QUF2QlU7OztXQUFBOytCQXdCRixBQUNQOytCQUNFLDJCQUFBLFdBQVksWUFBWSxLQUF4QixBQUE2QjtzQkFBN0I7d0JBQUEsQUFDRTtBQURGO1NBQUEsZ0NBQ0UsQUFBQyw2Q0FBcUIsS0FBdEIsQUFBMkI7O3NCQUEzQjt3QkFGSixBQUNFLEFBQ0UsQUFHTDtBQUhLO0FBQUE7QUEzQks7QUFBQTtXQUFBO0lBQ1ksZ0JBRFosQUFDa0I7QSIsImZpbGUiOiJ3aXRoTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Xb3Jhbm9wUC9Eb2N1bWVudHMvdGVuY2VudC9yZWFjdF9zZWVkIn0=