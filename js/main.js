$(function(){
	var elem = $(".audio");
	console.log(elem);
	for(var i = 0; i < elem.length; i++) {
		var download = $(elem[i]).children(".area").children("table").children("tbody").children("tr").children("td").children("input").attr("value"),
			newElem = "<td><a href=\"" + download + "\" download><div class=\"wvkmd_icon\"></div></a></td>";
		
		$(newElem).insertAfter($($(elem[i]).children(".area").children("table").children("tbody").children("tr").children("td")[0]));
	}
});