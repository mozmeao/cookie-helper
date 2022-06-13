# Mozilla Cookie Helper

### What does it do?

A complete cookies reader/writer framework with full unicode support. For more general information on web Cookies visit [MDN](https://developer.mozilla.org/en-US/docs/Web/API/document.cookie).

### How to install and use

Install via npm: `npm install @mozmeao/cookie-helper`

Import the library at your applications entrypoint via require, import or by using a global variable in your script tag::

-   `import CookieHelper from '@mozmeao/cookie-helper';`
-   `const CookieHelper = require('@mozmeao/cookie-helper')`
-   `const TrafficCop = window.CookieHelper`

Once that object is instanciated you can use the following functions:
| Function                                                                              | Notes                                                                                                           |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `Mozilla.Cookies.setItem(name, value[, end[, path[, domain[, secure[, samesite]]]]])` | will set a cookie inside of `document.cookie` If the cookie is created it will return `true` otherwise, `false` |
| `Mozilla.Cookies.getItem(name)`                                                       | Will return the key that you pass to the function, if not found or no argument was passed - will return null    |
| `Mozilla.removeItem(name[, path[, domain]])`                                          | Will remove the cookie that matches the passed key. If no key is found, it will return `false`                  |
| `Mozilla.Cookies.hasItem(name)`                                                       | Will return true if cookie is found that matches the passed key. If no key is found it will return `false`      |
| `Mozilla.Cookies.keys()`                                                              | Will return an array of the keys found in `document.cookie`                                                     |

## Further Doumentation

- [Building the NPM package](docs/#building-the-npm-package)
- [Running tests](docs/#running-tests)
- [Publishing to NPM](docs/#publishing-to-npm)

## License

This Source Code Form is subject to the terms of the [Mozilla Public
License, v. 2.0.](http://mozilla.org/MPL/2.0/)
