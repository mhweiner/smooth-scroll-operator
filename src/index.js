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
    let startPosition = el.scrollTop;

    //create new instance of animator
    let animator = new DOMAnimateProperty();

    //animate!
    animator.animate(el, null, startPosition, target, Object.assign({}, options, {
      customPropertyUpdate: (el, pos) => el.scrollTop = pos,
      precision: 5
    }));

    return animator;

  }

}