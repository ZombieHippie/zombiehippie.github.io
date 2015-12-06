var jquery = require("jquery")
module.exports = function ApplyErrorHandler(editor) {
  var parentEl = editor.display.wrapper
  // append a strong and span for error name and error message display
  var errorTextEl = jquery(parentEl)
    .prepend('<div class="error-message"><b></b><span></span></div>')
    .find(".error-message>*")
  errorTextEl = [errorTextEl[0],errorTextEl[1]]
  editor.errorHandler = function (err) {
    if (editor.currentError != null) {
      // clear error message
      errorTextEl[0].innerText = ""
      errorTextEl[1].innerText = ""

      // clear marked text
      if(editor.currentError.marks != null)
        editor.currentError.marks.clear()

      editor.currentError = null
    }
    if (err) {
      editor.currentError = err

      errorTextEl[0].innerText = err.name + ": "
      errorTextEl[1].innerText = err.message

      if(err.location) {
        err = err.location
        editor.currentError.marks = editor.markText(
          {line:err.first_line, ch:err.first_column},
          {line:err.last_line,  ch:err.last_column},
          {className:"cm-error"}
        )
        
      }
    }
  }
}