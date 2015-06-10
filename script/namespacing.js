// -------------------------------------------------------------------
// ----------------- Namespacing Namespace Manager -------------------
// -------------------------------------------------------------------
//
// 1. Create namespace roll-up with quick dot notation
// 2. Append to previously declared namespaces 
// 3. Flexible out of sequence namespace creation
//
// ----------------------------- Created By: Marius Vorster ----------

namespace = function() {
	var rootHandle = window
	
	var moveExistingItem = function(source, destination) {		
		for (var key in source) {
		  if (source.hasOwnProperty(key)) {		
		  
			  if (destination[key] != undefined && key != 'parent' && key != 'ns') {
				console.log(key);
				console.log('Warning! ' + key + ' Already Exists on target namespace. Using last value.');
				continue;
			  }			  
			  destination[key] = source[key];
		  }
		} 
		
		return destination;
	}

	var create = function(parent, child, init) {
		if (parent[child] != undefined && init == undefined) {
			return parent[child];
		}
		if (parent[child] == undefined && init == undefined) {			
			return parent[child] = {};
		}		
		var existing = (parent[child] != undefined) ? parent[child] : null;
		
		instance = init;
		instance.parent = parent;		
		instance.ns = true;
				
		if (existing != null) {
			instance = moveExistingItem(existing, instance);
		}

		parent[child] = function() {			
			return instance;
		}();
		
		return parent[child];
	}	

	var init = function(namespace, init) {
		var nestedList = namespace.split('.');
		for (var k=0; k < nestedList.length; k++) {
			parent = (k > 0) ? nestedList[k-1] : rootHandle;			
			nestedList[k] = create(parent, nestedList[k], (k == nestedList.length - 1) ? init : null);
		}
		
		return nestedList[nestedList.length - 1]
	}
	
	return {
		create: create,
		init: init
	}
}();




