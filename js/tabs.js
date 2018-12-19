// Acc
$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();
	var height = $(".menu").height()
	console.log(height);
	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(height + "px");
		$(".naccs ul div").height(height + "px");
	}
});

var height = $(".menu").height()
$(".naccs ul div").height(height + "px");