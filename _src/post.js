var loadsCode = document.querySelectorAll("code.live").length

if (loadsCode) {
  require.ensure(["./post-cm"], function (require) {
    require("./post-cm")
  })
}
