# gallery.js

A super-light super-simple JavaScript gallery library

All of gallery.js's methods and properties are under the galleryJS object.

## Methods and properties

#### `init(String selector, Array imageUrls, [Number transitionSpeed])`
`selector` - a CSS selector that specifies a single `div` to use as the gallery container. Example: `"#myGalleryDiv"`

`imageUrls` - an array of URLs of the images you want to show in the gallery. Example: `["waffles.png","somepicture.gif"]`

`transitionSpeed` (optional) - the duration of the fade transition between images, in seconds. Example: `0.5`

#### `changeSlide(Number index)`
`index` - the zero-based index of the slide you want to switch to. If `index` exceeds the length of the gallery, it will loop back to an appropriate slide within the bounds of the gallery. Example: `1`

#### `currentSlide`
Stores the zero-based index of the current slide.
