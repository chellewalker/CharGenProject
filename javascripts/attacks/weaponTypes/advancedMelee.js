export function getAdvancedMelee(available,BAB,level,str,dex,cha,feats,talents,size) {
    let advancedMeleeWeapon = "";
    let weaponSize;
    let advancedMeleeDice;
    let advancedMeleeDie;
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

    let advancedMeleeAttackRaw = BAB + Math.floor((str-10)/2);

    while (advancedMeleeWeapon == "") {
        let randomNum = Math.floor(Math.random() * 9);

        if (randomNum == 0) {
            advancedMeleeWeapon = "Vibroblade";
            weaponSize = 0;
            advancedMeleeDice = 2;
            advancedMeleeDie = 6;
        }
        if (randomNum == 1 && available.includes("CR") && size != "Large") {
            advancedMeleeWeapon = "Vibrodagger";
            weaponSize = -1;
            advancedMeleeDice = 2;
            advancedMeleeDie = 4;
        }
        if (randomNum == 2 && available.includes("CR")) {
            advancedMeleeWeapon = "Vibrobayonet";
            weaponSize = 2;
            advancedMeleeDice = 2;
            advancedMeleeDie = 6;
        }
        if (randomNum == 3 && available.includes("CR")) {
            advancedMeleeWeapon = "Force Pike";
            weaponSize = 1;
            advancedMeleeDice = 2;
            advancedMeleeDie = 8;
        }
        if (randomNum == 4 && available.includes("CR") && size != "Small") {
            advancedMeleeWeapon = "Electrostaff";
            weaponSize = 2;
            advancedMeleeDice = 2;
            advancedMeleeDie = 6;
        }
        if (randomNum == 5 && available.includes("CR") && size != "Small") {
            advancedMeleeWeapon = "Vibro-Axe";
            weaponSize = 2;
            advancedMeleeDice = 2;
            advancedMeleeDie = 10;
        }
        if (randomNum == 6 && available.includes("KotORCG")) {
            advancedMeleeWeapon = "Dire Vibroblade";
            weaponSize = 1;
            advancedMeleeDice = 2;
            advancedMeleeDie = 6;
        }
        if (randomNum == 7 && available.includes("KotORCG") && size != "Small") {
            advancedMeleeWeapon = "Double Vibroblade";
            weaponSize = 2;
            advancedMeleeDice = 2;
            advancedMeleeDie = 6;
        }
        if (randomNum == 8 && available.includes("KotORCG") && size != "Small") {
            advancedMeleeWeapon = "Shockstaff";
            weaponSize = 2;
            advancedMeleeDice = 2;
            advancedMeleeDie = 6;
        }
    }

    if (talents.includes("Noble Fencing Style") && feats.includes("Weapon Finesse") && relativeSize < weaponSize) {
        advancedMeleeAttackRaw = BAB + Math.max(Math.floor((cha-10)/2),Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }
    else if (talents.includes("Noble Fencing Style") && relativeSize < weaponSize) {
        advancedMeleeAttackRaw = BAB + Math.max(Math.floor((cha-10)/2),Math.floor((str-10)/2));
    }
    else if (feats.includes("Weapon Finesse") && relativeSize < weaponSize) {
        advancedMeleeAttackRaw = BAB + Math.max(Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }
    if (feats.includes("Weapon Focus (Advanced Melee Weapons)")) {
        advancedMeleeAttackRaw++;
    }

        let advancedMeleeAttack = "";
        if (advancedMeleeAttackRaw < 0) {
            advancedMeleeAttack = advancedMeleeAttackRaw;
        }
        else {
            advancedMeleeAttack = "+" + advancedMeleeAttackRaw;
        }

    let advancedMeleeDamageRaw = Math.floor(level/2) + Math.floor((str-10)/2);
    if (talents.includes("Weapon Specialization (Advanced Melee Weapons)")) {
        advancedMeleeDamageRaw += 2;
    }
    if (talents.includes("Melee Smash")) {
        advancedMeleeDamageRaw++;
    }
    let advancedMeleeDamage = "";
    if (advancedMeleeDamageRaw == 0) {
        advancedMeleeDamage = "";
    }
    else if (advancedMeleeDamageRaw < 0) {
        advancedMeleeDamage = advancedMeleeDamageRaw;
    }
    else {
        advancedMeleeDamage = "+" + advancedMeleeDamageRaw;
    }
    let string = advancedMeleeWeapon + " " + advancedMeleeAttack +" ("+ advancedMeleeDice+"d"+advancedMeleeDie+advancedMeleeDamage + ")";
    if (feats.includes("Dual Weapon Mastery I") && relativeSize >= weaponSize) {
        advancedMeleeWeapon = advancedMeleeWeapon + " (2)";
    }

    return [string,advancedMeleeWeapon];
}