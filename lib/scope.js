/**
 * access/scope.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getScope = getScope;
exports['default'] = scope;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _authorized = require('authorized');

var _authorized2 = _interopRequireDefault(_authorized);

var _ignisUtil = require('ignis-util');

/*!
 * Symbols used by scope.js
 */
var __scopes = (0, _ignisUtil.symbol)('Ignis::access::scopes');

exports.__scopes = __scopes;
/**
 * getScope(2)
 *
 * @description                Creates a function that retrieves the scope.
 * @param          {ignis}     The Ignis app instance.
 * @param          {name}      Name of the scope to retrieve.
 * @return         {Function}  Function that retrieves the scope.
 */

function getScope(ignis, name) {
  return (0, _ignisUtil.unpromisify)(function (req) {
    var callbacks = ignis[__scopes].get(name);

    /* Deny if there are no scope callbacks */
    if (!callbacks || callbacks.length === 0) {
      return _bluebird2['default'].resolve(null);
    }

    /* Start trying */
    return callbacks.reduce(function (last, next) {

      return last.then(function (data) {
        if (data) {
          return data;
        }
        if (req.params[next.param]) {
          return next.callback(req.params[next.param]);
        }
        return null;
      });
    }, _bluebird2['default'].resolve(null)).then(function (data) {
      return data || null;
    });
  });
}

/**
 * scope(3)
 *
 * @description                Specifies the callback to retrieve an entity.
 * @param          {name}      Name of the entity.
 * @param          {param}     URL param that contains ID used for the search.
 * @param          {callback}  Promise-generating callback to retrieve the
 *                             entity using the specified ID.
 * @return         {this}      Namespace for further chaining.
 */

function scope(name, param, callback) {
  // istanbul ignore next

  var _this = this;

  var store = this[__scopes];

  /* Create a scope if it is not already present */
  if (!store.has(name)) {
    store.set(name, []);
    _authorized2['default'].entity(name, function (req, done) {
      getScope(_this, name)(req, done);
    });
  }

  store.get(name).push({ param: param, callback: callback });
}
//# sourceMappingURL=scope.js.map