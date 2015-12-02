var CodeMirror = require("codemirror")
require("codemirror/lib/codemirror.css")
//require("codemirror/mode/coffeescript/coffeescript.js")
require("codemirror/mode/javascript/javascript.js")
require("codemirror/mode/css/css.js")
require("codemirror/mode/xml/xml.js")
require("codemirror/mode/htmlmixed/htmlmixed.js")

require("codemirror/keymap/sublime.js")

require("codemirror/addon/search/searchcursor.js")
require("codemirror/addon/search/match-highlighter.js")
require("codemirror/addon/edit/closebrackets.js")
require("codemirror/addon/selection/mark-selection.js")

//require("codemirror/mode/jade/jade.js")
//require("codemirror/mode/go/go.js")
//require("codemirror/mode/clike/clike.js")
//require("codemirror/mode/diff/diff.js")

var defaults = {
  lineNumbers: true,
  indentWithTabs: false,
  highlightSelectionMatches: true,
  styleSelectedText: true,
  styleActiveLine: true,
  indentUnit: 2,
  autoCloseBrackets: true,
  cursorBlinkRate: 530, // Set to 0 so we can blink with css
  showCursorWhenSelecting: true,
  keyMap: 'sublime',
  indentWithTabs: false,
  smartIndent: false
}

for (key in defaults) {
  CodeMirror.defaults[key] = defaults[key]
}

module.exports = CodeMirror