export function getPistol(available,BAB,level,dex,feats,talents,size) {
    let pistolWeapon = "";
    let weaponSize;
    let pistolDice;
    let pistolDie;
    let special = "";
    let pistolAttackRaw = BAB + Math.floor((dex-10)/2);
    if (feats.includes("Weapon Focus (Pistols)")) {
        pistolAttackRaw++;
    }
    while (pistolWeapon == "") {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum == 0) {
            pistolWeapon = "Blaster Pistol";
            weaponSize = "Small";
            pistolDice = 3;
            pistolDie = 6;
        }
        if (randomNum == 1 && available.includes("CR") && size != "Small") {
            pistolWeapon = "Heavy Blaster Pistol";
            weaponSize = "Medium";
            pistolDice = 3;
            pistolDie = 8;
        }
        if (randomNum == 2 && available.includes("CR") && size != "Large") {
            pistolWeapon = "Hold-Out Blaster Pistol";
            weaponSize = "Tiny";
            pistolDice = 3;
            pistolDie = 4;
        }
        if (randomNum == 3 && available.includes("CR")) {
            pistolWeapon = "Ion Pistol";
            weaponSize = "Small";
            pistolDice = 3;
            pistolDie = 6;
            special = " (Ion)";
        }
        if (randomNum == 4 && available.includes("CR")) {
            pistolWeapon = "Sporting Blaster Pistol";
            weaponSize = "Small";
            pistolDice = 3;
            pistolDie = 4;
        }
        if (randomNum == 5 && available.includes("CR")) {
            pistolWeapon = "Slugthrower Pistol";
            weaponSize = "Small";
            pistolDice = 2;
            pistolDie = 6;
        }
    }

        let pistolAttack = "";
        if (pistolAttackRaw < 0) {
            pistolAttack = pistolAttackRaw;
        }
        else {
            pistolAttack = "+" + pistolAttackRaw;
        }

    let pistolDamageRaw = Math.floor(level/2);
    if (talents.includes("Weapon Specialization (Pistols)")) {
        pistolDamageRaw += 2;
    }
    let pistolDamage = "";
    if (pistolDamageRaw == 0) {
        pistolDamage = "";
    }
    else if (pistolDamageRaw < 0) {
        pistolDamage = pistolDamageRaw;
    }
    else {
        pistolDamage = "+" + pistolDamageRaw;
    }
    let string = pistolWeapon + " " + pistolAttack +" ("+ pistolDice+"d"+pistolDie+pistolDamage + special + ")";
    if (feats.includes("Dual Weapon Mastery I") && size == "Medium" ||
            feats.includes("Dual Weapon Mastery I") && size == "Large" ||
            feats.includes("Dual Weapon Mastery I") && size == "Small" && weaponSize == "Small" ||
            feats.includes("Dual Weapon Mastery I") && size == "Small" && weaponSize == "Tiny") {
        pistolWeapon = pistolWeapon + " (2)";
    }

    return [string,pistolWeapon];
}