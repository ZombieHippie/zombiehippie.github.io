var usesCodeMirror = document.querySelectorAll("#post>pre>code")

if (usesCodeMirror) {
  require(["./post-cm"], function (PostCM) {
    [].forEach.call(usesCodeMirror, function (el) {
      if (~el.className.indexOf("live"))
        PostCM.live(el)
      else
        PostCM.run(el)
    })
  })
}
