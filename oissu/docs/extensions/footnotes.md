---
id: footnotes
title: Footnotes
sidebar_position: 1
---

Footnotes are useful ways to insert notes related to the story (Translation notes).

<p class="TLCredits"><b>Translation used:</b> <a href="https://chronoscore.tumblr.com/post/664408030684889088/princess-kaguyaget-along-1">Princess Kaguya / Get Along 1</a> translation by <a href="https://chronoscore.tumblr.com/">chronoscore</a></p>

## Implementing Footnotes

### In the story

In any part of the story you'd like to include a footnote, use `<sup>[#]</sup>`

```html
<p>
    <b>Hiyori:</b> I’m getting you into the mindset of performing Princess Kaguya! Our retelling is about granting the wish of our friend just when they’re about to graduate—
</p>
<p>
    It’s all part of getting into your role. It’ll be a problem if you can’t answer to unreasonable demands <sup>[1]</sup> like that, you know?
</p>
```

### At the end of the post

Include an ordered list with the class `os-note`

```html
<ol class="os-note">
    <li> <!-- #1 -->
        another reference to princess kaguya! okay story time: Princess Kaguya, or originally titled The Tale of the Bamboo Cutter, is about Kaguya, who was discovered as a baby inside a glowing bamboo plant. she attracts five suitors who want to marry her, and kaguya, in response, gives them impossible tasks to chase them away. keep in mind that all of them still tried to fulfil her tasks; hence hiyori’s scolding
    </li>
</ol>
```

Oissu automatically numbers and adds the TL note as a little hover effect

## Example
<!--
<script>
$(function(){oissu.initialize()});
</script>-->

<div class="oissu">
    <p>
        <strong>Tatsumi:</strong> Fufu, what kind of room were you two expecting?
    </p>
    <p>
        Nowadays, shows like Bogie Time use the old dorm as temporary
            lodging. It looks like cleaners come through quite frequently.
    </p>
    <p>
        <strong>Arashi:</strong> Ufufu, then that’s just perfect for our training camp ♪
    </p>
    <p>
        But you gave us such a short time to get ready. I was in a frenzy
            rushing to grab all my makeup and beauty supplies from my usual
            room!
    </p>
    <p>
        <b>Hiyori:</b> I’m getting you into the mindset of performing Princess Kaguya! Our retelling is about granting the wish of our friend just when they’re about to graduate—
    </p>
    <p>
        It’s all part of getting into your role. It’ll be a problem if you can’t answer to unreasonable demands <sup>[1]</sup> like that, you know?
    </p>
</div>

<ol class="os-note">
    <li>
        another reference to princess kaguya! okay story time: Princess Kaguya, or originally titled The Tale of the Bamboo Cutter, is about Kaguya, who was discovered as a baby inside a glowing bamboo plant. she attracts five suitors who want to marry her, and kaguya, in response, gives them impossible tasks to chase them away. keep in mind that all of them still tried to fulfil her tasks; hence hiyori’s scolding
    </li>
</ol>
