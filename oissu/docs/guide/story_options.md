---
id: story_options
title: Story Options
description: Attributes you can pass to Oissu
sidebar_position: 3
---

## Options

You can customize a few options by adding **attributes** to the main `<div>` tag. All options are prefixed with `data-oissu-`.

### `data-oissu-prev`, `data-oissu-next`, `data-oissu-directory`

Define a link to use on the navigation bar with the syntax
```
data-oissu-{option}="<link> [link name]"
```
```html title="Example"
<div class="oissu"
     data-oissu-display="ymnsk-winter"
     data-oissu-next="https://fortunebanquet.tumblr.com/post/643595529887137792/cinema-theater-ch2 Chapter 2"
     data-oissu-directory="https://fortunebanquet.tumblr.com/directory Directory"
>
    <p><b>Hinata:</b>
       To everyone passing by, hello~! ☆</p>
    <p>I’m Aoi Hinata!</p>
    <p><b>Yuuta:</b> And I’m Aoi Yuuta!</p>
</div>
```

<p class="TLCredits"><a href="https://fortunebanquet.tumblr.com/post/643505290678009856/cinema-theater-ch1">Cinema Theater / Chapter 1</a> translation by <a href="https://fortunebanquet.tumblr.com/">fortunebanquet</a></p>

### `data-oissu-display`

Iconpack for use in the story.

:::info
Currently there are 4 iconpacks: `default`, `idol`, `initials`, and `ymnsk-winter`. More will be available in the future with a proper way to browse iconpacks.
:::

Default: `default`

### `data-oissu-display-custom`

Define with JSON array a custom set of icons for specific character.

```json
[
    {
      "commonname": "Mao",
      "fullname": "Mao Isara",
      "filename": "https://cdn.jsdelivr.net/gh/enstars/img/icon/mao.png"
    }
]
```

<p class="TLCredits">Ensemble Stars!! icon pack from the <a href="https://github.com/enstars/img">@enstars/img</a> repository</p>
