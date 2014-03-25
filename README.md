# SUIT utilities: size

[![Build Status](https://secure.travis-ci.org/suitcss/utils-size.png?branch=master)](http://travis-ci.org/suitcss/utils-size)

A SUIT collection of utility classes for low-level CSS sizing traits.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Component(1)](http://component.io/): `component install suitcss/utils-size`
* [Bower](http://bower.io/): `bower install --save suitcss/utils-size`
* Download: [zip](https://github.com/suitcss/utils-size/zipball/master)
* Git: `git clone https://github.com/suitcss/utils-size.git`

## Available classes

* `u-sizeFit` - Make an element shrink wrap its content by floating left.
* `u-sizeFitAlt` - Make an element shrink wrap its content by floating right.
* `u-sizeFill` - Make an element fill the remaining space.
* `u-sizeFillAlt` - An alternative method to make an element fill the remaining space.
* `u-sizeFull` - Make an element the width of its parent.
* `u-sizeXofY` (numerous) - Specify the proportional width of an object.

`X` must be an integer less than `Y`.

`Y` can be any of the following numbers: 2, 3, 4, 5, 6, 8, 10, 12.

### Plugins

Utilities that can be limited to specific Media Query breakpoints.

* `v1-u-sizeXofY` - To use at the first Media Query breakpoint.
* `v2-u-sizeXofY` - To use at the second Media Query breakpoint.
* `v3-u-sizeXofY` - To use at the third Media Query breakpoint.
* etc.

## Usage

Please refer to the README for [SUIT utils](https://github.com/suitcss/utils/)

### Using the responsive plugins

During development, you can include the utilities in your CSS using the
`@import` directive in your main stylesheet. Include your custom Media Query
breakpoints here too. Your build step should take care of inlining these
imports for IE 8 testing and production.

It's suggested that you use mutually exclusive breakpoints to avoid different
responsive utilities from taking effect at the same time.

Example:

```
@import "/bower_components/suit-utils-size/size.css";
@import "/bower_components/suit-utils-size/size-v1.css" (max-width: 25em);
@import "/bower_components/suit-utils-size/size-v2.css" (min-width: 25em) and (max-width: 50em);
@import "/bower_components/suit-utils-size/size-v3.css" (min-width: 50em);
```

## Testing

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate a build:

```
npm run build
```

To generate the testing build.

```
npm run build-test
```

Basic visual tests are in `test.html`.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
