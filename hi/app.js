var allTags = [];

function addTag() {
	if ($('#tagInput').val() != "") {
		var newCon = document.createElement("div");
		var newTag = document.createElement("div");
		newTag.innerHTML = $("input[name=tag]").val();
		$(newTag).addClass('waves-effect waves-light btn');
		$(newCon).append(newTag);
		var box = document.createElement('div');
		box.innerHTML = "X";
		$(box).addClass('btn-floating waves-effect waves-light red');
		$(newCon).append(box);
		$(newCon).addClass("tags");
		$("input").before(newCon);
		allTags.push($("input[name=tag]").val());
		$(box).on("click", function() {
			var index = allTags.indexOf($(this).prev().html());
			allTags.splice(index, 1);
			$(this).parent().remove();
		})
	} else {
		alert("just no");
	}
}