/* 
 *@name: VSO Framework
 *@author: Hancoaon <Hancoaon@163.com>
 *@url: http://www.vso.pw
<<<<<<< HEAD
 *@date: 11-12-2014
*/
requirejs.config({
	paths: {
		jquery:'../../../../common/jquery.min'
	}
});
require(["test"],function(C){
	C.init();
});
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
=======
 *@date: 05-12-2014
*/
$(function(){
    alert(1);
});;$(function(){
    alert(2);
>>>>>>> ae5a0472506ac3b816372a8e72509766a75a5ae2
});