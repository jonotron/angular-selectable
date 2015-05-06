# angular-selectable
An angular module for selecting things

This module is born from the need to select things in interfaces in a flexible
manner. It's not restricted to `ng-click` or some other opinionated way of
marking items as selected. Just wire up your behaviour as you see fit.

**Note**: This is very much a work in progress and likely not to work.

## Installation

```
npm install --save angular-selectable
```

Include the file in your html

```html
<script src="node_modules/angular-selectable/angular-selectable.js"></script>
```
Add `jbAngularSelectable` to your module's dependencies

```js
angular.module('MyApp', ['jbAngularSelectable']);
```

## Usage

Inject the `Selectable` factory into your controllers and add expose it to your template

```js
angular.module('MyApp')
.controller('myController', function($scope, Selectables) {
  $scope.pets = ['dog', 'cat', 'gerbil', 'bird'];
  $scope.selectables = new Selectables();
});
```

Use it in your templates

```html
<ul>
  <li ng-repeat="pet in pets"
    ng-click="selectables.select(pet)">
    {{ pet }} <span ng-if="selectables.isSelected(pet)">picked me</span>
  </li>
</ul>
```

You can also try it out by serving up the root dir with your favourite static
file server (e.g. [`http-server`](https://www.npmjs.com/package/http-server))
and heading to `/example` (e.g. `http://localhost:8080/example` with 
`http-server`)

## TODO

* Documentation
* Tests
* Examples
* All the things


## License

MIT
