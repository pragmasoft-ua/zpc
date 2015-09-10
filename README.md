

The project is pure client side demo, based on rubix template, and using same build tools rubix has.

It needs to display two tabs or subpages, both containing zoomable partition charts and filters.

Example of partition chart http://ramblings.mcpher.com/Home/excelquirks/d3/partition

data should be static json, packaged with the app, long enough, about 5000 records each.

Domain model has 2 hierarchical entities:

1) Requirement spec terms with features, subfeatures, etc.
2) Test siutes, containing nested test suites of arbitrary levels, containing test cases

These are related to each other as many to many, ie one feature can be covered by many or none tests, and one test can cover many features.

Features not covered with tests should have red color on chart, those covered with tests should be green.

Both pages should have freetext search field, entering text there will filter the tree to contain only items with such substrings and their children.

Please provide estimate before you start, and report progress and spent time daily.


Run server:
```
npm install
npm install -g gulp
gulp
```
