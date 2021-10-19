---
id: configuration
title: Configuration (WIP)
description: Oissu configuration
sidebar_position: 3
sidebar_label: Configuration
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
