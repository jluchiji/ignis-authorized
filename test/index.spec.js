/**
 * test/access/index.spec.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */
/* jshint -W030 */
var Sinon          = require('sinon');
var Chai           = require('chai');
var Bluebird       = require('bluebird');
var Authorized     = require('authorized');

Chai.use(require('chai-as-promised'));
Chai.use(require('sinon-chai'));
var expect         = Chai.expect;

var Ignis          = require('ignis/lib/core');
var extension      = require('../lib/index');

describe('extension', function() {

  it('should mount the extension', function() {
    var ignis = new Ignis();

    ignis.use(extension);

    expect(ignis).to.have.property('access');
    expect(ignis).to.have.deep.property('access.role');
    expect(ignis).to.have.deep.property('access.action');
    expect(ignis).to.have.deep.property('access.scope');
  });

});

require('./action.spec.js');
require('./factory.spec.js');
require('./role.spec.js');
require('./scope.spec.js');
