---
layout: post
title: This is a Jekyll Blog
---

{{ page.title }}
================

<p class="meta">05 Dec 2015 - Scholars House</p>

Bonjour et bienvenue,

Ceci est mon journal. This is my journal where I plan to post tutorials and help articles on learning to program. As of writing, I am a student of [Missouri State University](http://missouristate.edu) studying Computer Science. Previous to this coming semester, I was planning on also attaining a Masters of Business Administration, but I have decided against rushing into the MBA program until I have had ample years in the workforce.

Alongside tutorials and guides I also plan to post on projects that I have worked on or made progress on such as this blog itself.

To facillitate the interactivity of the content on this blog, I have implemented a live editing system which allows the reader to change front-end code and witness the outcome first hand, such as in the following examples.

### Live code editing examples

Here, we have the **preview** `div`, which parents `div#example`, `style`, and `script` tags.
<div id="live-example"></div>

> The id of the child `div` is based on the id of the container.

Then, here we have a CSS editor that is linked to the preview above. Try changing the color `skyblue` to another css color, to see your changes immediately reflected in the preview.

```css live #example
.test { width: 100px; height: 100px;
  background: skyblue;
  transition: background .4s;}
.test[data-toggle="1"] { background: lawngreen; }
```

In the same breath, you may change this javascript code to change how the html is interacted with. Today, I implemented a crude runtime error display that may not last as this blog is further developed.

```javascript live #example
var el = document.createElement("div")
el.className = "test"
el.innerText = "Click me"
document.getElementById("example").appendChild(el)
el.dataset.toggle = 0
el.addEventListener("click", function () {
  var strValue = el.dataset.toggle
  el.dataset.toggle = (parseInt(strValue) + 1) % 2
})
```

I'm not entirely certain how useful the live examples editing will be, especially as we watch how sites like [codepen.io](http://codepen.io) evolve their embedded capabilities.