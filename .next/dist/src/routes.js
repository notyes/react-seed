'use strict';

var nextRoutes = require('next-routes');
var routes = module.exports = nextRoutes();

// API
// routes.add(route_name, pattern = /name, page_filename = name)

// Example
// routes.add('article', '/article/:id(\\d+)')

routes.add('home', '/', 'index');
routes.add('detail', '/:id(\\d+)/');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMuanMiXSwibmFtZXMiOlsibmV4dFJvdXRlcyIsInJlcXVpcmUiLCJyb3V0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sYUFBYSxBQUFiLEFBQU47QUFDQSxJQUFNLFNBQVUsT0FBTyxBQUFQLFVBQWlCLEFBQWpDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLFFBQW1CLEFBQW5CLEtBQXdCLEFBQXhCO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxVQUFxQixBQUFyQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1dvcmFub3BQL0RvY3VtZW50cy90ZW5jZW50L3JlYWN0X3NlZWQifQ==