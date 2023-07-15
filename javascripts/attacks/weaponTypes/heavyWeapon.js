export function getHeavyWeapon(available,BAB,level,dex,feats,talents,size,speciesTraits) {
    let heavyWeaponWeapon = "";
    let heavyWeaponDice;
    let heavyWeaponDie;
    let special = "";

    let heavyWeaponAttackRaw = BAB + Math.floor((dex-10)/2);
    if (feats.includes("Weapon Focus (Heavy Weapons)")) {
        heavyWeaponAttackRaw++;
    }
    if (talents.includes("Greater Weapon Focus (Heavy Weapons)")) {
        heavyWeaponAttackRaw++;
    }
    while (heavyWeaponWeapon == "") {
        let randomNum = Math.floor(Math.random() * 15);

        if (randomNum == 0 || size == "Small") {
            heavyWeaponWeapon = "Grenade Launcher";
            heavyWeaponDice = 4;
            heavyWeaponDie = 6;
            special = ", 2-Square Burst";
        }
        if (randomNum == 1 && available.includes("CR") && size != "Small") {
            heavyWeaponWeapon = "Heavy Repeating Blaster";
            heavyWeaponDice = 3;
            heavyWeaponDie = 10;
            special = ", 2-Square Autofire";
            heavyWeaponAttackRaw -= 5;
        }
        if (randomNum == 2 && available.includes("CR") && size != "Small") {
            heavyWeaponWeapon = "Blaster Cannon";
            heavyWeaponDice = 3;
            heavyWeaponDie = 12;
            special = ", 1-Square Splash";
        }
        if (randomNum == 3 && available.includes("CR") && size != "Small") {
            heavyWeaponWeapon = "Missile Launcher";
            heavyWeaponDice = 6;
            heavyWeaponDie = 6;
            special = ", 2-Square Burst";
        }
        if (randomNum == 4 && available.includes("CR") && size != "Small") {
            heavyWeaponWeapon = "E-Web Repeating Blaster";
            heavyWeaponDice = 3;
            heavyWeaponDie = 12;
            special = ", 2-Square Autofire";
            heavyWeaponAttackRaw -= 5;
        }
        if (randomNum == 5 && available.includes("TotG") && size != "Small") {
            heavyWeaponWeapon = "Light Concussion Missile Launcher";
            heavyWeaponDice = "(4";
            heavyWeaponDie = 10;
            special = ")x2, 2-Square Splash";
        }
        if (randomNum == 6 && available.includes("KotORCG") && size != "Small") {
            heavyWeaponWeapon = "Carbonite Rifle";
            heavyWeaponDice = 3;
            heavyWeaponDie = 10;
            special = " (Stun)";
        }
        if (randomNum == 7 && available.includes("FUCG") && size != "Small") {
            heavyWeaponWeapon = "E-Web Missile Launcher";
            heavyWeaponDice = 6;
            heavyWeaponDie = 6;
            special = ", 2-Square Area Attack";
        }
        if (randomNum == 8 && available.includes("LECG") && size != "Small") {
            heavyWeaponWeapon = "Heavy Blaster Cannon";
            heavyWeaponDice = 4;
            heavyWeaponDie = 12;
            special = ", 1-Square Splash";
        }
        if (randomNum == 9 && available.includes("RECG") && size != "Small") {
            heavyWeaponWeapon = "PLX-2M Portable Missile Launcher";
            heavyWeaponDice = 8;
            heavyWeaponDie = 6;
            special = ", 3-Square Burst";
        }
        if (randomNum == 10 && available.includes("RECG") && size != "Small") {
            heavyWeaponWeapon = "Miniature Proton Torpedo Launcher";
            heavyWeaponDice = 6;
            heavyWeaponDie = 10;
            special = ", 2-Square Burst";
        }
        if (randomNum == 11 && available.includes("GaW") && size != "Small") {
            heavyWeaponWeapon = "Flame Cannon";
            heavyWeaponDice = 5;
            heavyWeaponDie = 6;
            special = " (Fire), 12-Square Cone";
        }
        if (randomNum == 12 && available.includes("GaW") && size != "Small") {
            heavyWeaponWeapon = "Mortar Launcher";
            heavyWeaponDice = 4;
            heavyWeaponDie = 6;
            special = ", 2-Square Burst";
        }
        if (randomNum == 13 && available.includes("GaW") && size != "Small") {
            heavyWeaponWeapon = "Rotary Blaster Cannon";
            heavyWeaponDice = 3;
            heavyWeaponDie = 10;
            special = ", 2x4-Square Autofire";
            heavyWeaponAttackRaw -= 10;
        }
        if (randomNum == 14 && available.includes("WE") && size != "Small") {
            heavyWeaponWeapon = "HH-15 Projectile Launcher";
            heavyWeaponDice = 6;
            heavyWeaponDie = 6;
            special = ", 1-Square Splash";
        }
    }

        let heavyWeaponAttack = "";
        if (heavyWeaponAttackRaw < 0) {
            heavyWeaponAttack = heavyWeaponAttackRaw;
        }
        else {
            heavyWeaponAttack = "+" + heavyWeaponAttackRaw;
        }

    let heavyWeaponDamageRaw = Math.floor(level/2);
    if (talents.includes("Weapon Specialization (Heavy Weapons)")) {
        heavyWeaponDamageRaw += 2;
    }
    if (talents.includes("Greater Weapon Specialization (Heavy Weapons)")) {
        heavyWeaponDamageRaw += 2;
    }
    let heavyWeaponDamage = "";
    if (heavyWeaponDamageRaw == 0) {
        heavyWeaponDamage = "";
    }
    else if (heavyWeaponDamageRaw < 0) {
        heavyWeaponDamage = heavyWeaponDamageRaw;
    }
    else {
        heavyWeaponDamage = "+" + heavyWeaponDamageRaw;
    }

    let string = heavyWeaponWeapon + " " + heavyWeaponAttack +" ("+ heavyWeaponDice+"d"+heavyWeaponDie+heavyWeaponDamage + special + ")";

    return [string,heavyWeaponWeapon];
}