'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/WoranopP/Documents/tencent/react_seed/src/components/layouts/Header.js';
exports.default = Header;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('../../../src/routes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Header(_ref) {
  var categories = _ref.categories;

  return _react2.default.createElement('div', { id: 'header', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { id: 'logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('img', { src: '../../../static/images/logo.jpeg', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), _react2.default.createElement('div', { id: 'menu2', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_routes.Link, { route: 'home', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Home'))), categories.map(function (val) {
    return _react2.default.createElement('li', { key: val.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, _react2.default.createElement(_routes.Link, { route: 'category', params: { id: val.id }, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, val.name)));
  }))), _react2.default.createElement('div', { className: 'clear', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2xheW91dHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImNhdGVnb3JpZXMiLCJtYXAiLCJ2YWwiLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFHd0IsQTs7QUFIeEI7Ozs7QUFDQTs7Ozs7O0FBRWUsU0FBQSxBQUFTLGFBQXVCO01BQWQsQUFBYyxrQkFBZCxBQUFjLEFBQzdDOzt5QkFDRSxjQUFBLFNBQUssSUFBTCxBQUFRO2dCQUFSO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUEsU0FBSyxJQUFMLEFBQVE7Z0JBQVI7a0JBQUEsQUFDRTtBQURGOzRDQUNPLEtBQUwsQUFBUztnQkFBVDtrQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFO3VCQUVGLGNBQUEsU0FBSyxJQUFMLEFBQVE7Z0JBQVI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLHNCQUFBLFFBQU0sT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FITixBQUNFLEFBQ0UsQUFDRSxBQUdILHNCQUFBLEFBQVcsSUFBSSxVQUFBLEFBQVMsS0FBSyxBQUM1QjsyQkFDRSxjQUFBLFFBQUksS0FBSyxJQUFULEFBQWE7a0JBQWI7b0JBQUEsQUFDRTtBQURGO0tBQUEsa0JBQ0Usc0JBQUEsUUFBTSxPQUFOLEFBQVksWUFBVyxRQUFRLEVBQUUsSUFBSSxJQUFyQyxBQUErQixBQUFVO2tCQUF6QztvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQTs7a0JBQUE7b0JBQUEsQUFBSTtBQUFKO0FBQUEsV0FITixBQUNFLEFBQ0UsQUFDRSxBQUFRLEFBSWY7QUFuQlAsQUFJRSxBQUNFLEFBTUcsQUFXTCwrQ0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBdkJKLEFBQ0UsQUFzQkUsQUFHTDtBQUhLIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvV29yYW5vcFAvRG9jdW1lbnRzL3RlbmNlbnQvcmVhY3Rfc2VlZCJ9