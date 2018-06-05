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

  static scrollY(el, target, duration, easing) {

    //defaults
    if (!el || typeof el !== 'object') {

      throw 'el is required and must be an object';

    }
    target = target || 0;
    duration = duration === undefined ? 400 : duration;
    easing = easing || this.EASE_IN_OUT;

    //validate target
    let maxTarget = el.scrollHeight - el.offsetHeight;
    //constrain to max
    target = target > maxTarget ? maxTarget : target;

    let easingFunction = BezierEasing.apply(undefined, easing);

    let raf = (function(){
      return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
    })();

    function move(pos) {

      el.scrollTop = pos;

    }

    function getCurrentPosition() {

      return el.scrollTop;

    }

    let startPosition = getCurrentPosition();
    let startTime = Date.now();
    let endTime = startTime + duration;
    let totalDelta = target - startPosition;

    function animateScroll() {

      let currentTime = Date.now();
      let timeElapsed = currentTime - startTime;
      let percentageTimeElapsed = timeElapsed / duration;
      let percentageChange = easingFunction(percentageTimeElapsed);
      let nextPos = percentageChange * totalDelta;

      console.log(`timeElapsed: ${timeElapsed}`)
      console.log(`percentageTimeElapsed: ${percentageTimeElapsed}`)
      console.log(`percentageChange: ${percentageTimeElapsed}`)

      // update element
      move(nextPos);

      // do the animation unless its over
      if (currentTime < endTime) {

        raf(animateScroll);

      } else {

        move(target);

      }

    }

    animateScroll();

  }

}