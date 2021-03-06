
import {} from "./libraries/jquery_additions.js";

import {PrettyCards_plugin, settings} from "/src/libraries/underscript_checker.js";

import {} from "./libraries/chat/user_info.js";
import {} from "./libraries/private_games/private_game_host.js";
import {} from "./libraries/private_games/private_game_recipient.js";

import {InitPacks} from "./page_specific/packs.js";


if (settings.packs.value() && underscript.onPage('Packs')) {
	console.log("Packs page!", InitPacks);
	InitPacks();
}