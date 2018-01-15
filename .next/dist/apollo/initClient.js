'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initClient;

require('isomorphic-fetch');

var _apolloClient = require('apollo-client');

var _apolloLinkHttp = require('apollo-link-http');

var _apolloCacheInmemory = require('apollo-cache-inmemory');

var apolloClient = null;

function create(initialState) {
  return new _apolloClient.ApolloClient({
    link: new _apolloLinkHttp.HttpLink({
      uri: 'http://localhost:5000/graphql',
      credentials: 'same-origin'
    }),
    cache: new _apolloCacheInmemory.InMemoryCache().restore(initialState || {}),
    ssrMode: !process.browser
  });
}

function initClient(initialState) {
  if (!process.browser) {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwb2xsby9pbml0Q2xpZW50LmpzIl0sIm5hbWVzIjpbImluaXRDbGllbnQiLCJhcG9sbG9DbGllbnQiLCJjcmVhdGUiLCJpbml0aWFsU3RhdGUiLCJsaW5rIiwidXJpIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsInJlc3RvcmUiLCJzc3JNb2RlIiwicHJvY2VzcyIsImJyb3dzZXIiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQW1Cd0IsQTs7QUFuQnhCOztBQUVBOztBQUNBOztBQUNBOztBQUVBLElBQUksZUFBSixBQUFtQjs7QUFFbkIsU0FBQSxBQUFTLE9BQVQsQUFBZ0IsY0FBYyxBQUM1Qjs7O1dBQ3FCLEFBQ1osQUFDTDttQkFIb0IsQUFDaEIsQUFBYSxBQUVKLEFBRWY7QUFKbUIsQUFDakIsS0FESTtXQUlDLHlDQUFBLEFBQW9CLFFBQVEsZ0JBTGIsQUFLZixBQUE0QyxBQUNuRDthQUFTLENBQUMsUUFOWixBQUFPLEFBQWlCLEFBTUosQUFFckI7QUFSeUIsQUFDdEIsR0FESzs7O0FBVU0sU0FBQSxBQUFTLFdBQVQsQUFBb0IsY0FBYyxBQUMvQztNQUFJLENBQUMsUUFBTCxBQUFhLFNBQVMsQUFDcEI7V0FBTyxPQUFQLEFBQU8sQUFBTyxBQUNmO0FBRUQ7O01BQUksQ0FBSixBQUFLLGNBQWMsQUFDakI7bUJBQWUsT0FBZixBQUFlLEFBQU8sQUFDdkI7QUFFRDs7U0FBQSxBQUFPLEFBQ1IiLCJmaWxlIjoiaW5pdENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvV29yYW5vcFAvRG9jdW1lbnRzL3RlbmNlbnQvcmVhY3Rfc2VlZCJ9