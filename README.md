# ajv-async

## DEPRECATED / ARCHIVED

Ajv compiles asynchronous schemas to async functions that are supported in most JavaScript environments.

If you need to support other environments, you can compile schemas to [standalone validation code](https://github.com/ajv-validator/ajv/blob/master/docs/standalone.md) - it is not fully implemented/supported - and use any transpiler you prefer, there is no need to use this package.

Configure async validation mode in [Ajv](https://github.com/epoberezkin/ajv) - JSON-Schema validator

[![Build Status](https://travis-ci.org/epoberezkin/ajv-async.svg?branch=master)](https://travis-ci.org/epoberezkin/ajv-async)
[![npm](https://img.shields.io/npm/v/ajv-async.svg)](https://www.npmjs.com/package/ajv-async)
[![Gitter](https://img.shields.io/gitter/room/ajv-validator/ajv.svg)](https://gitter.im/ajv-validator/ajv)

## Install

```shell
npm install ajv-async
```


## Usage

The code below configures async mode in Ajv instance to transpile async functions using [nodent](https://github.com/MatAtBread/nodent), if required.

```javascript
var Ajv = require('ajv');
var setupAsync = require('ajv-async');

var ajv = setupAsync(new Ajv);
```

A boolean `transpile` option can be passed to Ajv instance to enforce (or to prohibit) transpilation. See [Ajv docs](https://github.com/epoberezkin/ajv#asynchronous-validation) for more information.


## Using in browser

ajv-async bundle in npm package already includes nodent. If you bundle your code with browserify or webpack, when you `require('ajv-async')` nodent will be included as well.


## License

[MIT](https://github.com/epoberezkin/ajv-async/blob/master/LICENSE)
