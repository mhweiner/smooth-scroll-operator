import DOMAnimateProperty from 'dom-animate-property';

export default class SmoothScrollOperator {

  static get EASE() {
    return [0.25, 0.1, 0.25, 1.0];
  }

  static get EASE_IN() {
    return [0.42, 0.0, 1.00, 1.0];
  }

  static get EASE_OUT() {
    return [0.00, 0.0, 0.58, 1.0];
  }

  static get EASE_IN_OUT() {
    return [0.42, 0.0, 0.58, 1.0];
  }

  static get LINEAR() {
    return [0.00, 0.0, 1.00, 1.0];
  }

  /**
   * Animate scrolling element to position. Possible options:
   * [HTMLElement] el
   * [int=] target
   * [int=] duration (default: 400)
   * [array=] easing (default: SmoothScrollOperator.EASE_IN_OUT)
   * [function=] onDone (default: null)
   * @param options
   */
  static scrollY(options) {

    //defaults
    if (typeof options.el !== 'object') {

      throw 'el is required and must be an object';

    }
    options.target = options.target || 0;
    options.duration = options.duration === undefined ? 400 : options.duration;
    options.easing = options.easing || SmoothScrollOperator.EASE_IN_OUT;

    //validate target
    let maxTarget = options.el.scrollHeight - options.el.offsetHeight;
    //constrain to max
    options.target = options.target > maxTarget ? maxTarget : options.target;

    let startPosition = options.el.scrollTop;
    let animator = new DOMAnimateProperty();

    return animator.animate(options.el, 'scrollTop', startPosition, options.target, {
      onDone: options.onDone,
      easing: options.easing,
      duration: options.duration
    });

  }

}