/* global describe, it */

var assert      = require('assert');
var ProgressBar = require('progress-bar');

var progress;

/**
 * Create a progress bar element
 * @returns {ProgressBar}
 */
function createProgressBar() {

  var indicator = document.createElement('div');
  indicator.className = 'js-progress-indicator';
  indicator.style.height = '30px';
  indicator.style.backgroundColor = 'red';

  var element = document.createElement('div');
  element.style.width = '1000px';
  element.appendChild(indicator);

  return new ProgressBar(element);
}

describe('progress-bar', function() {

  beforeEach(function() {
    progress = createProgressBar();
    document.body.appendChild(progress.el);

  });

  afterEach(function() {
    document.body.removeChild(progress.el);
  });

  it('should be 25%', function() {

    progress
      .min(0)
      .max(100)
      .value(25)
    ;

    assert.equal(25, progress.percent());
    assert.equal('25', progress.el.getAttribute('data-progress'));
    assert.equal('25%', progress._indicatorEl.style.width);
    assert.equal(250, progress._indicatorEl.offsetWidth);

    progress
      .min(0)
      .max(200)
      .value(50)
    ;

    assert.equal(25, progress.percent());
    assert.equal('25', progress.el.getAttribute('data-progress'));
    assert.equal('25%', progress._indicatorEl.style.width);
    assert.equal(250, progress._indicatorEl.offsetWidth);

  });

  it('should change from 25% to 50%', function() {

    progress
      .min(0)
      .max(100)
      .value(25)
    ;

    assert.equal(25, progress.percent());
    assert.equal('25', progress.el.getAttribute('data-progress'));
    assert.equal('25%', progress._indicatorEl.style.width);
    assert.equal(250, progress._indicatorEl.offsetWidth);

    progress
      .value(50)
    ;

    assert.equal(50, progress.percent());
    assert.equal('50', progress.el.getAttribute('data-progress'));
    assert.equal('50%', progress._indicatorEl.style.width);
    assert.equal(500, progress._indicatorEl.offsetWidth);

  });

});