angular
.module('jbAngularSelectable', [])
.factory('Selectables', SelectablesFactory);

function SelectablesFactory() {

  function Selectables(selectables) {
    if (typeof(selectables) === "undefined") {
      this.selectables = []; 
    } else {
      this.selectables = selectables; 
    }
  }
  
  Selectables.prototype.select = function(obj) {
    if(this.selectables.indexOf(obj) < 0) {
      this.selectables.push(obj); 
    }
  }

  Selectables.prototype.selectIf = function(obj, shouldExecute) {
    if (shouldExecute) {
      this.select(obj);
    }
  }

  Selectables.prototype.deselect = function(obj) {
    var pos = this.selectables.indexOf(obj);
    if(pos >= 0) {
      this.selectables.splice(pos, 1);
    }
  }

  // this is likely inefficient as any digest cycle will cause this to be 
  // to be re-run, walking through the array each time
  Selectables.prototype.isSelected = function(obj) {
    return this.selectables.indexOf(obj) >= 0; 
  }

  return Selectables;
}

