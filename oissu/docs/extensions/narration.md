---
id: narration
title: Narration
sidebar_position: 2
---

Narration is a way to separate non-dialogue text from normal spoken lines. In general, Oissu uses `<blockquote>` to indicate non-dialogue text.

## Formatted lines

**Location**, **Season**, and **Time** are included specifically to aid Ensemble Stars!! Translations.

```html

<blockquote>
    <p>Season: Winter</p>
    <p>Location: SS Stage?</p>
</blockquote>

<figure>
    <img src="/tl/img/enst/sanctuary/1/1.jpg">
</figure>

<blockquote>
    <p>In a dream, or perhaps a vision?</p>
</blockquote>

```
<!---
<script>
$(function(){oissu.initialize()});
</script>
--->
<div class="oissu">
<blockquote>
    <p>Season: Winter</p>
    <p>Location: SS Stage?</p>
</blockquote>

<figure>
    <img src="https://watatomo.github.io/tl/img/enst/sanctuary/1/1.jpg" />
</figure>

<blockquote>
    <p>In a dream, or perhaps a vision?</p>
</blockquote>

<p><b>Tomoya:</b> "♪ ~ ♪ ~ ♪"</p>
<p>(Oh—)</p>
<p>(This is another dream, huh.)</p>
</div>

<p class="TLCredits"><a href="https://watatomo.github.io/tl/post/sanctuary/1/">Sanctuary / Prologue</a> translation by <a href="https://watatomo.github.io/tl/">Ren</a></p>

## Extra options

Add these options as classes on the `<blockquote>` element.

### `os-block`

Displays narration in block format

### `os-exclude`

Exclude block from Oissu rendering

:::tip

`os-exclude` works on any element! It's very useful for extra support for non-Oissu rendering, like mobile app / dashboard

:::
