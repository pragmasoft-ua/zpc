## Description

The project is pure client side demo, based on rubix template, and using same build tools rubix has.

It needs to display two tabs or subpages, both containing zoomable partition charts and filters.

For features use radial tree: http://bl.ocks.org/mbostock/4063550.

For test use zoomable partition: http://mbostock.github.io/d3/talk/20111018/partition.html.

data should be static json, packaged with the app, long enough, about 500 records each.

Domain model has 2 hierarchical entities:

1) Requirement spec terms with features, subfeatures, etc.

2) Test siutes, containing nested test suites of arbitrary levels, containing test cases

These are related to each other as many to many, ie one feature can be covered by many or none tests, and one test can cover many features.

Both pages should have freetext search field, entering text there will filter the tree to contain only items with such substrings and their children.

## Installation
```
npm install
npm install -g gulp
gulp
```
## Screenshots
Reference-style: 
![Features][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

Reference-style: 
![Features][features]

[features]: /screenshots/feautures.png "Features"

