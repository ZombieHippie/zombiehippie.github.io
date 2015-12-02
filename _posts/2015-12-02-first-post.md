---
layout: post
title: First Post
---

{{ page.title }}
================

<p class="meta">2 Dec 2015 - Cheek Labs</p>

This is just a test.

<div id="live-example"></div>

```css live #example
.test { width: 100px; height: 100px;
  background: skyblue;
  transition: background .4s;}
.test[data-toggle="1"] { background: lawngreen; }
```
```javascript live #example
var el = document.createElement("div")
el.className = "test"
el.innerText = "Click me"
document.getElementById("live-example").appendChild(el)
el.dataset.toggle = 0
el.addEventListener("click", function () {
  var strValue = el.dataset.toggle
  el.dataset.toggle = (parseInt(strValue) + 1) % 2
})
```
```coffee live #example
el = document.createElement("div")
el.className = "test"
this.appendChild el
el.dataset.toggle = 0
el.addEventListener "click", ->
	strValue = el.dataset.toggle
	el.dataset.toggle = (parseInt(strValue) + 1) % 2
```

More information

and done.