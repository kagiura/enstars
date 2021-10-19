---
id: formatting
title: Formatting
description: How to format stories in a way Oissu picks it up
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const H = ({children}) => (
  <span
    style={{
      backgroundColor: '#FF8D991A',
      borderRadius: '2px',
      padding: '0.2rem',
      fontWeight: 700
    }}>
    {children}
  </span>
);

export const TLCredits = ({story, storylink, tler, tlerlink}) => (
    <p style={{
        textAlign: 'right',
        fontSize: '0.9em',
        paddingRight: '0.5em',
        borderRight: '2px solid var(--ifm-toc-border-color)'
        }}>
        <a href="{storylink}">{story}</a> translation by <a href="{tlerlink}">{tler}</a>
    </p>
);


:::warning Before you start!
Oissu uses the **HTML editor**, which makes its markup invisible on platforms that don't support it. Make sure to [switch to the HTML editor](https://www.tricksschool.com/2015/09/how-to-change-rich-text-editor-to-html-editor-in-tumblr.html) before continuing. [Here's a short guide on how to format your text in HTML.](https://unwrapping.tumblr.com/post/97611392472/tumblr-text-formatting)
:::

Start your stories with `<div class="oissu">` and end them with `</div>`

```html
<div class="oissu">
    <p><b>Keito:</b> Sakuma-san!
       We’ve got a situation—
       I need you to lend me a hand!</p>
    <p><b>Rei:</b> Eh~…?</p>
    ...
</div>
```
<TLCredits
storylink="https://reikeip.tumblr.com/post/660986731112349696/crossroad-chaos-1"
story="Crossroad / Chaos 1"
tlerlink="https://reikeip.tumblr.com/"
tler="reikeip" />

## Story options

You can customize a few options by adding **atributes** to the main `<div>` tag.

```html
<div class="oissu"
     data-oissu-display="ymnsk-winter"
     data-oissu-next="https://fortunebanquet.tumblr.com/post/643595529887137792/cinema-theater-ch2 Chapter 2"
>
    <p><b>Hinata:</b>
       To everyone passing by, hello~! ☆</p>
    <p>I’m Aoi Hinata!</p>
    <p><b>Yuuta:</b> And I’m Aoi Yuuta!</p>
</div>
```

<TLCredits
storylink="https://fortunebanquet.tumblr.com/post/643505290678009856/cinema-theater-ch1"
story="Cinema Theater / Chapter 1"
tlerlink="https://fortunebanquet.tumblr.com/"
tler="fortunebanquet" />

## Post formatting

Oissu markup is invisible, meaning on platforms that don't support custom HTML (Tumblr app, mobile site etc.) the posts will look like regular text posts. Here's a list of formatting Oissu recognizes.

### Dialogue
Put each line in a seperate paragraph (`<p>`) tag. Bold (`<b>` or `<strong>`) the common name and the colon (:). You don't have to repeat the name every line.

```html
<p>
    <b>Tomoya:</b> W-W-What are we gonna
    to do now, Sena-senpai!?
</p>
<p>
    This <em>isn't</em> how you said things
    would go! You swore that it'd be too
    early for anyone to see us!
</p>
```

### Images
Both `<img>` and `<figure>` tags work. You can just add an image to your post normally.

```html
<figure>
    <img src="https://tsukina.ga/path/to/image.png"></img>
</figure>
```

### Narration
Use `<blockquote>` to denote any part of the story that is not a spoken line by any character. Include `<p>` tags for each individual line.
- If the text in your `<p>` tag starts with <H>Location:</H>, <H>Season:</H>, or <H>Time:</H>, the block will be formatted differently than a narrated line (see example below)
- If you want to turn a line into a full-width block, use `<p class="os-block">Block content</p>`

```html
<!--Smart Narration (Location, Season, and Time)-->
<blockquote>
    <p><b>Season:</b> Summer</p>
    <p><b>Location:</b> Seisou Hall - First Floor Hallway</p>
</blockquote>

<!--Narration-->
<blockquote>
    <p>A few minutes later, Seisou Hallway</p>
</blockquote>
```

## Example

[![](/img/reloaded_watatomo.png)](/img/reloaded_watatomo.png)

<details><summary>Final Results (HTML)</summary>

```html
<div class="oissu"

>
    <!--Smart Narration (Supports Location, Season, and Time)-->
    <blockquote>
        <p><b>Season:</b> Summer</p>
        <p><b>Location:</b> Seisou Hall - First Floor Hallway</p>
    </blockquote>

    <!--Images (any format, that's not a <p>.
        just uploading on Tumblr also works)-->
    <figure>
        <img src="https://tsukina.ga/path/to/image.png">
    </figure>

    <!--Narration-->
    <blockquote>
        <p>A few minutes later, Seisou Hallway</p>
    </blockquote>

    <!--Dialogue (make sure the name and the colon (:) is bold)-->
    <p>
        <b>Tomoya:</b> W-W-What are we gonna
        to do now, Sena-senpai!?
    </p>
    <p>
        This <em>isn't</em> how you said things
        would go! You swore that it'd be too
        early for anyone to see us!
    </p>
    <p>
        But now we've been caught red-handed!
        And by <em>Nii~chan</em> of all people!
    </p>
    <p>
        <b>Izumi:</b> Haaa!? Could you watch it
        with the "Nii~chan" so close to my
        ear? It's getting me weirdly excited!
    </p>
</div>

```
</details>

<details><summary>Final Results (Normal Text)</summary>

> **Season:** Summer <br />
> **Location:** Seisou Hall - First Floor Hallway

![](/img/reloaded_cg.webp)

> A few minutes later, Seisou Hallway

**Tomoya:** W-W-What are we gonna
to do now, Sena-senpai!?

This *isn't* how you said things
would go! You swore that it'd be too
early for anyone to see us!

But now we've been caught red-handed!
And by *Nii~chan* of all people!

**Izumi:** Haaa!? Could you watch it
with the "Nii~chan" so close to my
ear? It's getting me weirdly excited!
</details>
