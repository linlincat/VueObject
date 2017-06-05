export default {
	function isLocalStorage() {
	    var testKey = 'test',
	        storage = window.localStorage;
	    try {
	        storage.setItem(testKey, 'support');
	        storage.removeItem(testKey);
	        return true;
	    } catch (error) {
	    	console.log(error);
	    	alert("您正处于无痕浏览环境下,会导致不友好的体验。");
	        return false;
	    }

	}
}