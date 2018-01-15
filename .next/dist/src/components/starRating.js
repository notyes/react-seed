"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/WoranopP/Documents/tencent/react_seed/src/components/starRating.js";
exports.default = RatingStar;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Star(_ref) {
  var status = _ref.status;

  return _react2.default.createElement("span", { className: "star-icon " + status, __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "\u2606");
}
function RatingStar(_ref2) {
  var avgRating = _ref2.avgRating;

  var avg = parseFloat(avgRating);
  var listsStar = [];
  for (var index = 1; index <= 5; index++) {
    if (avg >= 1) {
      listsStar.push(_react2.default.createElement(Star, { key: avgRating + index, status: "full", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }));
    } else if (avg >= 0.5) {
      listsStar.push(_react2.default.createElement(Star, { key: avgRating + index, status: "half", __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }));
    } else {
      listsStar.push(_react2.default.createElement(Star, { key: avgRating + index, status: "", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
    if (avg != 0) {
      avg = avg - 1;
    }
  }
  return _react2.default.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, listsStar, " (", avgRating, ")");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3N0YXJSYXRpbmcuanMiXSwibmFtZXMiOlsiUmF0aW5nU3RhciIsIlN0YXIiLCJzdGF0dXMiLCJhdmdSYXRpbmciLCJhdmciLCJwYXJzZUZsb2F0IiwibGlzdHNTdGFyIiwiaW5kZXgiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBS3dCLEE7O0FBTHhCOzs7Ozs7OztBQUVBLFNBQUEsQUFBUyxXQUFpQjtNQUFWLEFBQVUsY0FBVixBQUFVLEFBQ3hCOzt5QkFBTyxjQUFBLFVBQU0sMEJBQU4sQUFBOEI7Z0JBQTlCO2tCQUFBO0FBQUE7R0FBQSxFQUFQLEFBQU8sQUFDUjs7QUFDYyxTQUFBLEFBQVMsa0JBQTBCO01BQWIsQUFBYSxrQkFBYixBQUFhLEFBQ2hEOztNQUFJLE1BQU0sV0FBVixBQUFVLEFBQVcsQUFDckI7TUFBSSxZQUFKLEFBQWdCLEFBQ2hCO09BQUssSUFBSSxRQUFULEFBQWlCLEdBQUcsU0FBcEIsQUFBNkIsR0FBN0IsQUFBZ0MsU0FBUyxBQUN2QztRQUFJLE9BQUosQUFBVyxHQUFHLEFBQ1o7Z0JBQUEsQUFBVSxtQ0FBSyxBQUFDLFFBQUssS0FBSyxZQUFYLEFBQXVCLE9BQU8sUUFBOUIsQUFBcUM7b0JBQXJDO3NCQUFmLEFBQWUsQUFDaEI7QUFEZ0I7T0FBQTtBQURqQixlQUVXLE9BQUosQUFBVyxLQUFLLEFBQ3JCO2dCQUFBLEFBQVUsbUNBQUssQUFBQyxRQUFLLEtBQUssWUFBWCxBQUF1QixPQUFPLFFBQTlCLEFBQXFDO29CQUFyQztzQkFBZixBQUFlLEFBQ2hCO0FBRGdCO09BQUE7QUFEVixLQUFBLE1BRUEsQUFDTDtnQkFBQSxBQUFVLG1DQUFLLEFBQUMsUUFBSyxLQUFLLFlBQVgsQUFBdUIsT0FBTyxRQUE5QixBQUFxQztvQkFBckM7c0JBQWYsQUFBZSxBQUNoQjtBQURnQjtPQUFBO0FBRWpCO1FBQUksT0FBSixBQUFXLEdBQUcsQUFDWjtZQUFNLE1BQU4sQUFBWSxBQUNiO0FBQ0Y7QUFDRDt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLEVBQUEsV0FDZ0IsTUFEaEIsV0FERixBQUNFLEFBSUgiLCJmaWxlIjoic3RhclJhdGluZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvV29yYW5vcFAvRG9jdW1lbnRzL3RlbmNlbnQvcmVhY3Rfc2VlZCJ9