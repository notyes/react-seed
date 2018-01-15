'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = '/Users/WoranopP/Documents/tencent/react_seed/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query {\n    MenusList {\n      name\n      price\n      images\n      id\n      avgRating\n    }\n  }\n'], ['\n  query {\n    MenusList {\n      name\n      price\n      images\n      id\n      avgRating\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withLayout = require('../hocs/withLayout');

var _withLayout2 = _interopRequireDefault(_withLayout);

var _withApolloClient = require('../hocs/withApolloClient');

var _withApolloClient2 = _interopRequireDefault(_withApolloClient);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _recompose = require('recompose');

var _itemList = require('../src/components/itemList');

var _itemList2 = _interopRequireDefault(_itemList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function HomePage(_ref) {
  var data = _ref.data;
  var MenusList = data.MenusList,
      loading = data.loading;

  if (loading == true) {
    return null;
  }
  return _react2.default.createElement('div', { className: 'bottom_container', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('div', { id: 'container2', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('div', { className: 'welCome', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'WELCOME TO OUR FOOD ')), _react2.default.createElement('div', { className: 'welCome', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('div', { id: 'columZone', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, MenusList.map(function (item) {
    return _react2.default.createElement(_itemList2.default, { dataItem: item, key: item.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    });
  }), _react2.default.createElement('div', { className: 'clear', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })))), _react2.default.createElement('div', { className: 'welCometextBox2', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, 'ORDER')));
}
var QUERY_POSTS = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _recompose.compose)(_withApolloClient2.default, _withLayout2.default, (0, _reactApollo.graphql)(QUERY_POSTS))(HomePage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiZGF0YSIsIk1lbnVzTGlzdCIsImxvYWRpbmciLCJtYXAiLCJpdGVtIiwiaWQiLCJRVUVSWV9QT1NUUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLFNBQUEsQUFBUyxlQUFtQjtNQUFSLEFBQVEsWUFBUixBQUFRO01BQUEsQUFDbEIsWUFEa0IsQUFDSyxLQURMLEFBQ2xCO01BRGtCLEFBQ1AsVUFETyxBQUNLLEtBREwsQUFDUCxBQUVuQjs7TUFBSSxXQUFKLEFBQWUsTUFBTSxBQUNuQjtXQUFBLEFBQU8sQUFDUjtBQUNEO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsY0FBQSxTQUFLLElBQUwsQUFBUTtnQkFBUjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkosQUFDRSxBQUNFLEFBR0YsMENBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLElBQUwsQUFBUTtnQkFBUjtrQkFBQSxBQUNHO0FBREg7ZUFDRyxBQUFVLElBQUksVUFBQSxBQUFTLE1BQU0sQUFDNUI7K0RBQWEsVUFBTixBQUFnQixNQUFNLEtBQUssS0FBM0IsQUFBZ0M7a0JBQWhDO29CQUFQLEFBQU8sQUFDUjtBQURRO0tBQUE7QUFGWCxBQUNHLEFBR0QsNkNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQVhSLEFBQ0UsQUFLRSxBQUNFLEFBSUUsQUFLTjtBQUxNO3lCQUtOLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQWxCTixBQUNFLEFBZ0JFLEFBQ0UsQUFJUDs7QUFDRCxJQUFNLHdDQUFOOztrQkFZZSwwRUFBc0MsMEJBQXRDLEFBQXNDLEFBQVEsY0FBOUMsQUFDYixBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Xb3Jhbm9wUC9Eb2N1bWVudHMvdGVuY2VudC9yZWFjdF9zZWVkIn0=