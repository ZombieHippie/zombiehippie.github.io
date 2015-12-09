---
layout: post
title: Tonic Test
---

{{ page.title }}
================

<p class="meta">09 Dec 2015 - Cheek Lab</p>

Very cool service called TonicDev which allows you to embed a Node.js runtime into a webpage and analyze the object properties.

Here is a test of a simple embedded tonic environment.

<script src="https://embed.tonicdev.com" data-element-id="my-element"></script>

<!-- anywhere else on your page -->
<div id="my-element">
function foo()
{
    return "hello world"
}

foo();
</div>

For fun, here is another example of an embedded codepen that I made while designing my first blog.
<p data-height="400" data-theme-id="0" data-slug-hash="pKAkf" data-default-tab="result" data-user="ZombieHippie" class='codepen'>See the Pen <a href='http://codepen.io/ZombieHippie/pen/pKAkf/'>Blog skeleton</a> by Cole R Lawrence (<a href='http://codepen.io/ZombieHippie'>@ZombieHippie</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

And here is another example of my embedded editor:

<div id="live-test"></div>

```html live #test
    <p>
    <pre>Hello, hello</pre>
    <pre style="color: blue;">Hello, hello</pre>
    <p>
```
