---
id: notice
title: Notice
sidebar_position: 3
---

Notices are useful to display a banner, giving warnings or info about the content. You can also turn notices into prompts for readers to click confirm before continuing.

```html
<blockquote data-notice-type="cw" data-notice-prompt="true">
    <h2>Content Warning!</h2>
    <p>
        Major discussions of cult, depictions of harrassment, as well as heavy mentions of cannibalism, mutilation, violence, bullying, child abuse, and depression.
    </p>
</blockquote>
```

## Options

### `data-notice-type`

Required to create a notice. Can be `info` or `cw` (Content Warning)

### `data-notice-prompt`

Turn notice into prompt where readers have to click "I understand" to continue. Useful for strong content warnings.
