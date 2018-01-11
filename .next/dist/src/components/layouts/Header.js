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

  return _react2.default.createElement('div', { id: 'undefined-sticky-wrapper', className: 'sticky-wrapper', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('div', { className: 'navbar-collapse collapse', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('ul', { className: 'nav navbar-nav', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('li', { className: 'active', __source: {
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
  }, 'Home'))), categories.CategoryList.map(function (val) {
    return _react2.default.createElement('li', { key: val.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement(_routes.Link, { route: 'detail', params: { id: val.id }, __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, val.name)));
  })))))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2xheW91dHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImNhdGVnb3JpZXMiLCJDYXRlZ29yeUxpc3QiLCJtYXAiLCJ2YWwiLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFHd0IsQTs7QUFIeEI7Ozs7QUFDQTs7Ozs7O0FBRWUsU0FBQSxBQUFTLGFBQXVCO01BQWQsQUFBYyxrQkFBZCxBQUFjLEFBQzdDOzt5QkFDRSxjQUFBLFNBQUssSUFBTCxBQUFRLDRCQUEyQixXQUFuQyxBQUE2QztnQkFBN0M7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztnQkFBZDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztnQkFBZDtrQkFBQSxBQUNFO0FBREY7cUJBQ0Usc0JBQUEsUUFBTSxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUhOLEFBQ0UsQUFDRSxBQUNFLEFBSUgsc0JBQUEsQUFBVyxhQUFYLEFBQXdCLElBQUksVUFBQSxBQUFTLEtBQUssQUFDekM7MkJBQ0UsY0FBQSxRQUFJLEtBQUssSUFBVCxBQUFhO2tCQUFiO29CQUFBLEFBQ0U7QUFERjtLQUFBLGtCQUNFLHNCQUFBLFFBQU0sT0FBTixBQUFZLFVBQVMsUUFBUSxFQUFFLElBQUksSUFBbkMsQUFBNkIsQUFBVTtrQkFBdkM7b0JBQUEsQUFDRTtBQURGO3VCQUNFLGNBQUE7O2tCQUFBO29CQUFBLEFBQUk7QUFBSjtBQUFBLFdBSE4sQUFDRSxBQUNFLEFBQ0UsQUFBUSxBQUlmO0FBckJmLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBT0csQUFnQmhCIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvV29yYW5vcFAvRG9jdW1lbnRzL3RlbmNlbnQvcmVhY3Rfc2VlZCJ9