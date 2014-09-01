# progress-bar

A progress bar

## Methods

# .min(min)

Set the minimum value

# .max(max)

Set the maximum value

# .value(value)

Set the current value

## Example

HTML:

    <div class="js-progress">
        <div class="js-progress-indicator"/>
    </div>

CSS:

    .js-progress-indicator {
        background-color: red;
    }
  
JS:
  
    var progress = require('progress-bar');
    var el = document.querySelector('.js-progress');
    progress(el).value(25);