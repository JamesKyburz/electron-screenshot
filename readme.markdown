# electron-screenshot

Take screenshots in an electron window.

# Install

npm install electron-screenshot

# Usage

Use in an already existing atom-shell window

for a standalone implementation see [atom-screenshot](https://github.com/FWeinb/node-atom-screenshot)

``` js
var screenshot = require('electron-screenshot')
screenshot(options, [cb])
```

#### options

### filename
png filename

### delay (in ms)
default `0`
