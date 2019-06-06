/**
 * https://github.com/mhweiner/smooth-scroll-operator
 * smooth-scroll-operator - animate scrolling with bezier curve support
 * @author Marc H. Weiner
 * @license MIT
 */

var Animator = require('dom-animate');

function SmoothScrollOperator() {

  this.EASE = [0.25, 0.1, 0.25, 1];
  this.EASE_IN = [0.42, 0, 1, 1];
  this.EASE_OUT = [0, 0, 0.58, 1];
  this.EASE_IN_OUT = [0.42, 0, 0.58, 1];
  this.LINEAR = [0, 0, 1, 1];

  /**
   * Animate scrolling element to position.
   * @param {HTMLElement} el
   * @param {number} targetY
   * @param {object=} options
   */
  this.scrollY = function(el, targetY, options) {

    //validate target
    var maxTarget = el.scrollHeight - el.offsetHeight;

    //constrain to max
    var target = targetY > maxTarget ? maxTarget : targetY;

    //start position is current position
    var startPosition = el === window ? el.scrollY : el.scrollTop;

    //animate!
    return new Animator(startPosition, target, function(x) {

      if (el === window) {

        el.scrollTo(0, x);

      } else {

        el.scrollTop = x;

      }

    }, options);

  };

}

module.exports = SmoothScrollOperator;