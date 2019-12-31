
var soulCards = {};

function GetSoulData(soul_name) {
	var soulStringKey = 'soul-' + soul_name.replace('_', '-').toLowerCase();
    var soulDescStringKey = soulStringKey + '-desc';
    var name = $.i18n(soulStringKey);
	var desc = $.i18n(soulDescStringKey);
	
	console.log(name, desc);
	
	return {name: name, desc: desc, id: soul_name}
}

window.soulInfo = function(soul_name) {
	GetSoulData(soul_name);
}

function GetSoulCards() {
	soulCards = {};
	if (allCards) {
		if (allCards.length > 0) {
			for (var i=0; i < allCards.length; i++) {
				var card = allCards[i];
				if (card.soul) {
					if (!soulCards[card.soul.name]) {
						soulCards[card.soul.name] = [];
					}
					soulCards[card.soul.name].push(card);
				}
			}
			console.log("soulCards: ", soulCards);
		} else {
			console.log("Cards Not Fetched yet. Retry in 1 second.");
			setTimeout(GetSoulCards, 1000);
		}
	} else {
		console.log("This page does not handle cards!");
	}
}

GetSoulCards();

function AddSoulHover(ele, soul) {
	var soul_data = GetSoulData(soul);
	var html =	'<div class="PrettyCards_SoulHover '+ soul +'">'+
					'<img class="PrettyCards_SoulHover_Soul" src="https://raw.githubusercontent.com/CMD-God/prettycards/master/img/Souls/' + soul + '.png">'+
					'<p class="PrettyCards_SoulHover_Name">' + soul_data.name + '</p>'+
					'<p class="PrettyCards_SoulHover_Desc">'+ soul_data.desc + '</p>'+
					'<p class="PrettyCards_SoulHover_ClickMe">(Click for more info)</p>'+
				'</div>';
	AddTooltip(ele, html, 1);
}

function SoulPopUp(id, name, desc) {
	
}

