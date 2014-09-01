/* global describe, it */

var assert      = require('assert');
var ProgressBar = require('progress-bar');

function createProgressBar() {

  var indicator = document.createElement('div');
  indicator.className = 'js-progress-indicator';
  indicator.style.height = '30px';
  indicator.style.backgroundColor = 'red';

  var element = document.createElement('div');
  element.style.width = '1000px';
  element.appendChild(indicator);

  document.body.appendChild(element);

  return new ProgressBar({
    el: element
  });
}

var progress;
describe('progress-bar', function() {

  beforeEach(function() {
    progress = createProgressBar();
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
    assert.equal(250, progress.indicatorEl.offsetWidth);

    progress
      .min(0)
      .max(200)
      .value(50)
    ;

    assert.equal(25, progress.percent());
    assert.equal(250, progress.indicatorEl.offsetWidth);

  });

});