export function getLightsaber(available,BAB,level,str,dex,cha,feats,talents,size,speciesTraits) {
    let lightsaberWeapon = "";
    let special = "";
    let weaponSize;
    let lightsaberDice;
    let lightsaberDie;
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
    if (speciesTraits.includes("Extra Arms") || feats.includes("Wookiee Grip")) {
        relativeSize++;
    }

    let lightsaberAttackRaw = BAB + Math.floor((str-10)/2);
    if (talents.includes("Noble Fencing Style") && feats.includes("Weapon Finesse")) {
        lightsaberAttackRaw = BAB + Math.max(Math.floor((cha-10)/2),Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }
    else if (talents.includes("Noble Fencing Style")) {
        lightsaberAttackRaw = BAB + Math.max(Math.floor((cha-10)/2),Math.floor((str-10)/2));
    }
    else if (feats.includes("Weapon Finesse")) {
        lightsaberAttackRaw = BAB + Math.max(Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }
    if (feats.includes("Weapon Focus (Lightsabers)")) {
        lightsaberAttackRaw++;
    }
    if (talents.includes("Greater Weapon Focus (Lightsabers)")) {
        lightsaberAttackRaw++;
    }
    while (lightsaberWeapon == "") {
        let randomNum = Math.floor(Math.random() * 14);

        if (randomNum == 0) {
            lightsaberWeapon = "Lightsaber";
            weaponSize = 1;
            lightsaberDice = 2;
            lightsaberDie = 8;
        }
        if (randomNum == 1 && available.includes("CR") && size == "Small") {
            lightsaberWeapon = "Short Lightsaber";
            weaponSize = 0;
            lightsaberDice = 2;
            lightsaberDie = 6;
        }
        if (randomNum == 2 && available.includes("CR") && size != "Small") {
            lightsaberWeapon = "Double-Sided Lightsaber";
            weaponSize = 2;
            lightsaberDice = 2;
            lightsaberDie = 8;
        }
        if (randomNum == 3 && available.includes("TotG") || randomNum == 3 && available.includes("JATM")) {
            lightsaberWeapon = "Lightwhip";
            weaponSize = 1;
            lightsaberDice = 2;
            lightsaberDie = 4;
            special = ", 2-Square Reach"
        }
        if (randomNum == 4 && available.includes("KotORCG") || randomNum == 4 && available.includes("JATM")) {
            lightsaberWeapon = "Lightfoil";
            weaponSize = 1;
            lightsaberDice = 2;
            lightsaberDie = 8;
        }
        if (randomNum == 5 && available.includes("FUCG") || randomNum == 5 && available.includes("JATM")) {
            lightsaberWeapon = "Guard Shoto";
            weaponSize = 0;
            lightsaberDice = 2;
            lightsaberDie = 4;
        }
        if (randomNum == 6 && available.includes("JATM")) {
            lightsaberWeapon = "Archaic Lightsaber";
            weaponSize = 1;
            lightsaberDice = 2;
            lightsaberDie = 6;
        }
        if (randomNum == 7 && available.includes("JATM")) {
            lightsaberWeapon = "Crossguard Lightsaber";
            weaponSize = 1;
            lightsaberDice = 2;
            lightsaberDie = 8;
        }
        if (randomNum == 8 && available.includes("JATM")) {
            lightsaberWeapon = "Dual-Phase Lightsaber";
            weaponSize = 1;
            lightsaberDice = 2;
            lightsaberDie = 8;
            special = ", 2-Square Reach"
        }
        if (randomNum == 9 && available.includes("JATM")) {
            lightsaberWeapon = "Dueling Lightsaber";
            weaponSize = 1;
            lightsaberDice = 2;
            lightsaberDie = 8;
        }
        if (randomNum == 10 && available.includes("JATM") && size != "Small" || randomNum == 10 && available.includes("FUCG") && size != "Small") {
            lightsaberWeapon = "Lightsaber Pike";
            weaponSize = 2;
            lightsaberDice = 2;
            lightsaberDie = 8;
            special = ", 2-Square Reach"
        }
        if (randomNum == 11 && available.includes("JATM") && size != "Small") {
            lightsaberWeapon = "Long-Handle Lightsaber";
            weaponSize = 2;
            lightsaberDice = 2;
            lightsaberDie = 8;
        }
        if (randomNum == 12 && available.includes("JATM")) {
            lightsaberWeapon = "Modern Lightfoil";
            weaponSize = 1;
            lightsaberDice = 2;
            lightsaberDie = 6;
        }
        if (randomNum == 13 && available.includes("JATM")) {
            lightsaberWeapon = "Retrosaber";
            weaponSize = 1;
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
    if (talents.includes("Greater Weapon Specialization (Lightsabers)")) {
        lightsaberDamageRaw += 2;
    }
    if (talents.includes("Melee Smash")) {
        lightsaberDamageRaw++;
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

    let string = lightsaberWeapon + " " + lightsaberAttack +" ("+ lightsaberDice+"d"+lightsaberDie+lightsaberDamage + special + ")";
    if (feats.includes("Dual Weapon Mastery I") && relativeSize >= weaponSize) {
        lightsaberWeapon = lightsaberWeapon + " (2)";
    }

    return [string,lightsaberWeapon];
}