'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = '/Users/WoranopP/Documents/tencent/react_seed/src/components/layouts/MainLayout.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query {\n    CategoryList {\n      id\n      name\n    }\n  }\n'], ['\n  query {\n    CategoryList {\n      id\n      name\n    }\n  }\n']);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Layout(_ref) {
  var children = _ref.children,
      data = _ref.data;
  var CategoryList = data.CategoryList,
      loading = data.loading;

  if (loading) {
    return null;
  }
  return _react2.default.createElement('div', { className: 'wrapper', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_Header2.default, { categories: CategoryList, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('main', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, children), _react2.default.createElement(_style2.default, {
    styleId: _styles2.default.__hash,
    css: _styles2.default
  }));
}

var QUERY_POSTS = (0, _graphqlTag2.default)(_templateObject);
exports.default = (0, _reactApollo.graphql)(QUERY_POSTS)(Layout);
// export default Layout
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2xheW91dHMvTWFpbkxheW91dC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsImRhdGEiLCJDYXRlZ29yeUxpc3QiLCJsb2FkaW5nIiwiUVVFUllfUE9TVFMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7OztBQUVBLFNBQUEsQUFBUyxhQUEyQjtNQUFsQixBQUFrQixnQkFBbEIsQUFBa0I7TUFBUixBQUFRLFlBQVIsQUFBUTtNQUFBLEFBQzFCLGVBRDBCLEFBQ0EsS0FEQSxBQUMxQjtNQUQwQixBQUNaLFVBRFksQUFDQSxLQURBLEFBQ1osQUFDdEI7O01BQUEsQUFBSSxTQUFTLEFBQ1g7V0FBQSxBQUFPLEFBQ1I7QUFDRDt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtHQUFBLG9EQUNVLFlBQVIsQUFBb0I7Z0JBQXBCO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQU87QUFBUDtBQUFBLEtBRkYsQUFFRTs4QkFGRjtrQkFERixBQUNFLEFBU0g7QUFURzs7O0FBV0osSUFBTSx3Q0FBTjtrQkFRZSwwQkFBQSxBQUFRLGFBQVIsQUFBcUIsQTtBQUNwQyIsImZpbGUiOiJNYWluTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Xb3Jhbm9wUC9Eb2N1bWVudHMvdGVuY2VudC9yZWFjdF9zZWVkIn0=