'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = fetchGQL;

require('isomorphic-fetch');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var api = 'http://localhost:5000/graphql';

function fetchGQL(query) {
  var variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: (0, _stringify2.default)({
      query: query,
      variables: variables,
      operationName: null
    })
  }).then(function (res) {
    return res.json();
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2ZldGNoR1FMLmpzIl0sIm5hbWVzIjpbImZldGNoR1FMIiwiYXBpIiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwib3BlcmF0aW9uTmFtZSIsInRoZW4iLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUl3QixBOztBQUp4Qjs7Ozs7O0FBRUEsSUFBTSxNQUFOLEFBQVk7O0FBRUcsU0FBQSxBQUFTLFNBQVQsQUFBa0IsT0FBeUI7TUFBbEIsQUFBa0IsZ0ZBQU4sQUFBTSxBQUN4RDs7ZUFBTyxBQUFNO1lBQUssQUFDUixBQUNSOztzQkFGZ0IsQUFFUCxBQUNTLEFBRWxCO0FBSFMsQUFDUDs7YUFFbUIsQUFFbkI7aUJBRm1CLEFBR25CO3FCQVJHLEFBQVcsQUFLVixBQUFlLEFBR0o7QUFISSxBQUNuQixLQURJO0FBTFUsQUFDaEIsR0FESyxFQUFBLEFBVUosS0FBSyxlQUFBO1dBQU8sSUFBUCxBQUFPLEFBQUk7QUFWbkIsQUFBTyxBQVdSIiwiZmlsZSI6ImZldGNoR1FMLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Xb3Jhbm9wUC9Eb2N1bWVudHMvdGVuY2VudC9yZWFjdF9zZWVkIn0=