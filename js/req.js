require.config({
	baseUrl: "js",
	paths: {
		"jquery":"jquery-3.1.1.min"
	}
});
define(['jquery','ajax','denglu'],function($,ajax,denglu){
	ajax.ajax1();
	denglu.tu11();
	denglu.btn();
	denglu.zhuce();
	denglu.panduan();
})
