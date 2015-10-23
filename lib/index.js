/**
 * access/index.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = accessExtension;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _role = require('./role');

var _role2 = _interopRequireDefault(_role);

var _scope = require('./scope');

var _scope2 = _interopRequireDefault(_scope);

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

var _factory = require('./factory');

var _factory2 = _interopRequireDefault(_factory);

var _authorized = require('authorized');

var _authorized2 = _interopRequireDefault(_authorized);

/*!
 * Ignis extension
 */

function accessExtension(ignis) {
  /* Root acess-control namespace */
  ignis.access = Object.create(null);

  /* Scope storage */
  ignis[_scope.__scopes] = new Map();

  /* Attach Authorized middlewares */
  ignis.pre.push(_factory2['default']);

  /* Attach access-control callbacks */
  ignis.access.role = _role2['default'];
  ignis.access.scope = _scope2['default'].bind(ignis);
  ignis.access.action = _action2['default'];
  ignis.access.view = function (req) {
    return _authorized2['default'].view(req);
  };
}

module.exports = exports['default'];
//# sourceMappingURL=index.js.map