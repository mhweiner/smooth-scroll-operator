# smooth-scroll-operator
A dead simple and lightweight library to animate the scroll of the window or any HTMLElement.

No need to ask, he's a [smooth operator](https://www.youtube.com/watch?v=4TYv2PhG89A)...

- Really small filesize, only 1 dependency (~3KB uncompressed, including dependencies). 
- Supports Beizer Curves and custom easing functions, with predefined values. 
- Custom timing function (uses RAF by default if available) 
- Pause/resume/stop/restart 
- Animations respect the actual clock, so no matter the frame rate, the animation will still properly last the appropriate amount of time.

## Installation

NPM:

```bash
npm i smooth-scroll-operator
```

browser:

You can use either `smooth-scroll-operator.umd.js` or `smooth-scroll-operator.min.umd.js` 
[from the latest release](https://github.com/mhweiner/smooth-scroll-operator/releases) in a `script` tag.
This includes all dependencies.

```html
<script src="smooth-scroll-operator.min.umd.js"></script>
<script>
    SmoothScrollOperator.scrollY(window, 500);
</script>
```

## Example Usage

```javascript
import sso from 'smooth-scroll-operator';

let el = document.querySelector('.myElement');

//scroll el to 500
sso.scrollY(el, 500);

// Scroll to y = 500, with a duration of 200ms, and a custom cubic-bezier easing function:
sso.scrollY(el, 500, {
  duration: 200,
  easing: [0.42, 0.0, 0.58, 1.0]
});

// Scroll to y = 500, with a duration of 200ms, and a pre-defined easing function.
sso.scrollY(el, 500, {
  duration: 200,
  easing: sso.EASING.EASE_IN
});

//scroll window
sso.scrollY(window, 500);

//Scroll and then pause animation 300ms later.
let animation = sso.scrollY(el, 500);

setTimeout(() => {
  
  animation.pause();
  
}, 300);

//resume 400ms later.
setTimeout(() => {
  
  animation.resume();
  
}, 400);

//Scroll and then immediately stop animation
let animation = sso.scrollY(window, 500);

animation.stop();
```

## API

### `scrollY({HTMLElement|window} el, {number} targetY, {object=} options)`

Animates the scrolling of a given element (scrolls to target position). Returns an instance of [DOMAnimate](https://github.com/mhweiner/dom-animate).
You can stop, pause, or resume the animation by calling `.stop()`, `.pause()`, or `.resume()`, respectively, on the returned instance.

#### `{HTMLElement} el`

The element to scroll. Can be `window`.

#### `{number} targetY`

The y position to animate/scroll to in pixels.

#### `{object=} options`

An optional map of parameters:

###### `{integer} duration`

Animation duration in milliseconds. (Default: `400`)

###### `{array} easing`

An array to pass to the cubic-bezier easing function. (Default: `SmoothScrollOperator.EASE_IN_OUT`)

###### `{function} onComplete`

A callback function that is called when the animation is finished.

## Constants

### `EASING`

`smooth-scroll-operator` ships with a small Bezier Curve library:

- `EASING.EASE`
- `EASING.EASE_IN`
- `EASING.EASE_OUT`
- `EASING.EASE_IN_OUT`
- `EASING.LINEAR`

## License

[MIT](https://github.com/mhweiner/smooth-scroll-operator/blob/master/LICENSE). Free to use in all your things!

## Contribution

DO IT! PR's welcome. Need to add testing, linting, and support for `scrollX`, or both x/y at the same time.