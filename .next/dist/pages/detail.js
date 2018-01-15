'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = '/Users/WoranopP/Documents/tencent/react_seed/pages/detail.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query($menu_id: Int!) {\n    MenuDetail(menu_id: $menu_id) {\n      id\n      name\n      images\n      rating {\n        one\n        two\n        three\n        four\n        five\n      }\n      price\n      avgRating\n      comments {\n        id\n        body\n      }\n    }\n  }\n'], ['\n  query($menu_id: Int!) {\n    MenuDetail(menu_id: $menu_id) {\n      id\n      name\n      images\n      rating {\n        one\n        two\n        three\n        four\n        five\n      }\n      price\n      avgRating\n      comments {\n        id\n        body\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('../src/routes');

var _withLayout = require('../hocs/withLayout');

var _withLayout2 = _interopRequireDefault(_withLayout);

var _recompose = require('recompose');

var _withApolloClient = require('../hocs/withApolloClient');

var _withApolloClient2 = _interopRequireDefault(_withApolloClient);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function DetailPage(_ref) {
  var data = _ref.data;
  var MenuDetail = data.MenuDetail,
      loading = data.loading;

  if (loading) {
    return null;
  }

  var name = MenuDetail.name,
      avgRating = MenuDetail.avgRating,
      comments = MenuDetail.comments,
      images = MenuDetail.images,
      price = MenuDetail.price;

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
  }, name)), _react2.default.createElement('div', { className: 'welCome', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('div', { id: 'columZone', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('div', { className: 'aboutcolumn1', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('img', {
    src: '/static/images/menus/' + images,
    alt: '',
    className: 'abouticon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }))), _react2.default.createElement('div', { className: 'aboutcolumn2', __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, ', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', _react2.default.createElement('div', { className: 'insidereadmore', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, '.....')), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, 'Price : ', price)))), _react2.default.createElement('div', { className: 'clear', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  })))), _react2.default.createElement('div', { className: 'welCometextBox2', __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, 'Review'), _react2.default.createElement('div', { className: 'Commentslist', __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement(ListReviews, { comments: comments, __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }))));
}
function ListReviews(_ref2) {
  var comments = _ref2.comments;

  return _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, comments.map(function (comment) {
    return _react2.default.createElement('li', { key: comment.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    }, comment.body);
  }));
}
var QUERY_POSTS = (0, _graphqlTag2.default)(_templateObject);
exports.default = (0, _recompose.compose)(_withApolloClient2.default, _withLayout2.default, (0, _reactApollo.graphql)(QUERY_POSTS, {
  options: function options(_ref3) {
    var id = _ref3.url.query.id;
    return {
      variables: {
        menu_id: id
      }
    };
  }
}))(DetailPage);
// export default compose(withApolloClient, withLayout)(DetailPage)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWxQYWdlIiwiZGF0YSIsIk1lbnVEZXRhaWwiLCJsb2FkaW5nIiwibmFtZSIsImF2Z1JhdGluZyIsImNvbW1lbnRzIiwiaW1hZ2VzIiwicHJpY2UiLCJMaXN0UmV2aWV3cyIsIm1hcCIsImNvbW1lbnQiLCJpZCIsImJvZHkiLCJRVUVSWV9QT1NUUyIsIm9wdGlvbnMiLCJ1cmwiLCJxdWVyeSIsInZhcmlhYmxlcyIsIm1lbnVfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBQSxBQUFTLGlCQUFxQjtNQUFSLEFBQVEsWUFBUixBQUFRO01BQUEsQUFDcEIsYUFEb0IsQUFDSSxLQURKLEFBQ3BCO01BRG9CLEFBQ1IsVUFEUSxBQUNJLEtBREosQUFDUixBQUNwQjs7TUFBQSxBQUFJLFNBQVMsQUFDWDtXQUFBLEFBQU8sQUFDUjtBQUoyQjs7TUFBQSxBQU1wQixPQU5vQixBQU15QixXQU56QixBQU1wQjtNQU5vQixBQU1kLFlBTmMsQUFNeUIsV0FOekIsQUFNZDtNQU5jLEFBTUgsV0FORyxBQU15QixXQU56QixBQU1IO01BTkcsQUFNTyxTQU5QLEFBTXlCLFdBTnpCLEFBTU87TUFOUCxBQU1lLFFBTmYsQUFNeUIsV0FOekIsQUFNZSxBQUMzQzs7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxjQUFBLFNBQUssSUFBTCxBQUFRO2dCQUFSO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFLO0FBQUw7QUFBQSxLQUZKLEFBQ0UsQUFDRSxBQUdGLHdCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxJQUFMLEFBQVE7Z0JBQVI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBO21DQUNFLEFBQytCLEFBQzdCO1NBRkYsQUFFTSxBQUNKO2VBSEYsQUFHWTs7Z0JBSFo7a0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFPSjtBQVBJO0FBQ0Usd0JBTU4sY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBR2lCOztnQkFBQTtrQkFIakIsQUFHaUIsQUFDZjtBQURlO0FBQUE7O2dCQUNmO2tCQUpGLEFBSUU7QUFBQTtBQUFBLE1BYUEsK3dCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVE7Z0JBQVI7a0JBQUE7QUFBQTtLQWxCSixBQWlCRSxBQUNFLEFBRUYsMkJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQWUsWUFoQ3ZCLEFBVUUsQUFDRSxBQW9CRSxBQUNFLEFBSU4sa0RBQUssV0FBTCxBQUFlO2dCQUFmO2tCQTNDUixBQUNFLEFBS0UsQUFDRSxBQW9DRSxBQUtOO0FBTE07eUJBS04sY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDJCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO21DQUNFLEFBQUMsZUFBWSxVQUFiLEFBQXVCO2dCQUF2QjtrQkFwRFIsQUFDRSxBQWdERSxBQUVFLEFBQ0UsQUFLVDtBQUxTOzs7QUFNVixTQUFBLEFBQVMsbUJBQTBCO01BQVosQUFBWSxpQkFBWixBQUFZLEFBQ2pDOzt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLFdBQ0csQUFBUyxJQUFJLFVBQUEsQUFBUyxTQUFTLEFBQzlCOzJCQUFPLGNBQUEsUUFBSSxLQUFLLFFBQVQsQUFBaUI7a0JBQWpCO29CQUFBLEFBQXNCO0FBQXRCO0tBQUEsVUFBUCxBQUFPLEFBQThCLEFBQ3RDO0FBSkwsQUFDRSxBQUNHLEFBS047O0FBQ0QsSUFBTSx3Q0FBTjtzSEF5QkUsQUFBUTtXQUNHLHdCQUFBO1FBQUEsQUFBbUIsV0FBbkIsQUFBRyxJQUFILEFBQVUsTUFBVixBQUFtQjs7O2lCQUFuQixBQUFpQyxBQUM3QixBQUNBO0FBREEsQUFDVDtBQUZzQyxBQUN4QztBQUxTLEFBR2IsQUFBcUI7QUFBQSxBQUNuQixDQURGLENBSGEsRUFBQSxBQVViLEE7QUFDRiIsImZpbGUiOiJkZXRhaWwuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1dvcmFub3BQL0RvY3VtZW50cy90ZW5jZW50L3JlYWN0X3NlZWQifQ==