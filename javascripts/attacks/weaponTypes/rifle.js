export function getRifle(available,BAB,level,dex,feats,talents,size,speciesTraits) {
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
    if (speciesTraits.includes("Extra Arms")) {
        relativeSize++;
    }

    let rifleAttackRaw = BAB + Math.floor((dex-10)/2);
    if (feats.includes("Weapon Focus (Rifles)")) {
        rifleAttackRaw++;
    }
    if (talents.includes("Greater Weapon Focus (Rifles)")) {
        rifleAttackRaw++;
    }

    let rifleDamageRaw = Math.floor(level/2);
    while (rifleWeapon == "") {
        let randomNum = Math.floor(Math.random() * 42);

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
            if (feats.includes("Sport Hunter")) {
                rifleDie = 12;
            }
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
            if (feats.includes("Riflemaster")) {
                rifleDie = 12;
            }
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
            rifleDamageRaw += 5;
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
        if (randomNum == 15 && available.includes("FUCG") && size != "Small") {
            rifleWeapon = "Flechette Launcher";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
            special = ", 1-Square Splash";
        }
        if (randomNum == 16 && available.includes("FUCG")) {
            rifleWeapon = "Incinerator Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 6;
        }
        if (randomNum == 17 && available.includes("FUCG") && size != "Small") {
            rifleWeapon = "Rail Detonator Gun";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
            special = ", 1-Square Splash";
        }
        if (randomNum == 18 && available.includes("FUCG")) {
            rifleWeapon = "Stokhli Spray Stick";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
            special = " (Stun)";
        }
        if (randomNum == 19 && available.includes("SaV")) {
            rifleWeapon = "Micro Grenade Launcher";
            weaponSize = 1;
            rifleDice = 4;
            rifleDie = 6;
            special = ", 2-Square Burst";
        }
        if (randomNum == 20 && available.includes("SaV")) {
            rifleWeapon = "Snare Rifle";
            weaponSize = 1;
            rifleDice = 1;
            rifleDie = 6;
            special = " (Stun)";
        }
        if (randomNum == 21 && available.includes("SaV")) {
            rifleWeapon = "Sniper Blaster Rifle";
            weaponSize = 2;
            rifleDice = 3;
            rifleDie = 10;
        }
        if (randomNum == 22 && available.includes("CWCG") && size != "Small") {
            rifleWeapon = "DLT-20A Longblaster";
            weaponSize = 2;
            rifleDice = 3;
            rifleDie = 10;
        }
        if (randomNum == 23 && available.includes("CWCG")) {
            rifleWeapon = "Adventurer Slugthrower";
            weaponSize = 1;
            rifleDice = 2;
            rifleDie = 10;
        }
        if (randomNum == 24 && available.includes("CWCG")) {
            rifleWeapon = "Firelance Blaster Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 25 && available.includes("LECG")) {
            rifleWeapon = "ARC-9965 Blaster";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 26 && available.includes("LECG")) {
            rifleWeapon = "Double-Barreled Blaster Carbine";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 27 && available.includes("LECG") && size != "Small") {
            rifleWeapon = "Heavy Assault Blaster";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 10;
        }
        if (randomNum == 28 && available.includes("LECG")) {
            rifleWeapon = "Hunting Blaster Carbine";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 29 && available.includes("LECG")) {
            rifleWeapon = "Sporting Blaster Carbine";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 30 && available.includes("RECG")) {
            rifleWeapon = "ESPO 500 Riot Gun";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 31 && available.includes("RECG")) {
            rifleWeapon = "SG-4 Blaster Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 32 && available.includes("GaW")) {
            rifleWeapon = "Interchangeable Rifle System";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 33 && available.includes("GaW")) {
            rifleWeapon = "Scattergun";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 34 && available.includes("GaW")) {
            rifleWeapon = "Variable Blaster";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 4;
        }
        if (randomNum == 35 && available.includes("GaW") && size != "Small") {
            rifleWeapon = "Heavy Variable Blaster";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 6;
        }
        if (randomNum == 36 && available.includes("GoI")) {
            rifleWeapon = "Xerrol Nightstinger";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 6;
        }
        if (randomNum == 37 && available.includes("UR") && size != "Small") {
            rifleWeapon = "Concussion Rifle";
            weaponSize = 1;
            rifleDice = 2;
            rifleDie = 10;
        }
        if (randomNum == 38 && available.includes("UR")) {
            rifleWeapon = "Targeting Blaster Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 6;
        }
        if (randomNum == 39 && available.includes("WE")) {
            rifleWeapon = "Stealth Blaster Carbine";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
        if (randomNum == 40 && available.includes("HC")) {
            rifleWeapon = "Black-Powder Rifle";
            weaponSize = 1;
            rifleDice = 2;
            rifleDie = 6;
        }
        if (randomNum == 41 && available.includes("HC") && size != "Small") {
            rifleWeapon = "WESTAR-M5 Blaster Rifle";
            weaponSize = 1;
            rifleDice = 3;
            rifleDie = 8;
        }
    }

    let rifleAttack = "";
        if (rifleAttackRaw < 0) {
            rifleAttack = rifleAttackRaw;
        }
        else {
            rifleAttack = "+" + rifleAttackRaw;
        }

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