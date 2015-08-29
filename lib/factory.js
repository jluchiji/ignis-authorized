/**
 * factory.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = accessFactory;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _authorized = require('authorized');

var _authorized2 = _interopRequireDefault(_authorized);

/**
* accessFactory(2)
*
* @description                Factory for instantiating access control mware.
* @param          {ignis}     Ignis.js instance.
* @param          {meta}      Request handler metadata.
* @return         {Function}  Express middleware that authorizes the request.
*/

function accessFactory(ignis, meta) {
  var action = meta.access || meta.action || meta.permission;

  /* Do not add anything if action is not specified */
  if (!action) {
    return null;
  }

  /* Action can be either a string or an array */
  action = _lodash2['default'].flatten([action]);

  /* Create an authorization middleware */
  return _authorized2['default'].can.apply(_authorized2['default'], _toConsumableArray(action));
}

module.exports = exports['default'];
//# sourceMappingURL=factory.js.map