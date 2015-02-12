angular
.module('jbAngularSelectable', [])
.factory('Selectable', SelectableFactory);

function SelectableFactory() {

  function Selectable(selectables) {
    if (typeof(selectables) === "undefined") {
      this.selectables = []; 
    } else {
      this.selectables = selectables; 
    }
  }
  
  Selectable.prototype.select = function(obj) {
    if(this.selectables.indexOf(obj) < 0) {
      this.selectables.push(obj); 
    }
  }

  Selectable.prototype.selectIf = function(obj, shouldExecute) {
    if (shouldExecute) {
      this.select(obj);
    }
  }

  Selectable.prototype.deselect = function(obj) {
    var pos = this.selectables.indexOf(obj);
    if(pos >= 0) {
      this.selectables.splice(pos, 1);
    }
  }

  // this is likely inefficient as any digest cycle will cause this to be 
  // to be re-run, walking through the array each time
  Selectable.prototype.isSelected = function(obj) {
    return this.selectables.indexOf(obj) >= 0; 
  }

  return Selectable;
}

