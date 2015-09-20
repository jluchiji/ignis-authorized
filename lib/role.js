/**
 * access/role.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = role;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _authorized = require('authorized');

var _authorized2 = _interopRequireDefault(_authorized);

var _ignisUtil = require('ignis-util');

/**
 * role(2)
 *
 * @description                Specifies the callback for verifying a role.
 * @param          {name}      Name of the role without entity.
 * @param          {callback}  Promise-generating callback function.
 */

function role(name, callback) {
  callback = (0, _ignisUtil.unpromisify)(callback);

  var wrapped = function wrapped(req, done) {
    callback(null, req, done);
  };
  if (/\./.test(name)) {
    wrapped = function (ent, req, done) {
      callback(ent, req, done);
    };
  }

  _authorized2['default'].role(name, wrapped);
}

module.exports = exports['default'];
//# sourceMappingURL=role.js.map