webpackHotUpdate(6,{

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(405);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = '/Users/WoranopP/Documents/tencent/react_seed/pages/detail.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query($menu_id: Int!) {\n    MenuDetail(menu_id: $menu_id) {\n      id\n      name\n      images\n      rating {\n        one\n        two\n        three\n        four\n        five\n      }\n      price\n      avgRating\n      comments {\n        id\n        body\n      }\n    }\n  }\n'], ['\n  query($menu_id: Int!) {\n    MenuDetail(menu_id: $menu_id) {\n      id\n      name\n      images\n      rating {\n        one\n        two\n        three\n        four\n        five\n      }\n      price\n      avgRating\n      comments {\n        id\n        body\n      }\n    }\n  }\n']);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(406);

var _withLayout = __webpack_require__(435);

var _withLayout2 = _interopRequireDefault(_withLayout);

var _recompose = __webpack_require__(502);

var _withApolloClient = __webpack_require__(465);

var _withApolloClient2 = _interopRequireDefault(_withApolloClient);

var _reactApollo = __webpack_require__(397);

var _graphqlTag = __webpack_require__(412);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/WoranopP/Documents/tencent/react_seed/pages/detail.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WoranopP/Documents/tencent/react_seed/pages/detail.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/detail")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5kY2E1MWQ5ZjE0Y2VkYzIwOTRjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGV0YWlsLmpzP2FjZjZiYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3NyYy9yb3V0ZXMnXG5pbXBvcnQgd2l0aExheW91dCBmcm9tICcuLi9ob2NzL3dpdGhMYXlvdXQnXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJ1xuaW1wb3J0IHdpdGhBcG9sbG9DbGllbnQgZnJvbSAnLi4vaG9jcy93aXRoQXBvbGxvQ2xpZW50J1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5cbmZ1bmN0aW9uIERldGFpbFBhZ2UoeyBkYXRhIH0pIHtcbiAgY29uc3QgeyBNZW51RGV0YWlsLCBsb2FkaW5nIH0gPSBkYXRhXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHsgbmFtZSwgYXZnUmF0aW5nLCBjb21tZW50cywgaW1hZ2VzLCBwcmljZSB9ID0gTWVudURldGFpbFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tX2NvbnRhaW5lclwiPlxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lcjJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxDb21lXCI+XG4gICAgICAgICAgPGgyPntuYW1lfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogY29sdW1uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbENvbWVcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY29sdW1ab25lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0Y29sdW1uMVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17YC9zdGF0aWMvaW1hZ2VzL21lbnVzLyR7aW1hZ2VzfWB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJvdXRpY29uXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dGNvbHVtbjJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW5cbiAgICAgICAgICAgICAgICBzZWQgb2RpbyBldCBhbnRlIGFkaXBpc2NpbmcgbG9ib3J0aXMuIFF1aXNxdWUgZWxlaWZlbmQsIGFyY3UgYVxuICAgICAgICAgICAgICAgIGRpY3R1bSB2YXJpdXMsIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPkNvbnRyYXJ5IHRvIHBvcHVsYXIgYmVsaWVmLCBMb3JlbSBJcHN1bSBpcyBub3Qgc2ltcGx5XG4gICAgICAgICAgICAgICAgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpblxuICAgICAgICAgICAgICAgIGxpdGVyYXR1cmUgZnJvbSA0NSBCQywgbWFraW5nIGl0IG92ZXIgMjAwMCB5ZWFycyBvbGQuIFJpY2hhcmRcbiAgICAgICAgICAgICAgICBNY0NsaW50b2NrLCBhIExhdGluIHByb2Zlc3NvciBhdCBIYW1wZGVuLVN5ZG5leSBDb2xsZWdlIGluXG4gICAgICAgICAgICAgICAgVmlyZ2luaWEsIGxvb2tlZCB1cCBvbmUgb2YgdGhlIG1vcmUgb2JzY3VyZSBMYXRpbiB3b3JkcyxcbiAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ciwgZnJvbSBhIExvcmVtIElwc3VtIHBhc3NhZ2UsIGFuZCBnb2luZyB0aHJvdWdoIHRoZVxuICAgICAgICAgICAgICAgIGNpdGVzIG9mIHRoZSB3b3JkIGluIGNsYXNzaWNhbCBsaXRlcmF0dXJlLCBkaXNjb3ZlcmVkIHRoZVxuICAgICAgICAgICAgICAgIHVuZG91YnRhYmxlIHNvdXJjZS4gTG9yZW0gSXBzdW0gY29tZXMgZnJvbSBzZWN0aW9ucyAxLjEwLjMyIGFuZFxuICAgICAgICAgICAgICAgIDEuMTAuMzMgb2YgXCJkZSBGaW5pYnVzIEJvbm9ydW0gZXQgTWFsb3J1bVwiIChUaGUgRXh0cmVtZXMgb2YgR29vZFxuICAgICAgICAgICAgICAgIGFuZCBFdmlsKSBieSBDaWNlcm8sIHdyaXR0ZW4gaW4gNDUgQkMuIFRoaXMgYm9vayBpcyBhIHRyZWF0aXNlXG4gICAgICAgICAgICAgICAgb24gdGhlIHRoZW9yeSBvZiBldGhpY3MsIHZlcnkgcG9wdWxhciBkdXJpbmcgdGhlIFJlbmFpc3NhbmNlLlxuICAgICAgICAgICAgICAgIFRoZSBmaXJzdCBsaW5lIG9mIExvcmVtIElwc3VtLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0Li5cIixcbiAgICAgICAgICAgICAgICBjb21lcyBmcm9tIGEgbGluZSBpbiBzZWN0aW9uIDEuMTAuMzIuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNpZGVyZWFkbW9yZVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4uLi4uLjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+UHJpY2UgOiB7cHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogZW5kIGNvbHVtbiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxDb21ldGV4dEJveDJcIj5cbiAgICAgICAgPGgyPlJldmlldzwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29tbWVudHNsaXN0XCI+XG4gICAgICAgICAgPExpc3RSZXZpZXdzIGNvbW1lbnRzPXtjb21tZW50c30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZnVuY3Rpb24gTGlzdFJldmlld3MoeyBjb21tZW50cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2NvbW1lbnRzLm1hcChmdW5jdGlvbihjb21tZW50KSB7XG4gICAgICAgIHJldHVybiA8bGkga2V5PXtjb21tZW50LmlkfT57Y29tbWVudC5ib2R5fTwvbGk+XG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApXG59XG5jb25zdCBRVUVSWV9QT1NUUyA9IGdxbGBcbiAgcXVlcnkoJG1lbnVfaWQ6IEludCEpIHtcbiAgICBNZW51RGV0YWlsKG1lbnVfaWQ6ICRtZW51X2lkKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgaW1hZ2VzXG4gICAgICByYXRpbmcge1xuICAgICAgICBvbmVcbiAgICAgICAgdHdvXG4gICAgICAgIHRocmVlXG4gICAgICAgIGZvdXJcbiAgICAgICAgZml2ZVxuICAgICAgfVxuICAgICAgcHJpY2VcbiAgICAgIGF2Z1JhdGluZ1xuICAgICAgY29tbWVudHMge1xuICAgICAgICBpZFxuICAgICAgICBib2R5XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoQXBvbGxvQ2xpZW50LFxuICB3aXRoTGF5b3V0LFxuICBncmFwaHFsKFFVRVJZX1BPU1RTLCB7XG4gICAgb3B0aW9uczogKHsgdXJsOiB7IHF1ZXJ5OiB7IGlkIH0gfSB9KSA9PiAoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIG1lbnVfaWQ6IGlkXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbikoRGV0YWlsUGFnZSlcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uod2l0aEFwb2xsb0NsaWVudCwgd2l0aExheW91dCkoRGV0YWlsUGFnZSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2RldGFpbC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFKQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBSEE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUtBO0FBTEE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUtBO0FBTEE7OztBQU1BO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUNBO0FBeUJBO0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTtBQURBO0FBRkE7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=