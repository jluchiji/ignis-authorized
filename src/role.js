/**
 * access/role.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */

import Bluebird    from 'bluebird';
import Authorized  from 'authorized';

import { unpromisify } from 'ignis-util';


/**
 * role(2)
 *
 * @description                Specifies the callback for verifying a role.
 * @param          {name}      Name of the role without entity.
 * @param          {callback}  Promise-generating callback function.
 */
export default function role(name, callback) {
  callback = unpromisify(callback);

  let wrapped = (req, done) => {
    callback(req, done);
  };
  if (/\./.test(name)) {
    wrapped = (ent, req, done) => {
      callback(ent, req, done);
    };
  }

  Authorized.role(name, wrapped);
}
