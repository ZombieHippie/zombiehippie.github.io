module.exports = function (lang, c) {
console.log("static-extract", lang);
var d = function (mime) { return function () { c(mime) } };
switch (lang) {
case "html": require(["codemirror/mode/xml/xml.js","codemirror/mode/htmlmixed/htmlmixed.js"], d("text/html"));break;
case "coffee": require(["codemirror/mode/coffeescript/coffeescript.js"], d("text/x-coffeescript"));break;
case "golang": require(["codemirror/mode/go/go.js"], d("text/x-go"));break;
case "java": require(["codemirror/mode/clike/clike.js"], d("text/x-java"));break;
case "c++": require(["codemirror/mode/clike/clike.js"], d("text/x-c++src"));break;
case "c": require(["codemirror/mode/clike/clike.js"], d("text/x-csrc"));break;
case "csharp": require(["codemirror/mode/clike/clike.js"], d("text/x-csharp"));break;
case "jade": require(["codemirror/mode/jade/jade.js"], d("jade"));break;
case "css": require(["codemirror/mode/css/css.js"], d("css"));break;
case "sass": require(["codemirror/mode/sass/sass.js"], d("sass"));break;
case "ruby": require(["codemirror/mode/ruby/ruby.js"], d("ruby"));break;
case "xml": require(["codemirror/mode/xml/xml.js"], d("xml"));break;
case "erlang": require(["codemirror/mode/erlang/erlang.js"], d("erlang"));break;
case "d": require(["codemirror/mode/d/d.js"], d("d"));break;
case "javascript": require(["codemirror/mode/javascript/javascript.js"], d("javascript"));break;
case "groovy": require(["codemirror/mode/groovy/groovy.js"], d("groovy"));break;
case "markdown": require(["codemirror/mode/markdown/markdown.js"], d("markdown"));break;
case "nginx": require(["codemirror/mode/nginx/nginx.js"], d("nginx"));break;
case "shell": require(["codemirror/mode/shell/shell.js"], d("shell"));break;
case "sql": require(["codemirror/mode/sql/sql.js"], d("sql"));break;
case "yaml": require(["codemirror/mode/yaml/yaml.js"], d("yaml"));break;
default: console.log("Could not find mode for language: " + lang); d("text/plain")(require);
} 
}
//^"(.+?)":\[\[(.+?)\],"(.+)"](,|\})$ 