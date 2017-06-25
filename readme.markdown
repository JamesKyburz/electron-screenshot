# electron-screenshot

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/electron-screenshot.svg)](https://greenkeeper.io/)

Take screenshots in an electron window.

# Install

npm install electron-screenshot

# Usage

Use in an already existing atom-shell window

for a standalone implementation see [electron-screenshot-service](https://github.com/FWeinb/electron-screenshot-service)

``` js
var screenshot = require('electron-screenshot')
screenshot(options, [cb])
```

#### options

### filename
png filename

### delay (in ms)
default `0`
