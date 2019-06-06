# smooth-scroll-operator
A dead simple and lightweight smooth scroll animation. Scroll any element. Comes with bezier curve support and a small library of pre-defined easing functions.

Animations respect the actual clock, so no matter the frame rate, the animation will still properly last the appropriate amount of time.

Animations are performed using `window.requestAnimationFrame`.

No need to ask, he's a [smooth operator](https://www.youtube.com/watch?v=4TYv2PhG89A)...

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
<script src="./path/to/smooth-scroll-operator.min.umd.js"></script>
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
  easing: sso.EASE_IN
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

### `scrollY({HTMLElement} el, {number} targetY, {object=} options)`

Animates the `.scrollTop` property of a given element (scrolls to target position). Returns an instance of [DOMAnimate](https://github.com/mhweiner/dom-animate).
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

### Bezier Curve Easing Functions

`EASE`, `EASE_IN`, `EASE_OUT`, `EASE_IN_OUT`, `LINEAR`

## License

[MIT](https://github.com/mhweiner/mr-router/blob/master/LICENSE). Free to use in all your things!

## Contribution

DO IT! PR's welcome. Need to add testing, linting, and support for `scrollX`, or both x/y at the same time.