Resolution Switch
===============

The jQuery resolution switch plugin helps with loading of large images by allowing you to serve up a low-resolution version of the image and simultaneously loading a high-resolution version. Once the high-resolution version is loaded into the browser, it automatically replaces the low-res version.

Useage
----------

The high-resolution version of the image needs to have the name of the low-resolution image followed by the suffix '_high' and then the file extension. (i.e. myprofilepic.jpg would have a high-res image named myprofilepic_high.jpg).

Use a jQuery selector to apply the behavior to the images you want to load. For example, you could add a class name of "gallery-photo" to your images. Use the following to apply the behavior to your images:

$('gallery-photo').resolutionSwitch();

The function call should be wrapped in $(document).ready() to make sure that the image tags are available in the DOM when called.

Useage Example
----------------------

The complete useage example is as follows:

$(doument).ready(function() {
  $('.gallery-photo').resolutionSwitch({highresImageExtension:'_high'});
});

