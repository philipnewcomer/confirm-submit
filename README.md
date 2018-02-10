# confirm-submit
A simple little helper to show confirmation prompts for buttons and forms before submitting.

## Installation

`npm install --save-dev confirm-submit`

## Requirements

- jQuery

## Usage

```javascript
require('confirm-submit');
```
...or simply load `src/confirm-submit.js` in your app.

Create a link, button, or form that requires user confirmation before submitting. Add a data attribute named `confirm-submit`, which contains the message that should be shown to the user in the alert.

```html
<a href="http://domain.com" data-confirm-submit="Are you sure you want to leave?">
    Leave Site
</a>
```

You can use it in conjunction with a Javascript event listener on the click action:

```html
<a onclick="javascript:alert('Launching missing now!')" data-confirm-submit="Are you sure you want to launch a missile?">
    Launch Missile
</a>
```

It even works when used directly on form tags:

```html
<form data-confirm-submit="Are you sure you want to submit this form?">
    <input type="submit" value="Submit">
</form>
```
