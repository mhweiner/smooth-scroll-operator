/**
 * https://github.com/mhweiner/smooth-scroll-operator
 * smooth-scroll-operator - animate scrolling with bezier curve support
 * @author Marc H. Weiner
 * @license MIT
 */

var DOMAnimate = require('dom-animate');

/**
 * Animate scrolling element to position.
 * @param {HTMLElement} el
 * @param {number} targetY
 * @param {object=} options
 */
function scrollY(el, targetY, options) {

  //validate target
  var maxTarget = el.scrollHeight - el.offsetHeight;

  //constrain to max
  var target = targetY > maxTarget ? maxTarget : targetY;

  //start position is current position
  var startPosition = el === window ? el.scrollY : el.scrollTop;

  //animate!
  return new DOMAnimate(startPosition, target, function(x) {

    if (el === window) {

      el.scrollTo(0, x);

    } else {

      el.scrollTop = x;

    }

  }, options);

}

function SmoothScrollOperator(){}
SmoothScrollOperator.scrollY = scrollY;
SmoothScrollOperator.EASING = DOMAnimate.EASING;

module.exports = SmoothScrollOperator;