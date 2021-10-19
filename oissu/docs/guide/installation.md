---
id: installation
title: Installation
description: Installing Oissu
sidebar_position: 1
---

:::tip

This guide won't cover navigating Tumblr and how to use its features, but links several other guides if you're stuck anywhere.

:::

## Quick Installation

Open your theme's [HTML editor](https://tumblr.zendesk.com/hc/en-us/articles/230778847-Custom-HTML), and insert this line of code right after the `<head>` tag.

```html
<script src="https://r.tsukina.ga/oissu"></script>
```
<details><summary>Example</summary>

```html
<!-- Theme credits, source code, etc -->
<html>
<head>
    <script src="https://r.tsukina.ga/oissu"></script>
    ...more code down below...
```

</details>

That's it! To check if the installation has worked, try [opening your browser's console](https://support.monday.com/hc/en-us/articles/360002197259-How-to-Open-the-Developer-Console) and you should see a little secret!

## Other Versions

Oissu uses GitHub releases to manage versions. https://r.tsukina.ga/oissu automatically updates to the latest stable version, but if you need to install other versions, use

```
https://cdn.jsdelivr.net/gh/enstars/oissu@version/dist/main.js
```

You can also see Oissu's source code on [GitHub](https://github.com/enstars/oissu). Contributions and PRs welcome!
