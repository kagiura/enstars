---
id: configuration
title: Configuration
description: Oissu configuration
sidebar_position: 4
---

Oissu can be configured through the theme customization page on Tumblr by placing this extra line of code after the original Oissu script:

```html
<meta name="text:Oissu Settings" content=""></meta>
<script oissu>`{text:Oissu Settings}`</script>
```

<details><summary>Example</summary>

```html
<!-- Theme credits, source code, etc -->
<html>
<head>
    <script src="https://r.tsukina.ga/oissu"></script>
    <meta name="text:Oissu Settings" content=""></meta>
    <script oissu>`{text:Oissu Settings}`</script>
    ...more code down below...
```

</details>

## General Options

### `no-selection`

Disables highlighting to select text, if you want to stop people from copying text from your stories.

Default: `true`

### `chat-format`

Enables option to open in chat format in toolbar

Default: `false`

### `fullscreen`

Enables option to open in fullscreen in toolbar

Default: `false`

### `navigation`

Enables option to show navigation bar in toolbar

Default: `false`

## Styling

Style any Oissu variable in the list below (and a bit more).

```yml
styles:
    text-font: "14px/1.3 'Karla'"
        # fontSize/lineHeight fontFamily
    text-color: "#4b545e"
    link-color: "#294769"
    link-color__hover: "#23558e"
    background-color: "#eef0f3"
    background-color__hover: "#e5e9ee"
    background-secondary-color: "#dbdfe7"
    background-secondary-color__hover: "#ced3dd"
    animation-duration: "0.2s"
        # set to 0s if you want to disable animations
    border-color: "#c5ccd2"
    toolbar-icon-color: "#4b545e"
    bubble-color: "#fbfbfe"
    identifier-color: "#5e6978"
```

## Default Story Settings

Set default attributes for all Oissu instances on your blog. This maybe useful if you want to use a consistent iconpack throughout your blog, or have a fixed directory link. (See available options in [Story Options](story_options))

```yml
defaults:
    display: initials
    display-custom: initials
    prev: https://example.com/prev Prev
    next: https://example.com/next Next
    directory: https://example.com/dir Directory
```
