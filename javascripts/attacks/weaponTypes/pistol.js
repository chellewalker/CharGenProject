export function getPistol(available,BAB,level,dex,feats,talents,size) {
    let pistolWeapon = "";
    let pistolDice;
    let pistolDie;
    let special = "";
    let pistolAttackRaw = BAB + Math.floor((dex-10)/2);

    while (pistolWeapon == "") {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum == 0) {
            pistolWeapon = "Blaster Pistol";
            pistolDice = 3;
            pistolDie = 6;
        }
        if (randomNum == 1 && available.includes("CR") && size != "Small") {
            pistolWeapon = "Heavy Blaster Pistol";
            pistolDice = 3;
            pistolDie = 8;
        }
        if (randomNum == 2 && available.includes("CR") && size != "Large") {
            pistolWeapon = "Hold-Out Blaster Pistol";
            pistolDice = 3;
            pistolDie = 4;
        }
        if (randomNum == 3 && available.includes("CR")) {
            pistolWeapon = "Ion Pistol";
            pistolDice = 3;
            pistolDie = 6;
            special = " (Ion)";
        }
        if (randomNum == 4 && available.includes("CR")) {
            pistolWeapon = "Sporting Blaster Pistol";
            pistolDice = 3;
            pistolDie = 4;
        }
        if (randomNum == 5 && available.includes("CR")) {
            pistolWeapon = "Slugthrower Pistol";
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
    let pistolDamage = "";
    if (pistolDamageRaw < 0) {
        pistolDamage = pistolDamageRaw;
    }
    else {
        pistolDamage = "+" + pistolDamageRaw;
    }
    let string = pistolWeapon + " " + pistolAttack +" ("+ pistolDice+"d"+pistolDie+pistolDamage + special + ")";

    return [string,pistolWeapon];
}