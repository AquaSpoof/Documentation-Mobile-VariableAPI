//прыжок в воздухе обновляя состояние onGround
var airJumpModule = new Module("AirJump", true, true, ModuleCategory.MOVEMENT);

function onLevelTick() {
    if (!airJumpModule.isActive() || !LocalPlayer.isInGame()) return;

    if (LocalPlayer.isMoveButtonPressed(MoveButton.JUMP)) {
        LocalPlayer.setOnGround(true);
    }
}

function onScriptEnabled() {
    ModuleManager.addModule(airJumpModule);
}

function onScriptDisabled() {
    ModuleManager.removeModule(airJumpModule);
}
