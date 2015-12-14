var CodeMirror = require("codemirror")
require("codemirror/lib/codemirror.css")
//require("./cm-theme-lawr-general.styl")
require("./cm-theme-lawr.styl")

var modealias = require("./mode-alias-static-extract.js")

// other languages do not have strange names, and their mode scripts are commonly located at mode/theirname/theirname.js
function loadAppropriateModeForLanguage (lang, callback) {
  modealias(lang, function (mime) {
    callback(mime)
  })
}
require("codemirror/addon/search/searchcursor.js")
//require("codemirror/addon/search/match-highlighter.js")
require("codemirror/addon/edit/closebrackets.js")
require("codemirror/addon/selection/mark-selection.js")

require("codemirror/keymap/sublime.js")

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
  smartIndent: false,
  theme: 'lawr',
  workTime: 100,
  workDelay: 150
}

for (key in defaults) {
  CodeMirror.defaults[key] = defaults[key]
}

CodeMirror.lazyModeWP = loadAppropriateModeForLanguage

module.exports = CodeMirror