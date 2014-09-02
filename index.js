
/**
 * A progress bar
 * @constructor
 * @param   {HTMLElement}   element
 */
function ProgressBar(element) {

  if (!(this instanceof ProgressBar)) {
    return new ProgressBar(element);
  }

  this._min         = 0;
  this._max         = 100;
  this._value       = 0;

  this.el            = element;
  this._indicatorEl  = element.querySelector('.js-progress-indicator');

  this.render();
}

/**
 * Set the minimum value
 *
 * @signature `ProgressBar.min()`
 * @returns {Number}
 *
 * @signature `ProgressBar.min(min)`
 * @param   {Number} min
 * @returns {ProgressBar}
 */
ProgressBar.prototype.min = function(min) {
  if (arguments.length) {
    this._min = min;
    this.render();
    return this;
  } else {
    return this._min;
  }
};

/**
 * Set the maximum value
 *
 * @signature `ProgressBar.max()`
 * @returns {Number}
 *
 * @signature `ProgressBar.max(max)`
 * @param   {Number} max
 * @returns {ProgressBar}
 */
ProgressBar.prototype.max = function(max) {
  if (arguments.length) {
    this._max = max;
    this.render();
    return this;
  } else {
    return this._max;
  }
};

/**
 * Set the current value
 *
 * @signature `ProgressBar.value()`
 * @returns {Number}
 *
 * @signature `ProgressBar.value(value)`
 * @param   {Number} value
 * @returns {ProgressBar}
 */
ProgressBar.prototype.value = function(value) {
  if (arguments.length) {

    //never go over 100%
    if (value>this._max) {
      value = 100;
    }

    this._value = value;
    this.render();

    return this;
  } else {
    return this._value;
  }
};

/**
 * Calculate what percentage of the task is complete
 * @returns {Number}
 */
ProgressBar.prototype.percent = function() {
  return this._value/(this._max-this._min)*100;
};

/**
 * Update the display
 * @returns {ProgressBar}
 */
ProgressBar.prototype.render = function() {
  if (this._min || this._max || this._value) {
    this._indicatorEl.style.width = this.percent()+'%';
  }
  return this;
};

module.exports = ProgressBar;