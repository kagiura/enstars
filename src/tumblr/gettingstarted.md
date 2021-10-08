---
icon: rocket
label: Getting Started
order: 10
---

# Getting Started

So you're interested in Oissu! Oissu can be installed in literally a single line of code, and it's very easy to get started! This page summarizes everything you need, but if there's any part you want more info, check out the sidebar to find more info on each parts.

---

## Installation

Head over to your theme editor and access the HTML editor, and insert this line of code right after the `<head>` tag.

```HTML
<script src="https://r.tsukina.ga/oissu"></script>
```

That's it! To check if installation has worked, try [opening your browser's console :icon-link-external:](https://support.monday.com/hc/en-us/articles/360002197259-How-to-Open-the-Developer-Console) and you should see a little secret!

---

## Usage

!!!warning Before you start!
Oissu utilizes the **HTML editor** to make its markup invisible on platforms that don't support it. Make sure to switch to the HTML editor before starting
!!!

In your Tumblr posts, start your dialogues with <span style="display: inline-block;">`<div class="oissu">`</span> and end them with `</div>` to let Oissu know all the content between these two tags should be marked as dialogue.

Now try refreshing your page and see Oissu come to life! You should see your dialogue wrapped up in a box, formatted to make it easier to read. Feel free to play around!

---

### Formatting

Oissu markup is invisible, meaning on platforms that don't support custom HTML (Tumblr app, mobile site etc.), the posts will look like regular posts. Here's a short example on how to format dialogues in ways that lets Oissu recognize your dialogue properly.

==- Example HTML
```html
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
```
==- Oissu (Desktop)
[![](/resources/img/reloaded_watatomo.png)](/resources/img/reloaded_watatomo.png)
==- Rich Text (Mobile)
> **Season:** Summer <br>
> **Location:** Seisou Hall - First Floor Hallway

![](/resources/img/reloaded_cg.webp)

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
===

---

## Customization

Oissu settings can be split into 2 parts: **blog settings** and **post settings**

=== Blog Settings

- Color themes
- Font size and style

[!ref Blog Settings](../customization/blog.md)
=== Story Settings

- Icon set for stories
- Navigation links (Previous/Next/Directory)
- Content warnings

[!ref Story Settings](../customization/story.md)
===

---

## Extensions

Oissu has a lot of extensions that helps improve your reading experience! Extensions are all included in the code, but all of them can be enabled or disabled up to your liking!

- [Display (Chatfic Mode)](extensions/display.md)
- [Fullscreen](extensions/fullscreen.md)
- [Footnotes (Translator's Notes)](extensions/footnotes.md)
- [Rich Content (Images/CG)](extensions/rich.md)
- [Narration & Smart Narration](extensions/narration.md)
- [Notice (Content Warnings)](extensions/notice.md)
- [Navigation Links](extensions/nav.md)

More extensions will be implemented soon!
