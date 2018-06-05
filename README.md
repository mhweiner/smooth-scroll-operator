# smooth-scroll-operator
A dead simple and lightweight smooth scroll animation using requestAnimationFrame. Scroll any element. Comes with bezier curve support and a small library of pre-defined easing functions.

No need to ask, he's a [smooth operator](https://www.youtube.com/watch?v=4TYv2PhG89A)...

## Installation

```bash
npm i smooth-scroll-operator
```

## Example Usage

```javascript
import sso from 'smooth-scroll-operator';

let el = document.querySelector('.myElement');

sso.scrollY(el, 500);
```

Scroll to y = 500, with a duration of 200ms, and a custom cubic-bezier easing function:

```javascript
sso.scrollY(el, 500, 200, [0.42, 0.0, 0.58, 1.0]);
```

Scroll to y = 500, with a duration of 200ms, and a pre-defined easing function.

```javascript
sso.scrollY(el, 500, 200, sso.EASE_IN_OUT);
```

## API

### `scrollY([DOMElement] el, [int=] targetY, [int=] duration, [array=] easing)`

Animates DOM element `el`'s `.scrollTop` property to `targetY`, for duration `duration`, using easing specified by `easing`.

#### [DOMElement] el

The element to scroll.

#### [int=] targetY

The y position to animate/scroll to. Defaults to 0.

#### [int=] duration

Transition (animation) duration in milliseconds.

#### [array=] easing

An array to pass to the cubic-bezier easing function. You can also use the following predefined constants:

```javascript
SmoothScrollOperator.EASE;
SmoothScrollOperator.EASE_IN;
SmoothScrollOperator.EASE_OUT;
SmoothScrollOperator.EASE_IN_OUT;
SmoothScrollOperator.LINEAR;
```

## License

[MIT](https://github.com/mhweiner/mr-router/blob/master/LICENSE). Free to use in all your things!

## Contribution

DO IT! PR's welcome. Need to add testing, linting, and support for `scrollX`, or both x/y at the same time.