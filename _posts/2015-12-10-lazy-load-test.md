---
layout: post
title: Lazy Load Webpack Test
---

{{ page.title }}
================

<p class="meta">10 Dec 2015 - Scholars House</p>

[Webpack](https://webpack.github.io) is by far one of my favorite discoveries of this year due to the improvements it has made to my front-end JavaScript organization.

I used to do a lot of coding in CoffeeScript, because I could write the same code with fewer keystrokes, fewer braces, and arguably easier to read syntax—especially in reference to class creation, but since the growing support for BabelScript and ES6, I have been writing more ES6 and less CoffeeScript.

Whoops, this isn't about ES6 versus CoffeeScript though.

This is about how Webpack interacts with all kinds of JavaScript preprocessed languages. I can take an old project written in CoffeeScript, configure it for webpack, and then continue building new components in ES6! *Of course, this development cycle of multiple languages is completely detrimental to contribution support, but it's a fairytale to know that my Coffee isn't spilt.

In this post, we are testing the [code-splitting capabilities of webpack](https://webpack.github.io/docs/code-splitting.html), which allows us to have less code load into our posts when we do not have live editors and and other exciting interactive components that require jquery or codemirror.

If a page has no live editing code, but it does have code snippets, the entire CodeMirror library probably does not need to be loaded, and furthermore, if none of the examples have HTML or CSS, then we probably would not need to load the syntax libraries for those either.

-----

Here's some `go`.

```golang
// Interface borrowed from sort package
type Interface interface {
    // Len is the number of elements in the collection.
    Len() int
    // Less reports whether the element with
    // index i should sort before the element with index j.
    Less(i, j int) bool
    // Swap swaps the elements with indexes i and j.
    Swap(i, j int)
}
```

<script src="https://embed.tonicdev.com" data-element-id="my-element"></script>

<!-- anywhere else on your page -->
<div id="my-element">
function foo()
{
    return "hello world"
}

foo();
</div>

