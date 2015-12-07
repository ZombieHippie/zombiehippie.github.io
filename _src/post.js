// post.js
var CodeMirror = require("./editor.js")

var $ = require("jquery")
var applyErrorHandler = require("./cm-error-handler")
var applyTitle = require("./cm-titler")
var codeStore = {}
var titleTemplate = require("./components/title.jade")

$("code.live").each(function(){
  var mode;
  var selector = (this.className.match(/\#[\w\d\-\_]+$/) || [false])[0]
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
  
  if (/^css\s/.test(this.className))
    mode = "css";
  else if (/^html\s/.test(this.className))
    mode = "html";
  else if (/^javascript\s/.test(this.className))
    mode = "javascript";
  else return console.log("Unknown live type " + this.className);
  liveCode.addClass(mode)

  var code = this.innerText;
  switch (mode) {
  case "css":
    liveCode.append("<style>" + code + "</style>")
    break;
  case "html":
    htmlContainer.html(code)
    break;
  case "javascript":
    liveCode.append("<script>" + code + "<\/script>")
    break;
  }
  this.innerText = ""
  var cm = CodeMirror(this.parentNode, {
    mode: "text/" + mode,
    value: code.replace(/[\s\n]*$/, ""),
    lineWrapping: true
  })

  cm.display.wrapper.className += " mode-" + mode

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
});
