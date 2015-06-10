
// JSON Namespace A: Create the full namespace tree with a singleton
namespace.init('alfa.bravo.charlie', {
		Property1 : 'Value 1',
		Property2 : 'Value 2'
}); 

// JSON Namespace B: Append to existing
namespace.init('alfa.bravo.charlie', {
		Property99 : 'Value 99',
}); 

// Private Context A: Create namespace (Lower down) with private context
namespace.init('alfa.bravo', function() {
		var privOne = 'First private message'
		var getFirstPrivateMessage = function() {
			return privOne;
		}

		return {
			getFirstPrivateMessage: getFirstPrivateMessage,
			Property3 : 'Value 3'
		}
	}()
);

// Private Context B: Append to existing
namespace.init('alfa.bravo', function() {
		var privTwo = 'Second private message'
		var getSecondPrivateMessage = function() {
			return privTwo;
		}

		return {
			getSecondPrivateMessage : getSecondPrivateMessage,
			Property4 : 'Value 4'
		}
	}()
);
