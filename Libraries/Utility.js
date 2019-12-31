

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

// Function detecting on which page are we (Please Don't be mad at me, FiledMaster . . . )
function onPage(name, fn) {
  var length = location.pathname.length, temp;
  if ((temp = location.pathname.indexOf(".")) === -1 && (temp = location.pathname.indexOf("/")) === -1) {
    temp = null;
  }
  var r = location.pathname.substring(1, temp || length) === name;
  if (typeof fn === "function" && r) {
	console.log("PrettyCards Page: " + name);
    fn();
  }
  return r;
}

///////////////////////////////////////////////////////////////////////////////////////////


// ALGORYTHMS! . . . MATH!

// Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//////////////////////////////////////////////////////////////////////

// Ok, these ones are mine!

function loadCSSFromLink(url) {
	e = document.createElement("link");
	e.href = url;
	e.setAttribute("rel", "stylesheet");
	e.setAttribute("type", "text/css");
	document.head.appendChild(e);
}

function loadScript(lnk, callback) {
	var e = document.createElement("script");
	e.src = "https://cdn.jsdelivr.net/gh/CMD-God/prettycards@"+ PrettyCardsVer +"/PageSpecific/" + lnk + ".js";
	e.onload = callback || function() {};
	document.body.appendChild(e);
}


var updateFunctions = [];

function Update() {
    updateFunctions.forEach((func) => {func()});
    window.requestAnimationFrame(Update);
}

window.requestAnimationFrame(Update);

function CreateEmptyPopUp(bg_color, isBox) {
	var cover = document.createElement("DIV");
	cover.className = "popup";
	cover.style["background-color"] = bg_color || "rgba(0, 0, 0, 0.5)";
	
	var child = document.createElement("DIV");
	child.className = "popupChild" + (isBox ? " popupBox" : "");
	cover.appendChild(child);
	
	document.body.appendChild(cover);
}

GM_addStyle(".tooltip {position: relative;display: inline-block;}");
GM_addStyle(".tooltip .tooltiptext {visibility: hidden;width: 120px;background-color: black;color: #fff;text-align: center;padding: 5px 0;border-radius: 6px;position: absolute;z-index: 1;}");
GM_addStyle(".tooltip:hover .tooltiptext {visibility: visible;}");
function AddTooltip(ele, html, side) { //side: 1-up, 2-right, 3-down, 4-left
	var tipcont = document.createElement("DIV");
	tipcont.className = "tooltip";
	var tip = document.createElement("DIV");
	tip.className = "tooltiptext side" + (side || 1);
	tipcont.appendChild(tip);
	if (type(html) == "string") {
		tip.innerHTML = html;
	} else {
		tip.appendChild(html);
	}
	ele.appendChild(tipcont);
}

////////////////////////

// Function Replaced so no Undefineds would show up!
window.artifactsInfo = function(box) {
    if ($(box).children().length > 0) {
        var text = "";
        $(box).children().each(function () {
            if (!!$(this).attr("artifactId")) {
                var artifactId = $(this).attr("artifactId");
                var name = $.i18n('artifact-name-' + artifactId);
                var image = $(this).attr("image");
                var legendary = $(this).attr("legendary");

                if (legendary === "true") {
                    name = '<span class="yellow">' + name + '</span>';
                }

                text = text + '<p><img style="height:32px;" src="images/artifacts/' + image + '.png"> ' + name + ' : ' + $.i18n('artifact-' + artifactId) + '</p>';
            }
        });
        BootstrapDialog.show({
            title: $.i18n('dialog-information'),
            message: text,
            buttons: [{
                label: $.i18n('dialog-ok'),
                cssClass: 'btn-primary',
                action: function (dialog) {
                    dialog.close();
                }
            }]
        });
    }
}
//////////////////////////////////////////////////////////////////////

var temp_func = window._PrettyCardsStart || function() {};
temp_func();