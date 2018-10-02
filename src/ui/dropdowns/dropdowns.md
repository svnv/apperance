# Dropdowns

The native DOM `<select>` element cannon be styled consistently accross browsers so we have to make something that acts like a dropdown instead.

## Navigational dropdowns
```html
<div class="dropdown dropdown-open-on-hover" role="navigation">
    Menu visible on hover
    <ul role="menu">
        <li role="menuitem"><a href="#">First menu item</a></li>
        <li role="menuitem"><a href="#">Middle optiont</a></li>
        <li role="menuitem"><a href="#">I'm the last menu item</a></li>
    </ul>
</div>

<div class="dropdown" role="navigation">
    Menu closed
    <ul role="menu">
        <li role="menuitem"><a href="#">First menu item</a></li>
        <li role="menuitem"><a href="#">Middle optiont</a></li>
        <li role="menuitem"><a href="#">I'm the last menu item</a></li>
    </ul>
</div>

<div class="dropdown dropdown-open" role="navigation">
    Menu open
    <ul role="menu">
        <li role="menuitem"><a href="#">First menu item</a></li>
        <li role="menuitem"><a href="#">Middle optiont</a></li>
        <li role="menuitem"><a href="#">I'm the last menu item</a></li>
    </ul>
</div>

```

## Form dropdowns
```html
<div class="dropdown dropdown-open-on-hover" role="listbox">
    Options open
    <ul>
        <li role="option"><a href="#">First option</a></li>
        <li role="option"><a href="#">Middle option</a></li>
        <li role="option"><a href="#">I'm the last option</a></li>
    </ul>
</div>

<div class="dropdown" role="listbox">
    Options closed
    <ul>
        <li role="option"><a href="#">First option</a></li>
        <li role="option"><a href="#">Middle option</a></li>
        <li role="option"><a href="#">I'm the last option</a></li>
    </ul>
</div>

<div class="dropdown dropdown-open" role="listbox">
    Options open
    <ul>
        <li role="option"><a href="#">First option</a></li>
        <li role="option"><a href="#">Middle option</a></li>
        <li role="option"><a href="#">I'm the last option</a></li>
    </ul>
</div>
```