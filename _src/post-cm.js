// post-cm.js
// loads codemirror for interactive components
var CodeMirror = require("./editor.js")

var $ = require("jquery")
var applyErrorHandler = require("./cm-error-handler")
var applyTitle = require("./cm-titler")
var codeStore = {}
var titleTemplate = require("./components/title.jade")

function PostCM () {}

module.exports = new PostCM

PostCM.prototype.run = function(element) {
  var lang = element.className.split(" ")[0]
  require(["codemirror/addon/runmode/runmode.js"], function () {
    CodeMirror.lazyModeWP(lang, function (mode) {
      var codeContents = element.innerText.replace(/[\s\n]*$/, "")
      //var frag = document.createDocumentFragment()
      var frag = document.createElement("DIV")
      frag.className = "runmode-container"
      CodeMirror.runMode(codeContents, mode, frag)
      $(element.parentNode)
      .empty()
      .append(frag)
      .addClass("CodeMirror cm-s-lawr CodeMirror-runmode")
    })
  })
}

PostCM.prototype.live = function(element) {
  var codeEl = element;
  var mode;
  var selector = (codeEl.className.match(/\#[\w\d\-\_]+$/) || [false])[0]
  var innerSelector = selector
  if (!selector) return;
  else selector = "#live-" + selector.slice(1);
  var liveCode = $(selector);

  if(codeStore[innerSelector] == null)
    codeStore[innerSelector] = {}

  var htmlContainer = liveCode.find(innerSelector)
  if (!htmlContainer.length) {
    liveCode.addClass("live-code-preview")
    liveCode.append("<div id='" + innerSelector.slice(1) + "' class='live-html'></div>")

    htmlContainer = liveCode.find(innerSelector)

    // put title above preview
    htmlContainer.before(titleTemplate({
      title: innerSelector,
      infostr: "preview"
    }))
  }
  
  mode = codeEl.className.split(" ")[0]
  liveCode.addClass(mode)

  switch (mode) {
  case "css":
    liveCode.append("<style></style>")
    break;
  case "javascript":
    liveCode.append("<script><\/script>")
    break;
  }
  var codeContents = codeEl.innerText.replace(/[\s\n]*$/, "")
  var preEl = codeEl.parentNode

  CodeMirror.lazyModeWP(mode, function (mime) {
    var cm = CodeMirror(function (elt) {
      var codeMirrorContainer = document.createElement("DIV")
      codeMirrorContainer.className = "post-codemirror"
      codeMirrorContainer.appendChild(elt)
      preEl.parentNode.replaceChild(codeMirrorContainer, preEl);
    }, {
      mode: mime,
      lineWrapping: true
    })

    // allow styling based on mode-lang class selector
    cm.display.wrapper.className += " mode-" + mode

    // store code editor for communication between other editors
    codeStore[innerSelector][mode] = cm

    // attach cm.errorHandler for marking text quickly
    applyErrorHandler(cm)

    // attach title
    applyTitle(cm, innerSelector, mode)
    
    switch (mode) {
      case "css":
        cm.on("change", function(cm) {
          var code = cm.getValue();
          liveCode.children("style").html(code);
        })
        break;
      case "html":
        cm.on("change", function(cm) {
          var code = cm.getValue();
          htmlContainer.html(code);
          var jscm = codeStore[innerSelector]["javascript"]
          if (jscm) {
            liveCode.find("script").remove()
            liveCode.append("<script>" + jscm.getValue() + "<\/script>");
          }
        })
        break;
      case "javascript":
        cm.on("change", function(cm, evt) {
          var code = cm.getValue();
          liveCode.children("script").remove();

          // reevaluate html
          var htmlcm = codeStore[innerSelector]["html"]
          if (htmlcm)
            htmlContainer.html(htmlcm.getValue())
          else
            htmlContainer.html("")

          // evaluate javascript
          try {
            liveCode.append("<script>" + code + "<\/script>");
            cm.errorHandler(null)
          } catch (error) {
            var lineNumberMatch = /<anonymous>\:(\d+)\:(\d+)/
            var locMatch = lineNumberMatch.exec(error.stack)
            if (locMatch) {
              // use matched line locations as error locations
              var errorline = parseInt(locMatch[1]) - 1
              var errorlastline = errorline
              var errorcol = parseInt(locMatch[2]) - 1
              var errorlastcol = cm.getLine(errorline).length
            } else if (cm.currentError != null) {
              // show error without highlight
              cm.errorHandler({
                name: error.name,
                message: error.message
              })
              return;
            } else {
              // use last change as error locations
              var errorline = evt.from.line
              var errorlastline = evt.from.line // evt.to.line
              var errorcol = 0
              var errorlastcol = cm.getLine(errorline).length // evt.to.ch
            }
            var errorMessage = {
              name: error.name,
              message: error.message,
              location: {
                first_line: errorline,
                first_column: errorcol,
                last_line: errorlastline,
                last_column: errorlastcol
              }
            }
            cm.errorHandler(errorMessage)
            console.error(error)
          }
        })
        break;
    }
    // trigger change so code gets executed on load
    cm.setValue(codeContents)
  })
};
