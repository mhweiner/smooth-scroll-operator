# smooth-scroll-operator
A dead simple and lightweight smooth scroll animation using requestAnimationFrame. Scroll any element. Comes with bezier curve support and a small library of pre-defined easing functions.

No need to ask, he's a [smooth operator](https://www.youtube.com/watch?v=4TYv2PhG89A)...

## Installation

```bash
npm i smooth-scroll-operator
```

## Example Usage

```javascript
import SmoothScrollOperator from 'smooth-scroll-operator';

let el = document.querySelector('.myElement');

SmoothScrollOperator.scrollY(el, 500);
```

Scroll to y = 500, with a duration of 200ms, and a custom cubic-bezier easing function:

```javascript
SmoothScrollOperator.scrollY(el, 500, 200, [0.42, 0.0, 0.58, 1.0]);
```

Scroll to y = 500, with a duration of 200ms, and a pre-defined easing function.

```javascript
SmoothScrollOperator.scrollY(el, 500, 200, SmoothScrollOperator.EASE_IN_OUT);
```

## API

### `route()`

Routes based on current hash. Returns `true` if there was a match, `false` otherwise. Any callbacks set using `setOnHashChange` are ignored.

### `status()`

Returns an object which represents the current hash.

### `go(id {string}, params {object}, doNotRoute {boolean=})`

Changes the hash, which then is handled by onHashChange, which calls the controller.
- `doNotRoute` is optional. If true, the hash is changed **without** calling any matching controller, and `navigateAwayCallback` is ignored.

### `getObjFromHash(hash {string})`

Given the specified hash string, if a match was found in Router.routes, it returns an object, ex: `{id: 'blah', params:{}}`. Returns false if no
match was found.

### `setRoutes(map {object})`

Sets or adds the routes given. Will override if any duplicates are present. It `extends` the route map with `Object.assign()`.

```
mr.setRoutes({foo: 'bar'});
mr.setRoutes({boo: 'nar'});
mr.getRoutes(); // {foo: 'bar', boo: 'nar'}
```

### `setControllers(map {object})`

Sets or adds the controllers given. Will override if any duplicates are present. It `extends` the route map with `Object.assign()`.

```
mr.setControllers({foo: [function]});
mr.setControllers({boo: [function]});
mr.getControllers(); // {foo: [function], boo: [function]}
```

### `setOnHashChange([function])`

Sets a callback to fire on hash changes. If that callback returns `false`, then the hash change is undone (`window.history.go(-1)` is called). This is great for preventing loss of unsaved changes in a dialog box, for example.

### `clearRoutes()`

Clears the routes.

### `clearControllers()`

Clears the controllers.

## Route matching

For more details on how we match routes to/from hashes, please [see the documentation for RouteMatcher](https://github.com/cowboy/javascript-route-matcher).

## License

[MIT](https://github.com/mhweiner/mr-router/blob/master/LICENSE). Free to use in all your things!

## Contribution

DO IT! PR's welcome.
