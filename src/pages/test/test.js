define('test',['jquery'],function(){
	var Test = {
		init:function(){
			this.initTest();
		}
	};
	$.extend(Test,{
        initTest : function(){
            alert(1);
        }
	});
	return Test;
});