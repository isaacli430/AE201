$("#red").click(function() {
	$("#progress").css("background-color", "red");
})

$("#blue").click(function() {
	$("#progress").css("background-color", "blue");
})

$("#green").click(function() {
	$("#progress").css("background-color", "green");
})

$("#start").click(function() {
	$("#progress").css("width", "12%")
		.delay('1200')
		.animate({width: "25%"}, 500)
		.delay('1200')
		.animate({width: "50%"}, 500)
		.delay('1200')
		.animate({width: "75%"}, 500)
		.delay('1200')
		.animate({width: "100%"}, 500);
	$("#percentage").html("0%");
	window.setTimeout(function() {
		$("#percentage").html("25%");
	}, 1200)
	window.setTimeout(function() {
		$("#percentage").html("50%");
	}, 3000)
	window.setTimeout(function() {
		$("#percentage").html("75%");
	}, 4800)
	window.setTimeout(function() {
		$("#percentage").html("100%");
	}, 6800)
})