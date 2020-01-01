
/*
onPage("Decks", function() {
	var info = document.getElementById("soulInfo");
	setTimeout( function() {
		AddSoulHover(info, info.getAttribute("data-soul"));
        AddSoulClick(info);
	}, 1000);
	var soulSelect = document.getElementById("selectSouls");
    CustomizeSoulSelectObj(soulSelect);
	soulSelect.addEventListener("change", function(e) {
		//console.log("Event: ", e);
		document.querySelector("#soulInfo .tooltiptext").remove();
		AddSoulHover(info, info.getAttribute("data-soul"));
	})
})*/

onPage("Decks", function() {
    var soulSelect = document.getElementById("selectSouls");
    CustomizeSoulSelectObj(soulSelect);
    document.getElementById("soulInfo").style.display = "none";
})