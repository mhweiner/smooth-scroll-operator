# smooth-scroll-operator
A dead simple and lightweight smooth scroll animation. Scroll any element. Comes with bezier curve support and a small library of pre-defined easing functions.

Animations respect the actual clock, so no matter the frame rate, the animation will still properly last the appropriate amount of time.

Animations are performed using `window.requestAnimationFrame`.

No need to ask, he's a [smooth operator](https://www.youtube.com/watch?v=4TYv2PhG89A)...

## Installation

```bash
npm i smooth-scroll-operator
```

## Example Usage

```javascript
import sso from 'smooth-scroll-operator';

let el = document.querySelector('.myElement');

//scroll el to 500
sso.scrollY({
  el: el,
  target: 500
});

// Scroll to y = 500, with a duration of 200ms, and a custom cubic-bezier easing function:
sso.scrollY({
  el: el,
  target: 500,
  duration: 200,
  easing: [0.42, 0.0, 0.58, 1.0]
});

// Scroll to y = 500, with a duration of 200ms, and a pre-defined easing function.
sso.scrollY({
  el: el,
  target: 500,
  duration: 200,
  easing: SmoothScrollOperator.EASE_IN
});

//scroll window
sso.scrollY({
  el: window.document.body,
  target: 500
});
```

## API

### `scrollY([object] options)`

Animates the `.scrollTop` property of a given element (scrolls to target position).

Options:

#### [HTMLElement] el

The element to scroll.

#### [int=] target

The y position to animate/scroll to. Defaults to 0.

#### [int=] duration

Transition (animation) duration in milliseconds. Defaults to 400ms.

#### [array=] easing

An array to pass to the cubic-bezier easing function. You can also use the following predefined constants:

```javascript
SmoothScrollOperator.EASE;
SmoothScrollOperator.EASE_IN;
SmoothScrollOperator.EASE_OUT;
SmoothScrollOperator.EASE_IN_OUT;
SmoothScrollOperator.LINEAR;
```

Defaults to `SmoothScrollOperator.EASE_IN_OUT`.

#### [function] onDone

A callback function that is called when the animation is finished.

## License

[MIT](https://github.com/mhweiner/mr-router/blob/master/LICENSE). Free to use in all your things!

## Contribution

DO IT! PR's welcome. Need to add testing, linting, and support for `scrollX`, or both x/y at the same time.