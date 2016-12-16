define(function() {
	return {
		"ajax1": function() {
			$.ajax({
				type: "get",
				url: "main.html",
				async: true,
				success: function(data) {
					$("#_box").html(data);
					$(".dd3").click(function() {
						$("#_box").html("");
						$.ajax({
							type: "get",
							url: "shopping.html",
							async: true,
							success: function(data) {
								$("#_box").html(data);
								console.log(data);
							}
						});
					});
					$("#bangdan").click(function() {
						$("#_box").html("");
						$.ajax({
							type: "get",
							url: "list.html",
							async: true,
							success: function(data) {
								$("#_box").html(data);
								console.log(data);
							}
						});
					})
				}
			});
			$("#_shouye").click(function() {
				$("#_box").html("");
				$.ajax({
					type: "get",
					url: "main.html",
					async: true,
					success: function(data) {
						$("#_box").html(data);
						$(".dd3").click(function() {
							$("#_box").html("");
							$.ajax({
								type: "get",
								url: "shopping.html",
								async: true,
								success: function(data) {
									$("#_box").html(data);
								}
							});
						});
						$("#bangdan").click(function() {
							$("#_box").html("");
							$.ajax({
								type: "get",
								url: "list.html",
								async: true,
								success: function(data) {
									$("#_box").html(data);
									console.log(data);
								}
							});
						})
					}
				});
			});
		}
	}
})