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

/*!
 * Ignis extension
 */

function accessExtension(Ignis) {
  Ignis.init(function () {
    /* Root acess-control namespace */
    this.access = Object.create(null);

    /* Scope storage */
    this[_scope.__scopes] = new Map();

    /* Attach Authorized middlewares */
    this.factories.push(_factory2['default']);

    /* Attach access-control callbacks */
    this.access.role = _role2['default'];
    this.access.scope = _scope2['default'].bind(this);
    this.access.action = _action2['default'];
  });
}

module.exports = exports['default'];
//# sourceMappingURL=index.js.map