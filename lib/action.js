/**
 * action.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = action;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _authorized = require('authorized');

var _authorized2 = _interopRequireDefault(_authorized);

/**
 * action(2)
 *
 * @description                Registers an action with authorized.
 * @param          {name}      Name of the action to register.
 * @param          {roles...}  Roles required for the action.
 */

function action(name, roles) {
  _authorized2['default'].action(name, roles);
}

module.exports = exports['default'];
//# sourceMappingURL=action.js.map