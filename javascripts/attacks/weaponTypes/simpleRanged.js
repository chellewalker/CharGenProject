export function getSimpleRanged(available,BAB,level,dex,str,feats,talents,size) {
    let simpleRangedWeapon = "";
    let weaponSize;
    let simpleRangedDice;
    let simpleRangedDie;
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

    let simpleRangedAttackRaw = BAB + Math.floor((dex-10)/2);
    if (feats.includes("Weapon Focus (Simple Weapons)")) {
        simpleRangedAttackRaw++;
    }
    if (talents.includes("Greater Weapon Focus (Simple Weapons)")) {
        simpleRangedAttackRaw++;
    }
    while (simpleRangedWeapon == "") {
        let randomNum = Math.floor(Math.random() * 10);

        if (randomNum == 0) {
            simpleRangedWeapon = "Bow";
            weaponSize = 2;
            simpleRangedDice = 1;
            simpleRangedDie = 6;
        }
        if (randomNum == 1 && available.includes("CR")) {
            simpleRangedWeapon = "Sling";
            weaponSize = 0;
            simpleRangedDice = 1;
            simpleRangedDie = 4;
        }
        if (randomNum == 2 && available.includes("TotG")) {
            simpleRangedWeapon = "Saberdart Launcher";
            weaponSize = -1;
            simpleRangedDice = 1;
            simpleRangedDie = 4;
        }
        if (randomNum == 3 && available.includes("SaV") && size != "Small") {
            simpleRangedWeapon = "Battering Ram";
            weaponSize = 2;
            simpleRangedDice = 5;
            simpleRangedDie = 10;
        }
        if (randomNum == 4 && available.includes("LECG")) {
            simpleRangedWeapon = "Razor Bug";
            weaponSize = 0;
            simpleRangedDice = 2;
            simpleRangedDie = 8;
        }
        if (randomNum == 5 && available.includes("LECG")) {
            simpleRangedWeapon = "Thud Bug";
            weaponSize = 0;
            simpleRangedDice = 2;
            simpleRangedDie = 8;
            special = " (Stun)";
        }
        if (randomNum == 6 && available.includes("GaW")) {
            simpleRangedWeapon = "Repeating Crossbow";
            weaponSize = 1;
            simpleRangedDice = 1;
            simpleRangedDie = 8;
        }
        if (randomNum == 7 && available.includes("GoI")) {
            simpleRangedWeapon = "Darter";
            weaponSize = 1;
            simpleRangedDice = 1;
            simpleRangedDie = 1;
        }
        if (randomNum == 8 && available.includes("UR")) {
            simpleRangedWeapon = "Crossbow";
            weaponSize = 1;
            simpleRangedDice = 1;
            simpleRangedDie = 8;
        }
        if (randomNum == 9 && available.includes("HC")) {
            simpleRangedWeapon = "Pulley Bow";
            weaponSize = 2;
            simpleRangedDice = 1;
            simpleRangedDie = 8;
        }
    }

        let simpleRangedAttack = "";
        if (simpleRangedAttackRaw < 0) {
            simpleRangedAttack = simpleRangedAttackRaw;
        }
        else {
            simpleRangedAttack = "+" + simpleRangedAttackRaw;
        }

    let simpleRangedDamageRaw = Math.floor(level/2);
    if (talents.includes("Weapon Specialization (Simple Weapons)")) {
        simpleRangedDamageRaw += 2;
    }
    if (talents.includes("Greater Weapon Specialization (Simple Weapons)")) {
        simpleRangedDamageRaw += 2;
    }
    if (simpleRangedWeapon == "Bow (10 Arrows)" || simpleRangedWeapon == "Sling (10 Stones)" || simpleRangedWeapon == "Pulley Bow (10 Arrows)") {
        simpleRangedDamageRaw += Math.floor((str-10)/2);
    }
    let simpleRangedDamage = "";
    if (simpleRangedDamageRaw == 0) {
        simpleRangedDamage = "";
    }
    else if (simpleRangedDamageRaw < 0) {
        simpleRangedDamage = simpleRangedDamageRaw;
    }
    else {
        simpleRangedDamage = "+" + simpleRangedDamageRaw;
    }
    let string = simpleRangedWeapon + " " + simpleRangedAttack +" ("+ simpleRangedDice+"d"+simpleRangedDie+simpleRangedDamage + special + ")";
    if (feats.includes("Dual Weapon Mastery I") && relativeSize >= weaponSize) {
        simpleRangedWeapon = simpleRangedWeapon + " (2)";
    }
    if (simpleRangedWeapon == "Bow" || simpleRangedWeapon == "Pulley Bow" || simpleRangedWeapon == "Crossbow") {
        simpleRangedWeapon = simpleRangedWeapon + " (10 Arrows)";
    }
    else if (simpleRangedWeapon == "Sling") {
        simpleRangedWeapon = simpleRangedWeapon + " (10 Stones)";
    }
    else if (simpleRangedWeapon == "Razor Bug" || simpleRangedWeapon == "Thud Bug") {
        simpleRangedWeapon = simpleRangedWeapon + " (3)";
    }

    return [string,simpleRangedWeapon];
}