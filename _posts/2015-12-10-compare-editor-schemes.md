---
layout: post
title: Compare Editor Schemes
---

{{ page.title }}
================

<p class="meta">10 Dec 2015 - Scholars House</p>

Here I'm looking at different styling options for displaying code. I get really caught up on styling things for "just-the-right" feel.

I'm also playing with blockquote styling and headings. I'm really looking towards making my fonts serif in Georgia, Times New Roman, Lora, or default `serif`, because serif fonts are so romantic.

In reality, I wish my blog could read and feel as some of my favorite books. I have a feeling that people prefer serif on paper, and sans-serif on screen though :-/ (no citation, do not cite this).

Many days, I've wanted to design a blog which relied entirely on the default user agent stylesheet, but alas, that would just look awful (sorry [webkit ua designers](http://trac.webkit.org/log/trunk/Source/WebCore/css/html.css)).

I also contemplated having my fonts be monospace, because I [loved the design of Guillermo Rauch's blog posts](http://rauchg.com/slackin/), but I would rather not take the chance my readers be uncomfortable.

-----

Here's some code written in the most important language, JavaScript.

<div id="live-target"></div>

```javascript live #target
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
  }
})
```

Here's some normal JavaScript.

```javascript
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
  }
})
```

<script src="https://embed.tonicdev.com" data-element-id="my-element"></script>

<!-- anywhere else on your page -->
<div id="my-element">
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
  }
})</div>

Actually, in all honesty, I don't know what kind of style I want at this point. I feel like this yellow on `whitesmoke` is a little tough on the eyes...

![Scheme inspired by tonic](/images/2015-12-10-scheme-inpired-by-tonic.png)
