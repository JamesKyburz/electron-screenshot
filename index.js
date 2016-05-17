module.exports = screenshot

function screenshot (opt, cb) {
  cb = cb || function () {}
  var remote
  try {
    remote = require('' + 'electron').remote
  } catch (e) {
    remote = require('' + 'remote')
  }
  setTimeout(function () {
    remote.getCurrentWindow().capturePage(function handleCapture (img) {
      remote.require('fs').writeFile(opt.filename, img.toPng(), cb)
    })
  }, opt.delay)
}
