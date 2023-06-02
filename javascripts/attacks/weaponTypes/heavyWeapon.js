export function getHeavyWeapon(available,BAB,level,dex,feats,talents,size) {
    let heavyWeaponWeapon = "";
    let heavyWeaponDice;
    let heavyWeaponDie;
    let special = "";

    let heavyWeaponAttackRaw = BAB + Math.floor((dex-10)/2);
    if (feats.includes("Weapon Focus (Heavy Weapons)")) {
        heavyWeaponAttackRaw++;
    }
    while (heavyWeaponWeapon == "") {
        let randomNum = Math.floor(Math.random() * 7);

        if (randomNum == 0) {
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
            heavyWeaponDice = 4;
            heavyWeaponDie = 10;
            special = "x2, 2-Square Splash";
        }
        if (randomNum == 6 && available.includes("KotORCG") && size != "Small") {
            heavyWeaponWeapon = "Carbonite Rifle";
            heavyWeaponDice = 3;
            heavyWeaponDie = 10;
            special = " (Stun)";
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