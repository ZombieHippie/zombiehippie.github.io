---
layout: post
title: First Post
---

{{ page.title }}
================

<p class="meta">2 Dec 2015 - Cheek Labs</p>

---
ID: {{ page.id }}
title: {{ page.title }}
---


This is just a test.

$example

```coffee
#$example
el = document.createElement("div")
el.className = "test"
this.appendChild el
el.dataset.toggle = 0
el.addEventListener "click", ->
	strValue = el.dataset.toggle
	el.dataset.toggle = (parseInt(strValue) + 1) % 2
```

```css
//$example
.test { width: 100px; height: 100px; background: smokewhite;
	transition: background 2s;}
.test[data-toggle="1"] { background: darkgrey; }
```

More information

and done.