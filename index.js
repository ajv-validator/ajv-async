'use strict';

var nodent = require('nodent')({ log: false, dontInstallRequireHook: true });


module.exports = function (ajv) {
  var opts = ajv._opts;
  var t = opts.transpile;
  if (typeof t != 'boolean' && t !== undefined)
    throw new TypeError('transpile option must be boolean or undefined');
  if (t) {
    opts.processCode = nodentTranspile;
  } else if (!checkAsync()) {
    if (t === false) throw new Error('async functions not supported');
    opts.processCode = nodentTranspile;
  }
  return ajv;
};


function checkAsync() {
  /* jshint evil: true */
  try {
    (new Function('(async function(){})()'))();
    /* istanbul ignore next */
    return true;
  } catch(e) {}
}


function nodentTranspile(code) {
  return nodent.compile(code, '', { promises: true, sourcemap: false }).code;
}
