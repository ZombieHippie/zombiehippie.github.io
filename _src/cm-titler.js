var jquery = require("jquery")
var titleTemplate = require("./components/title.jade")
module.exports = function ApplyTitle(editor, title, infostr) {
  var parentEl = editor.display.wrapper
  // append a strong and span for error name and error message display
  var errorTextEl = jquery(parentEl)
    .prepend(titleTemplate({
      title:title,
      infostr:infostr
    }))
}