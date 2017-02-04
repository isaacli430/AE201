function RunFile1() {
	var shell = new ActiveXObject("WScript.Shell");
    shell.Run("file:///Applications/Skype.app");
}
function RunFile2() {
    WshShell = new ActiveXObject("WScript.Shell");
    WshShell.Run("file:///Applications/Discord.app", 1, false);
}
$("#macBar img").hover( function() {
	$(this).animate({top: "-20"});
	$(this).animate({top: "0"});
	$("#macScreen").fadeIn("slow");
})

$("#macBar img").click( function() {
	if (this.id == "four") {
		open("/Applications/Skype.app")
	} else if (this.id == "five") {
		open("/Applications/Discord.app")
	}
})

$("#macScreen").click( function() {
	$(this).fadeOut("slow");
})