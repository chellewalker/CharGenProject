export function getRifle(available,BAB,level,dex,feats,talents,size) {
    let rifleWeapon = "";
    let weaponSize;
    let rifleDice;
    let rifleDie;
    let special = "";
    let relativeSize;

    if (size == "Small") {
        relativeSize = 0;
    }
    else if (size == "Medium") {
        relativeSize = 1;
    }
    else if (size == "Large") {
        relativeSize = 2;
    }

    let rifleAttackRaw = BAB + Math.floor((dex-10)/2);
    if (feats.includes("Weapon Focus (Rifles)")) {
        rifleAttackRaw++;
    }
    if (talents.includes("Greater Weapon Focus (Rifles)")) {
        rifleAttackRaw++;
    }
    while (rifleWeapon == "") {
        let randomNum = Math.floor(Math.random() * 20);

        if (randomNum == 0) {
            rifleWeapon = "Blaster Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 1 && available.includes("CR")) {
            rifleWeapon = "Blaster Carbine";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 2 && available.includes("CR")) {
            rifleWeapon = "Sporting Blaster Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 6;
        }
        if (randomNum == 3 && available.includes("CR")) {
            rifleWeapon = "Ion Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
            special = " (Ion)";
        }
        if (randomNum == 4 && available.includes("CR")) {
            rifleWeapon = "Slugthrower Rifle";
            weaponSize = 1;
            rifleDice = 2;
            rifleDie = 8;
        }
        if (randomNum == 5 && available.includes("CR") && size != "Small") {
            rifleWeapon = "Light Repeating Blaster";
            weaponSize = 2;
            rifleDice = 3;
            rifleDie = 8;
            special = ", 2-Square Autofire";
            rifleAttackRaw -= 5;
        }
        if (randomNum == 6 && available.includes("CR") && size != "Small") {
            rifleWeapon = "Heavy Blaster Rifle";
            weaponSize = 2;
            rifleDice = 3;
            rifleDie = 10;
        }
        if (randomNum == 7 && available.includes("KotORCG") && size != "Small") {
            rifleWeapon = "Assault Blaster Rifle";
            weaponSize = 2;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 8 && available.includes("KotORCG")) {
            rifleWeapon = "Commando Special Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 10;
        }
        if (randomNum == 9 && available.includes("KotORCG")) {
            rifleWeapon = "Ion Carbine";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
            special = " (Ion)";
        }
        if (randomNum == 10 && available.includes("KotORCG")) {
            rifleWeapon = "Pulse-Wave Rifle";
            weaponSize = 1;
            rifleDice = 2;
            rifleDie = 8;
        }
        if (randomNum == 11 && available.includes("KotORCG") && size != "Small") {
            rifleWeapon = "Repeating Blaster Carbine";
            weaponSize = 2;
            rifleDice = 3;
            rifleDie = 10;
            special = ", 2-Square Autofire";
            rifleAttackRaw -= 5;
        }
        if (randomNum == 12 && available.includes("KotORCG")) {
            rifleWeapon = "Sonic Rifle";
            weaponSize = 1;
            rifleDice = 2;
            rifleDie = 8;
            special = " (Sonic)";
        }
        if (randomNum == 13 && available.includes("FUCG")) {
            rifleWeapon = "Bryar Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 14 && available.includes("FUCG")) {
            rifleWeapon = "Disruptor Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 15 && available.includes("FUCG")) {
            rifleWeapon = "Incinerator Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 6;
        }
        if (randomNum == 16 && available.includes("FUCG")) {
            rifleWeapon = "Stokhli Spray Stick";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
            special = " (Stun)";
        }
        if (randomNum == 17 && available.includes("SaV")) {
            rifleWeapon = "Micro Grenade Launcher";
            weaponSize = 1;
            rifleDice = 4;
            rifleDie = 6;
            special = ", 2-Square Burst";
        }
        if (randomNum == 18 && available.includes("SaV")) {
            rifleWeapon = "Snare Rifle";
            weaponSize = 1;
            rifleDice = 1;
            rifleDie = 6;
            special = " (Stun)";
        }
        if (randomNum == 19 && available.includes("SaV")) {
            rifleWeapon = "Sniper Blaster Rifle";
            weaponSize = 2;
            rifleDice = 3;
            rifleDie = 10;
        }
    }

    let rifleAttack = "";
        if (rifleAttackRaw < 0) {
            rifleAttack = rifleAttackRaw;
        }
        else {
            rifleAttack = "+" + rifleAttackRaw;
        }

    let rifleDamageRaw = Math.floor(level/2);
    if (talents.includes("Weapon Specialization (Rifles)")) {
        rifleDamageRaw += 2;
    }
    if (talents.includes("Greater Weapon Specialization (Rifles)")) {
        rifleDamageRaw += 2;
    }
    let rifleDamage = "";
    if (rifleDamageRaw == 0) {
        rifleDamage = "";
    }
    else if (rifleDamageRaw < 0) {
        rifleDamage = rifleDamageRaw;
    }
    else {
        rifleDamage = "+" + rifleDamageRaw;
    }
    let string = rifleWeapon + " " + rifleAttack +" ("+ rifleDice+"d"+rifleDie+rifleDamage + special + ")";

    return [string,rifleWeapon];
}