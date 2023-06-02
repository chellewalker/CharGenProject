export function getRifle(available,BAB,level,dex,feats,talents,size) {
    let rifleWeapon = "";
    let rifleDice;
    let rifleDie;
    let special = "";

    let rifleAttackRaw = BAB + Math.floor((dex-10)/2);
    if (feats.includes("Weapon Focus (Rifles)")) {
        rifleAttackRaw++;
    }
    while (rifleWeapon == "") {
        let randomNum = Math.floor(Math.random() * 13);

        if (randomNum == 0) {
            rifleWeapon = "Blaster Rifle";
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 1 && available.includes("CR")) {
            rifleWeapon = "Blaster Carbine";
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 2 && available.includes("CR")) {
            rifleWeapon = "Sporting Blaster Rifle";
            rifleDice = 3;
            rifleDie = 6;
        }
        if (randomNum == 3 && available.includes("CR")) {
            rifleWeapon = "Ion Rifle";
            rifleDice = 3;
            rifleDie = 8;
            special = " (Ion)";
        }
        if (randomNum == 4 && available.includes("CR")) {
            rifleWeapon = "Slugthrower Rifle";
            rifleDice = 2;
            rifleDie = 8;
        }
        if (randomNum == 5 && available.includes("CR") && size != "Small") {
            rifleWeapon = "Light Repeating Blaster";
            rifleDice = 3;
            rifleDie = 8;
            special = ", 2-Square Autofire";
            rifleAttackRaw -= 5;
        }
        if (randomNum == 6 && available.includes("CR") && size != "Small") {
            rifleWeapon = "Heavy Blaster Rifle";
            rifleDice = 3;
            rifleDie = 10;
        }
        if (randomNum == 7 && available.includes("KotORCG") && size != "Small") {
            rifleWeapon = "Assault Blaster Rifle";
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 8 && available.includes("KotORCG")) {
            rifleWeapon = "Commando Special Rifle";
            rifleDice = 3;
            rifleDie = 10;
        }
        if (randomNum == 9 && available.includes("KotORCG")) {
            rifleWeapon = "Ion Carbine";
            rifleDice = 3;
            rifleDie = 8;
            special = " (Ion)";
        }
        if (randomNum == 10 && available.includes("KotORCG")) {
            rifleWeapon = "Pulse-Wave Rifle";
            rifleDice = 2;
            rifleDie = 8;
        }
        if (randomNum == 11 && available.includes("KotORCG") && size != "Small") {
            rifleWeapon = "Repeating Blaster Carbine";
            rifleDice = 3;
            rifleDie = 10;
            special = ", 2-Square Autofire";
            rifleAttackRaw -= 5;
        }
        if (randomNum == 12 && available.includes("KotORCG")) {
            rifleWeapon = "Sonic Rifle";
            rifleDice = 2;
            rifleDie = 8;
            special = " (Sonic)";
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