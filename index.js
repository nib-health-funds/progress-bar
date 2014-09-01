/**
 * A progress bar
 * @constructor
 * @param   {Object}        options
 * @param   {HTMLElement}   options.el
 * @param   {Number}        [options.min]
 * @param   {Number}        [options.max]
 * @param   {Number}        [options.value]
 */
function ProgressBar(options) {
  this.el           = options.el;
  this.indicatorEl  = this.el.querySelector('.js-progress-indicator');

  this._min         = options.min || 0;
  this._max         = options.max || 0;
  this._value       = options.value || 0;

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
    this.indicatorEl.style.width = (this.percent()*this.el.offsetWidth/100)+'px';
  }
  return this;
};

module.exports = ProgressBar;