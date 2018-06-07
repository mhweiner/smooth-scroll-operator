import BezierEasing from 'bezier-easing';

export default class Index {

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
    options.easing = options.easing || this.EASE_IN_OUT;

    //validate target
    let maxTarget = options.el.scrollHeight - options.el.offsetHeight;
    //constrain to max
    options.target = options.target > maxTarget ? maxTarget : options.target;

    let easingFunction = BezierEasing.apply(undefined, options.easing);

    let raf = (function(){
      return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
    })();

    function move(pos) {

      options.el.scrollTop = pos;

    }

    function getCurrentPosition() {

      return options.el.scrollTop;

    }

    let startPosition = getCurrentPosition();
    let startTime = Date.now();
    let endTime = startTime + options.duration;
    let totalDelta = target - startPosition;

    function animateScroll() {

      let currentTime = Date.now();
      let timeElapsed = currentTime - startTime;
      let percentageTimeElapsed = timeElapsed / options.duration;
      let percentageChange = easingFunction(percentageTimeElapsed);
      let nextPos = percentageChange * totalDelta;

      // update element
      move(nextPos);

      // do the animation unless its over
      if (currentTime < endTime) {

        raf(animateScroll);

      } else {

        //done!
        move(options.target);
        if (typeof options.onDone === 'function') {

          options.onDone.apply();

        }

      }

    }

    animateScroll();

  }

}