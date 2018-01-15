'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/WoranopP/Documents/tencent/react_seed/src/components/itemList.js';
exports.default = Item;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('../routes');

var _starRating = require('./starRating');

var _starRating2 = _interopRequireDefault(_starRating);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Item(_ref) {
  var dataItem = _ref.dataItem;
  var id = dataItem.id,
      name = dataItem.name,
      price = dataItem.price,
      images = dataItem.images,
      avgRating = dataItem.avgRating;

  return _react2.default.createElement('div', { className: 'column1', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_routes.Link, { route: 'detail', params: { id: id }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, name)), _react2.default.createElement('img', { className: 'imgItem', src: '/static/images/menus/' + images, alt: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('div', { className: 'columnText', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Rating : \xA0', _react2.default.createElement(_starRating2.default, { avgRating: avgRating, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), _react2.default.createElement('div', { className: 'columnLink', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'THB ', price, _react2.default.createElement('span', { className: 'order', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, '| ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Order Now'))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2l0ZW1MaXN0LmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJkYXRhSXRlbSIsImlkIiwibmFtZSIsInByaWNlIiwiaW1hZ2VzIiwiYXZnUmF0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBSXdCLEE7O0FBSnhCOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBQSxBQUFTLFdBQW1CO01BQVosQUFBWSxnQkFBWixBQUFZO01BQUEsQUFDakMsS0FEaUMsQUFDTSxTQUROLEFBQ2pDO01BRGlDLEFBQzdCLE9BRDZCLEFBQ00sU0FETixBQUM3QjtNQUQ2QixBQUN2QixRQUR1QixBQUNNLFNBRE4sQUFDdkI7TUFEdUIsQUFDaEIsU0FEZ0IsQUFDTSxTQUROLEFBQ2hCO01BRGdCLEFBQ1IsWUFEUSxBQUNNLFNBRE4sQUFDUixBQUNqQzs7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxzQkFBQSxRQUFNLE9BQU4sQUFBWSxVQUFTLFFBQVEsRUFBRSxJQUEvQixBQUE2QixBQUFNO2dCQUFuQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSztBQUFMO0FBQUEsS0FGSixBQUNFLEFBQ0UsQUFFRiwrQ0FBSyxXQUFMLEFBQWUsV0FBVSwrQkFBekIsQUFBc0QsUUFBVSxLQUFoRSxBQUFvRTtnQkFBcEU7a0JBSkYsQUFJRSxBQUNBO0FBREE7c0JBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQTtBQUFBO0tBRUUsdUVBQVksV0FBWixBQUF1QjtnQkFBdkI7a0JBUEosQUFLRSxBQUVFLEFBRUY7QUFGRTt1QkFFRixjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBO0FBQUE7S0FDTyxRQURQLEFBRUUsdUJBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBO0FBQUE7S0FDSSxzQkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRO2dCQUFSO2tCQUFBO0FBQUE7S0FiVixBQUNFLEFBU0UsQUFFRSxBQUNJLEFBS1giLCJmaWxlIjoiaXRlbUxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1dvcmFub3BQL0RvY3VtZW50cy90ZW5jZW50L3JlYWN0X3NlZWQifQ==