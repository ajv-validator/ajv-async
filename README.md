# ajv-async
Configure async validation mode in [Ajv](https://github.com/epoberezkin/ajv) - JSON-Schema validator

[![Build Status](https://travis-ci.org/epoberezkin/ajv-async.svg?branch=master)](https://travis-ci.org/epoberezkin/ajv-async)
[![npm](https://img.shields.io/npm/v/ajv-async.svg)](https://www.npmjs.com/package/ajv-async)
[![Gitter](https://img.shields.io/gitter/room/ajv-validator/ajv.svg)](https://gitter.im/ajv-validator/ajv)

## Install

```shell
npm install ajv-async
```


## Usage

The code below configures async mode in Ajv instance to use the best async mode (async functions or generators) available in the current environment with/without transpilation. If transpilation is required, you should install [nodent](https://github.com/MatAtBread/nodent) or [regenerator](https://github.com/facebook/regenerator), ajv-async doesn't install them.

```javascript
var Ajv = require('ajv');
var setupAsync = require('ajv-async');

var ajv = setupAsync(new Ajv);
```

`async` and/or `transpile` options can be passed to Ajv to enable a specific async/transpilation mode. See [Ajv docs](https://github.com/epoberezkin/ajv#asynchronous-validation) for more information.


## Using in browser

At the moment Ajv already includes nodent and regenerators bundles. You still need to use this package, unless you manually set `async` option and explicitely pass `processCode` option. `transpile` option support requires using this package.

If you build this package with your code with Webpack, it will log warnings because this package uses optional dependencies. To suppress these warnings use [IgnorePlugin](https://webpack.github.io/docs/list-of-plugins.html#ignoreplugin):

```javascript
new IgnorePlugin(/regenerator|nodent/, /ajv-async/)
```


## License

[MIT](https://github.com/epoberezkin/ajv-async/blob/master/LICENSE)
