import Animator from 'dom-animate';

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
   * Animate scrolling element to position.
   * @param {HTMLElement} el
   * @param {number} targetY
   * @param {object=} options
   */
  static scrollY(el, targetY, options) {

    //validate target
    let maxTarget = el.scrollHeight - el.offsetHeight;

    //constrain to max
    let target = targetY > maxTarget ? maxTarget : targetY;

    //start position is current position
    let startPosition = el === window ? el.scrollY : el.scrollTop;

    //animate!
    return new Animator(startPosition, target, x => {

      if (el === window) {

        el.scrollTo(0, x);

      } else {

        el.scrollTop = x;

      }

    }, options);

  }

}