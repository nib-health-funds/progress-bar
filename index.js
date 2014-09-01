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
 * @param   {Number} min
 * @returns {ProgressBar}
 */
ProgressBar.prototype.min = function(min) {
  this._min = min;
  this.render();
  return this;
};

/**
 * Set the maximum value
 * @param   {Number} max
 * @returns {ProgressBar}
 */
ProgressBar.prototype.max = function(max) {
  this._max = max;
  this.render();
  return this;
};

/**
 * Set the current value
 * @param   {Number} value
 * @returns {ProgressBar}
 */
ProgressBar.prototype.value = function(value) {
  this._value = value;
  this.render();
  return this;
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
    this._indicatorEl.style.width = (this.percent()*this.el.offsetWidth/100)+'px';
  }
  return this;
};

module.exports = ProgressBar;