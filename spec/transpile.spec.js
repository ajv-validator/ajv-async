'use strict';

var Ajv = require('ajv');
var setupAsync = require('../index.js');
var assert = require('assert');


describe('transpile option', function() {
  var majorNodeVersion;
  if (typeof process != 'undefined')
    majorNodeVersion = +process.versions.node.split('.')[0];

  it('should set processCode if async not supported', function() {
    var ajv = setupAsync(new Ajv);
    if (majorNodeVersion >= 7)
      assert.strictEqual(ajv._opts.processCode, undefined);
    else
      assert.equal(typeof ajv._opts.processCode, 'function');
  });

  it('should always set processCode if transpile: true', function() {
    var ajv = setupAsync(new Ajv({ transpile: true }));
    assert.equal(typeof ajv._opts.processCode, 'function');
  });

  it('should throw error if async not supported and transpile: false', function() {
    if (majorNodeVersion >= 7) assert.doesNotThrow(test);
    else assert.throws(test, /async functions not supported/);

    function test() {
      setupAsync(new Ajv({ transpile: false }));
    }
  });

  it('should throw error with unknown transpile option', function() {
    test('nodent');
    test({});

    function test(transpile) {
      assert.throws(function() {
        setupAsync(new Ajv({ transpile: transpile }));
      }, /transpile option must be boolean or undefined/);
    }
  });
});
