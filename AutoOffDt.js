UI.AddCheckbox("Auto Off DT on SSG / AUTO");

localplayer_index = Entity.GetLocalPlayer( );
localplayer_weapon = Entity.GetWeapon(localplayer_index);

function CheckWeapon()
{
    wepNam = Event.GetString('item');

    if (wepNam == "ssg08") {
        UI.SetValue("Rage", "GENERAL", "Exploits", "Hide shots", false)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap", false)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", false)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Teleport release", false)
        return
    }

    if (wepNam == "awp") {
        UI.SetValue("Rage", "GENERAL", "Exploits", "Hide shots", false)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap", false)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", false)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Teleport release", false)
        return
    }

    if (wepNam != "ssg08") {
        UI.SetValue("Rage", "GENERAL", "Exploits", "Hide shots", true)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap", true)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Teleport release", true)
        return
    }

    if (wepNam != "awp") {
        UI.SetValue("Rage", "GENERAL", "Exploits", "Hide shots", true)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap", true)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true)
        UI.SetValue("Rage", "GENERAL", "Exploits", "Teleport release", true)
    }
}

Global.RegisterCallback("item_equip", "CheckWeapon");