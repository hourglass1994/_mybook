$(function() {
	$.ajax({
		type: "get",
		url: "http://10.2.153.113:8081/c1",
		async: true,
		success: function(data) {
			$("#xiangxi li").html(" ");
			for (i in data) {
				$("#xiangxi li:eq(" + i + ")").html("...." + data[i].b_name + "...." + data[i].b_price + "...." + data[i].b_sales)
			}
		}
	});
	$("#moren span").click(function(e) {
		var pageVal = $(this).text();
		uri = "http://10.2.153.113:8081/c" + pageVal;
		$.ajax({
			type: "get",
			url: uri,
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#xiangxi #moren li:eq(" + i + ")").html("...." + data[i].b_name + "...." + data[i].b_price + "...." + data[i].b_sales);
				}
			}
		});
	});
	$("#renxi span").click(function(e) {
		var pageVal = $(this).text();
		uri = "http://10.2.153.113:8081/d" + pageVal;
		$.ajax({
			type: "get",
			url: uri,
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#xiangxi #moren li:eq(" + i + ")").html("...." + data[i].b_name + "...." + data[i].b_price + "...." + data[i].b_sales);
				}
			}
		});
	});
	$("#jiage span").click(function(e) {
		var pageVal = $(this).text();
		uri = "http://10.2.153.113:8081/b" + pageVal;
		$.ajax({
			type: "get",
			url: uri,
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#xiangxi #jiage li:eq(" + i + ")").html("...." + data[i].b_name + "...." + data[i].b_price + "...." + data[i].b_sales);
				}
			}
		});
	});
	$("#xiaoliang span").click(function(e) {
		var pageVal = $(this).text();
		uri = "http://10.2.153.113:8081/a" + pageVal;
		$.ajax({
			type: "get",
			url: uri,
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#xiangxi #xiaoliang li:eq(" + i + ")").html("...." + data[i].b_name + "...." + data[i].b_price + "...." + data[i].b_sales);
				}
			}
		});
	});

});
$(function() {
	$(".paixu1").click(function() {
		$("#moren").show();
		$("#renxi").hide();
		$("#xiaoliang").hide();
		$("#jiage").hide();
		$.ajax({
			type: "get",
			url: "http://10.2.153.113:8081/c1",
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#xiangxi li:eq(" + i + ")").html("...." + data[i].b_name + "...." + data[i].b_price + "...." + data[i].b_sales)
				}
			}
		});
	});
	$(".paixu2").click(function() {
		$("#moren").hide();
		$("#renxi").show();
		$("#xiaoliang").hide();
		$("#jiage").hide();
		$.ajax({
			type: "get",
			url: "http://10.2.153.113:8081/d1",
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#renxi li:eq(" + i + ")").html("...." + data[i].b_name + "...." + data[i].b_price + "...." + data[i].b_sales)
				}
			}
		});
	});
	$(".paixu3").click(function() {
		$("#moren").hide();
		$("#renxi").hide();
		$("#xiaoliang").show();
		$("#jiage").hide();
		$.ajax({
			type: "get",
			url: "http://10.2.153.113:8081/a1",
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#xiaoliang li:eq(" + i + ")").html("...." + data[i].b_name + "...." + data[i].b_price + "...." + data[i].b_sales)
				}
			}
		});
	});
	$(".paixu4").click(function() {
		$("#moren").hide();
		$("#renxi").hide();
		$("#xiaoliang").hide();
		$("#jiage").show();
		$.ajax({
			type: "get",
			url: "http://10.2.153.113:8081/b1",
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#jiage li:eq(" + i + ")").html("...." + data[i].b_name + "...." + data[i].b_price + "...." + data[i].b_sales)
				}
			}
		});
	});
});