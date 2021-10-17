---
icon: rocket
label: Getting Started
order: -2
---

# Getting Started

Oissu can be installed with a single line of code, and it's very easy to get started! Check the sidebar for more detail on each topic.

---

## Installation

Head over to your theme editor and access the HTML editor, and insert this line of code right after the `<head>` tag.

```HTML
<script src="https://r.tsukina.ga/oissu"></script>
```

=== Example on how it should look
```HTML
<!-- Theme credits, source code, etc -->
<html>
<head>
    <script src="https://r.tsukina.ga/oissu"></script>
    ...more code down below...
```
===

That's it! To check if the installation has worked, try [opening your browser's console :icon-link-external:](https://support.monday.com/hc/en-us/articles/360002197259-How-to-Open-the-Developer-Console) and you should see a little secret!

---

## Usage

!!!warning Before you start!
Oissu uses the **HTML editor**, which makes its markup invisible on platforms that don't support it. Make sure to switch to the HTML editor to before continuing.
!!!

In your Tumblr posts, start your story with <span style="display: inline-block;">`<div class="oissu">`</span> and end them with `</div>` to let Oissu know all the content between these two tags should be marked as dialogue. Include any images, warnings, narration you have between the two tags. Now try refreshing your page and see Oissu come to life!

---

### Formatting

Oissu markup is invisible, meaning on platforms that don't support custom HTML (Tumblr app, mobile site etc.), the posts will look like regular posts. Here's a short example on how to format stories in ways that looks good on every platform, and lets Oissu recognize your dialogue properly.

+++ Example HTML
```html
<div class="oissu">
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
+++ Oissu Display (Desktop)
[![](/resources/img/reloaded_watatomo.png)](/resources/img/reloaded_watatomo.png)
+++ Rich Text Display (Mobile)
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
+++

---

## Customization

Oissu settings can be split into 2 parts: **blog settings** and **story settings**
- **Blog Settings** are used to customize the look and feel of Oissu on your blog
[!ref Blog Settings](customization/blog.md)
- **Story Settings** are used to customize additional details on specific stories, such as the character icons, navigation links (Previous/Next/Directory)
[!ref Story Settings](customization/story.md)

---

## Extensions

Oissu has a lot of extensions that helps improve your reading experience! You don't need to install anything, as all of them are enabled by default.

- [Display (Chatfic Mode)](extensions/display.md)
- [Fullscreen](extensions/fullscreen.md)
- [Footnotes (Translator's Notes)](extensions/footnotes.md)
- [Rich Content (Images/CG)](extensions/rich.md)
- [Narration & Smart Narration](extensions/narration.md)
- [Notice (Content Warnings)](extensions/notice.md)
- [Navigation Links](extensions/nav.md)

More extensions will be implemented soon!
