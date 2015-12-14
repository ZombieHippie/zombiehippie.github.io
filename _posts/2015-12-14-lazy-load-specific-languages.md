---
layout: post
title: Lazy Load Specific Languages
---

{{ page.title }}
================

<p class="meta">14 Dec 2015 - Scholars House</p>


This is mostly going to be another test, but I'm very happy that this is working out. There were a lot of problems with extracting the correct bundles, but now I'm fairly comfortable that the bundles are being geneerated properly. There are many bundles now, each one corresponds to a mode of CodeMirror so we only need to load the mode syntax highlighters that are featured on the page. Certain performance improvements may be possible, or I might lean towards just using the jekyll `highlighter` or `pigments`.

Oh well, here's some examples of lazy loading only specific language modes:

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

Here's some Java

```java
/*
 * Nine highly object oriented lines of code. 
 */
public class Apple extends Fruit {
  private String type;
  public Apple (String type) {
    this.type = type;
  }
  public String getType () {
    return this.type;
  }
}
```

Here's some `jade`.

```jade
html
  head
    meta(charset="utf-8")
    meta(name="viewport" content="initial-scale=1, maximum-scale=1")
    style.
      body {
        font-family: sans-serif;
      }
  body
    h1 Title of Page
    p.
      fascinating story that you never want to end.
```

Later on, I would like to only load the full CodeMirror if there are live editors, since CodeMirror has a standalone runmode.
