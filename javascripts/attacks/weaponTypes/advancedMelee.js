export function getAdvancedMelee(available,BAB,level,str,dex,feats,talents,size) {
    let advancedMeleeWeapon = "";
    let advancedMeleeDice;
    let advancedMeleeDie;
    let advancedMeleeAttackRaw = BAB + Math.floor((str-10)/2);
    if (feats.includes("Weapon Finesse")) {
        advancedMeleeAttackRaw = BAB + Math.max(Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }
    if (feats.includes("Weapon Focus (Advanced Melee Weapons)")) {
        advancedMeleeAttackRaw++;
    }

    while (advancedMeleeWeapon == "") {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum == 0) {
            advancedMeleeWeapon = "Vibroblade";
            advancedMeleeDice = 2;
            advancedMeleeDie = 6;
        }
        if (randomNum == 1 && available.includes("CR") && size != "Large") {
            advancedMeleeWeapon = "Vibrodagger";
            advancedMeleeDice = 2;
            advancedMeleeDie = 4;
        }
        if (randomNum == 2 && available.includes("CR")) {
            advancedMeleeWeapon = "Vibrobayonet";
            advancedMeleeDice = 2;
            advancedMeleeDie = 6;
        }
        if (randomNum == 3 && available.includes("CR")) {
            advancedMeleeWeapon = "Force Pike";
            advancedMeleeDice = 2;
            advancedMeleeDie = 8;
        }
        if (randomNum == 4 && available.includes("CR") && size != "Small") {
            advancedMeleeWeapon = "Electrostaff";
            advancedMeleeDice = 2;
            advancedMeleeDie = 6;
        }
        if (randomNum == 5 && available.includes("CR") && size != "Small") {
            advancedMeleeWeapon = "Vibro-Axe";
            advancedMeleeDice = 2;
            advancedMeleeDie = 10;
        }
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
    let advancedMeleeDamage = "";
    if (advancedMeleeDamageRaw < 0) {
        advancedMeleeDamage = advancedMeleeDamageRaw;
    }
    else {
        advancedMeleeDamage = "+" + advancedMeleeDamageRaw;
    }
    let string = advancedMeleeWeapon + " " + advancedMeleeAttack +" ("+ advancedMeleeDice+"d"+advancedMeleeDie+advancedMeleeDamage + ")";

    return [string,advancedMeleeWeapon];
}