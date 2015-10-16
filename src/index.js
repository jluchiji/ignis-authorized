/**
 * access/index.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */

import Role        from './role';
import Scope       from './scope';
import Action      from './action';
import Factory     from './factory';
import {__scopes}  from './scope';

import Authorized  from 'authorized';

/*!
 * Ignis extension
 */
export default function accessExtension(ignis) {
  /* Root acess-control namespace */
  ignis.access = Object.create(null);

  /* Scope storage */
  ignis[__scopes] = new Map();

  /* Attach Authorized middlewares */
  ignis.pre.push(Factory);

  /* Attach access-control callbacks */
  ignis.access.role   = Role;
  ignis.access.scope  = Scope.bind(ignis);
  ignis.access.action = Action;
  ignis.access.view   = Authorized.view;
}
