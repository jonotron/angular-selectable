angular
.module('jbAngularSelectable', [])
.factory('Selectables', SelectablesFactory);

function SelectablesFactory() {

  function Selectables(selectables) {
    this.selectables = typeof(selectables) === 'Array' ? selectables : [];
  }
  
  Selectables.prototype.select = function(obj) {
    if(this.selectables.indexOf(obj) < 0) {
      this.selectables.push(obj); 
    }
  }

  Selectables.prototype.selectOnly = function(obj) {
    // deselect anything already selected
    for(var i = 0; i < this.selectables.length; i++) {
      this.deselect(this.selectables[i]) 
    }

    this.select(obj);
  }

  Selectables.prototype.selectIf = function(obj, isSelectable) {
    if (isSelectable) {
      this.select(obj);
    }
  }

  Selectables.prototype.selectOnlyIf = function(obj, isSelectable) {
    if (isSelectable) {
      this.selectOnly(obj);
    }
  }

  Selectables.prototype.deselect = function(obj) {
    var pos = this.selectables.indexOf(obj);
    if(pos >= 0) {
      this.selectables.splice(pos, 1);
    }
  }

  Selectables.prototype.toggle = function(obj) {
    if (this.isSelected(obj)) {
      this.deselect(obj)
    } else {
      this.select(obj); 
    }
  }

  Selectables.prototype.toggleOnly = function(obj) {
    if (this.isSelected(obj)) { 
      this.deselect(obj);
    } else {
      this.selectOnly(obj); 
    }
  }

  Selectables.prototype.toggleIf = function(obj, isSelectable) {
    if (!isSelectable) return;
    this.toggle(obj);
  }

  Selectables.prototype.toggleOnlyIf = function(obj, isSelectable) {
    if (!isSelectable) return;
    this.toggleOnly(obj);
  }

  // this is likely inefficient as any digest cycle will cause this to be 
  // to be re-run, walking through the array each time
  Selectables.prototype.isSelected = function(obj) {
    return this.selectables.indexOf(obj) >= 0; 
  }

  Selectables.prototype.hasSelected = function() {
    return this.selectables.length >= 1; 
  }

  Selectables.prototype.getSelected = function() {
    return this.selectables; 
  }

  return Selectables;
}

