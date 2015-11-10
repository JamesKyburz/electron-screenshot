module.exports = screenshot

function screenshot (opt, cb) {
  cb = cb || function () {}
  var remote = require('' + 'remote') // prevent static analysis like browserify
  setTimeout(function () {
    remote.getCurrentWindow().capturePage(function handleCapture (img) {
      remote.require('fs').writeFile(opt.filename, img.toPng(), cb)
    })
  }, opt.delay)
}
