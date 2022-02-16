// noinspection JSUnusedLocalSymbols
function onClickCanvans(event) {
    if (is_game_over) {
        reset_game_call = true;
    }

    if (is_game_running) {
        changeMorgenVector();
    } else {
        is_game_running = true;
    }
}
