# progress-bar

A progress bar.

## Methods

# .min()

Get the minimum value

# .min(min)

Set the minimum value

# .max()

Get the maximum value

# .max(max)

Set the maximum value

# .value()

Get the current value

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