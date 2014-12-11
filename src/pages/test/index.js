requirejs.config({
	paths: {
		jquery:'../../../../common/jquery.min'
	}
});
require(["test"],function(C){
	C.init();
});