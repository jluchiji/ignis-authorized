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
import { __scopes } from './scope';


/*!
 * Ignis extension
 */
export default function accessExtension(Ignis) {
  Ignis.init(function() {
    /* Root acess-control namespace */
    this.access = Object.create(null);

    /* Scope storage */
    this[__scopes] = new Map();

    /* Attach Authorized middlewares */
    this.factories.push(Factory);

    /* Attach access-control callbacks */
    this.access.role   = Role;
    this.access.scope  = Scope.bind(this);
    this.access.action = Action;
  });

}
