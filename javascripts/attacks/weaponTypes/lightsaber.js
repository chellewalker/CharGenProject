export function getLightsaber(available,BAB,level,str,dex,feats,talents,size) {
    let lightsaberWeapon = "";
    let weaponSize;
    let lightsaberDice;
    let lightsaberDie;
    let lightsaberAttackRaw = BAB + Math.floor((str-10)/2);
    if (feats.includes("Weapon Finesse")) {
        lightsaberAttackRaw = BAB + Math.max(Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }
    if (feats.includes("Weapon Focus (Lightsabers)")) {
        lightsaberAttackRaw++;
    }
    while (lightsaberWeapon == "") {
        let randomNum = Math.floor(Math.random() * 4);

        if (randomNum == 0) {
            lightsaberWeapon = "Lightsaber";
            weaponSize = "Medium";
            lightsaberDice = 2;
            lightsaberDie = 8;
        }
        if (randomNum == 1 && available.includes("CR") && size != "Large") {
            lightsaberWeapon = "Short Lightsaber";
            weaponSize = "Small";
            lightsaberDice = 2;
            lightsaberDie = 6;
        }
        if (randomNum == 2 && available.includes("CR") && size != "Small") {
            lightsaberWeapon = "Double-Sided Lightsaber";
            weaponSize = "Large";
            lightsaberDice = 2;
            lightsaberDie = 8;
        }
        if (randomNum == 3 && available.includes("KotORCG")) {
            lightsaberWeapon = "Lightfoil";
            weaponSize = "Medium";
            lightsaberDice = 2;
            lightsaberDie = 8;
        }
    }

        let lightsaberAttack = "";
        if (lightsaberAttackRaw < 0) {
            lightsaberAttack = lightsaberAttackRaw;
        }
        else {
            lightsaberAttack = "+" + lightsaberAttackRaw;
        }

    let lightsaberDamageRaw = Math.floor(level/2) + Math.floor((str-10)/2);
    if (talents.includes("Weapon Specialization (Lightsabers)")) {
        lightsaberDamageRaw += 2;
    }
    let lightsaberDamage = "";
    if (lightsaberDamageRaw == 0) {
        lightsaberDamage = "";
    }
    else if (lightsaberDamageRaw < 0) {
        lightsaberDamage = lightsaberDamageRaw;
    }
    else {
        lightsaberDamage = "+" + lightsaberDamageRaw;
    }

    let string = lightsaberWeapon + " " + lightsaberAttack +" ("+ lightsaberDice+"d"+lightsaberDie+lightsaberDamage + ")";
    if (feats.includes("Dual Weapon Mastery I") && size == "Medium" && weaponSize == "Small" ||
            feats.includes("Dual Weapon Mastery I") && size == "Medium" && weaponSize == "Medium" ||
            feats.includes("Dual Weapon Mastery I") && size == "Large" ||
            feats.includes("Dual Weapon Mastery I") && size == "Small" && weaponSize == "Small") {
        lightsaberWeapon = lightsaberWeapon + " (2)";
    }

    return [string,lightsaberWeapon];
}