# Forms

## Inputs

The general text input.

```html
<form autocomplete="nope">
    <input autocomplete="false" name="hidden" type="text" style="display:none;">
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Your email"  autocomplete="nope"/>
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Your password"  autocomplete="nope"/>
    </div>
    <div class="checkbox">
        <input type="checkbox" id="checkbox-1">
        <label for="checkbox-1">
            I consent to the terms and conditions.
        </label>
    </div>
    <div class="radio">
        <input type="radio" name="radios" id="radio-1" value="option1" >
        <label for="radio-1">
            First option
        </label>
    </div>
    <div class="radio">
        <input type="radio" name="radios" id="radio-2" value="option2" checked>
        <label for="radio-2">
            Second option
        </label>
    </div>
    <input type="button" class="button" value="Submit">
</form>
```

### Textarea

For longer texts use the `<textarea>`.

```html
<div class="form-group">
    <label for="textarea">Message</label>
    <textarea rows="3" name="textarea" placeholder="Your message..."></textarea>
</div>
```